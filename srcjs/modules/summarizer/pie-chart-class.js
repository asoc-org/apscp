/** Import dependencies */
// node packages
import * as d3 from "d3";
// define utility functions
import {rad2deg} from "../utils/math.js";
import {deg2rad} from "../utils/math.js";

/** Class representing an object for creating a pie chart. */
export class PieChart {

  /**
   * Create a pie chart.
   * @param {object} metrics - Object with metric data.
   * @param {string} title - Chart title.
   * @param {string} tooltipsId - Identifier for element to contain tooltips.
   * @param {boolean} tooltipShowAbsoluteUnits - Should tooltip report
   * statistics for absolute units?
   * @return {void}
   */
  constructor(metrics, title, tooltipsId, tooltipShowAbsoluteUnits) {
    // assign fields
    this.metrics = metrics;
    this.title = title;
    this.tooltipsId = tooltipsId;
    this.tooltipShowAbsoluteUnits = tooltipShowAbsoluteUnits;
    this.zones = Object.keys(metrics.locked);
    if (metrics.total.length > 1) {
      console.log("`PieChart()`: `metrics` must have a single metric.");
    }

    // compute data for arcs
    this.arcs = {locked: {}, held: {}};
    let start = 0;
    for (let z of this.zones) {
      // append arc values for locked
      this.arcs.locked[z] = {
        begin: start,
        end: start + (metrics.locked[z][0] / metrics.total[0])
      };
      // append arc values for held
      this.arcs.held[z] = {
        begin: start,
        end: start + (metrics.held[z][0] / metrics.total[0])
      };
      // update current start
      start = this.arcs.held[z].end;
    }

    // set plotting fields
    this.width = 120;
    this.height = 120;
    this.chartRadius = this.width / 2;
    this.arcMinRadius = 0;
    this.arcWidth = 50;
    this.scale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, 2 * Math.PI]);
    this.getInnerRadius =
      (index) => this.arcMinRadius + (1 - (index + 1)) * this.arcWidth;
    this.getOuterRadius =
      (index) => this.getInnerRadius(index) + this.arcWidth;
    this.createArc = d3
      .arc()
      .innerRadius((_, i) => this.getInnerRadius(i))
      .outerRadius((_, i) => this.getOuterRadius(i))
      .startAngle((d) => this.scale(d.begin))
      .endAngle((d) => this.scale(d.end));
  }

  /**
   * Get color.
   * @param <string> type - Value equal to `"held"`, `"locked"`, or `"total"`.
   * @param <string> zone - Zone name or `undefined`.
   * @return <string>
   */
  getColor(type, zone) {
    switch(type) {
      case "total": return "#bdbdbd";
      case "held": return `var(--zone-${zone}-primary)`;
      case "locked": return `var(--zone-${zone}-secondary)`;
      default:
        console.error("`type` not recognized: " + type + ".");
        return "#FF0000";
    }
  }

  /**
   * Render tooltip content.
   * @param <string> type - Value equal to `"held"`, `"locked"`, or `"total"`.
   * @param <string> zone - Zone name or `undefined`.
   * @return <void>
   */

  renderTooltipContent(type, zone) {
    // add content
    this.zones.forEach((z) => {
      ["locked", "held"].forEach((x) => {
        // add statistics
        this.tooltip
          .append("div")
          .classed("chart-tooltip-text", true)
          .classed("emph", type === x && zone === z)
          .text(() =>
            `${z} ${x}: ` +
            Math.round((this.metrics[x][z][0] / this.metrics.total[0]) * 100) +
            "%" +
            (this.tooltipShowAbsoluteUnits ?
              " (" + Math.round(this.metrics[x][z][0]).toLocaleString() +
              " " + this.metrics.units[0] + ")" : "")
          )
          .style("color", this.getColor(x, z));
      });
    });
  }

  /**
   * Render segment for a layer in the chart.
   * @param <object> svg - Object created with D3.
   * @param <string> type - Value equal to `"held"`, `"locked"`, or `"total"`.
   * @param <string> zone - Zone name or `undefined`.
   * Note that `zone` has no effect if `type = "total"`.
   * @param <number> delay - Delay (seconds) for animating the segment.
   * @return <void>
   */
  renderSegment(svg, type, zone, delay) {
    // add segment
    svg
      .append("g")
      .selectAll("path")
      .data([{type: type, zone: zone}])
      .enter()
      .append("path")
      .attr("class", "arc")
      .attr("fill", this.getColor(type, zone))
      .style("cursor", "pointer")
      .on("mouseover", (event, d) => {
        // if not rendering total arc, then make arc slightly thicker
        if (type !== "total") {
          d3
            .select(event.target)
            .attr("stroke", this.getColor(d.type, d.zone))
            .attr("stroke-width", 4);
        }
        // set tooltip position
        this.tooltip
          .classed("active", true)
          .style("top", `${event.clientY + 5}px`)
          .style("left", `${event.clientX + 5}px`);
        // set tooltip content
        this.renderTooltipContent(d.type, d.zone);
      })
      .on("mouseout", (event, d) => {
        d3
          .select(event.target)
          .attr("stroke", null);
        this.tooltip
          .classed("active", false)
          .selectAll("div")
          .remove();
      })
      .transition()
      .delay((_, i) => i * 200)
      .duration(delay)
      .attrTween("d", (d, i) => {
        let begin = 0;
        let end = 1;
        if (d.type !== "total") {
          begin = this.arcs[d.type][d.zone].begin;
          end = this.arcs[d.type][d.zone].end;
        }
        const interpolate = d3.interpolate(begin, end);
        return t => this.createArc({begin: begin, end: interpolate(t)}, i);
      });
  }

  /**
   * Render all segments on the chart.
   * @param <object> svg - Object created with D3.
   * @return <void>
   */
  renderAllSegments(svg) {
    // define starting animation delay
    let delay = 100;
    const total_delay = 400;
    // render total segment
    this.renderSegment(svg, "total", undefined, 0);
    // render segments for each zone
    for (let i = 0; i < this.zones.length; ++i) {
      // render held arc
      this.renderSegment(svg, "held", this.zones[i], delay);
      // update delay for next arc
      delay +=
        50 +
        (this.metrics.held[this.zones[i]][0] / this.metrics.total[0]) *
        total_delay;
      // render locked arc
      this.renderSegment(svg, "locked", this.zones[i], delay);
      // update delay for next arc
      delay +=
        50 +
        (this.metrics.locked[this.zones[i]][0] / this.metrics.total[0]) *
        total_delay;
    }
  }

  /**
   * Render tooltip.
   * @return <void>
   */
  renderTooltip(element) {
    this.tooltip = d3
      .select(`#${this.tooltipsId}`)
      .append("div")
      .classed("chart-tooltip", true);
  }

  /**
   * Remove tooltip.
   * @return <void>
   */
  removeTooltip() {
    this.tooltip.remove();
  }

  /**
   * Render the chart as an SVG.
   * @param <HTMLElement> element - Element that contains the chart.
   * @return <HTMLElement>
   */
  renderSvg(element) {
    return d3
      .select(element)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", `translate(${this.width / 2},${this.height / 2})`);
  }

  /**
   * Render title for the chart.
   * @param <HTMLElement> element - Element that contains the chart.
   * @return <HTMLElement>
   */
  renderTitle(element) {
    d3
      .select(element)
      .append("div")
      .classed("chart-title", true)
      .append("label")
      .style("color", "black")
      .node()
      .innerHTML = this.title;
  }

  /**
   * Render chart.
   * @param <HTMLElement> element - Element to append chart.
   * @return <void>
   */
  render(element) {
    // create new element
    let el = document.createElement("div")
    el.classList.add("pie-chart", "chart");
    // initialize and render tooltip
    this.renderTooltip(el);
    // render title
    this.renderTitle(el);
    // initialize chart
    const svg = this.renderSvg(el);
    // render all segments for chart
    this.renderAllSegments(svg);
    // attach class
    el.chart = this;
    // append to element
    element.appendChild(el);
  }

}
