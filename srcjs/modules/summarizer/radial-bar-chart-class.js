/** Import dependencies */
// node packages
import * as d3 from "d3";
// define utility functions
import {rad2deg} from "../utils/math.js";
import {deg2rad} from "../utils/math.js";
import {mean} from "../utils/stats.js";

/** Class representing an object for creating a chart for a theme. */
export class RadialBarChart {

  /**
   * Create a radial bar chart.
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

    // compute data for arcs
    this.arcs = {
      held: this.zones.reduce(
        (o, z) => {
          o[z] = {
            begin: 0,
            end: mean(metrics.held[z].map((x, j) => x / metrics.total[j]))
          };
          return o;
        },
        {}
      ),
      locked: this.zones.reduce(
        (o, z) => {
          o[z] = {
            begin: 0,
            end: mean(metrics.locked[z].map((x, j) => x / metrics.total[j]))
          };
          return o;
        },
        {}
      )
    };

    // set chart fields
    this.width = 120;
    this.height = 120;
    this.chartRadius = this.width / 2;
    this.arcMinRadius = 1;
    this.arcPadding = 3;
    this.numArcs = this.zones.length;
    this.arcWidth =
      (this.chartRadius - this.arcMinRadius - this.numArcs * this.arcPadding) /
      this.numArcs;
    this.scale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, 2 * Math.PI]);
    this.createArc = d3
      .arc()
      .innerRadius((_, i) => this.getInnerRadius(i))
      .outerRadius((_, i) => this.getOuterRadius(i))
      .startAngle((d) => this.scale(d.begin))
      .endAngle((d) => this.scale(d.end));
  }

  /**
   * Get inner radius for segment.
   * @param <number> index - Index for segment.
   * @return <number>
   */
  getInnerRadius(index) {
    return this.arcMinRadius +
      (this.numArcs - (index + 1)) * (this.arcWidth + this.arcPadding);
  }

  /**
   * Get outer radius for segment.
   * @param <number> index - Index for segment.
   * @return <number>
   */
  getOuterRadius(index) {
    return this.getInnerRadius(index) + this.arcWidth;
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
   * Render statistics for all layers.
   * @param <HTMLElement> element - Element to render text on.
   * @param <string> type - Value equal to `"held"`, `"locked"`, or `"total"`.
   * @param <string> zone - Zone name or `undefined`.
   * @return <void>
   */
  renderLayerStatistics(element, type, zone) {
    if (this.metrics.name.length > 1) {
      this.renderMultipleLayersStatistics(element, type, zone);
    } else {
      this.renderSingleLayerStatistics(element, type, zone);
    }
  }

  /**
   * Render statistics for multiple layers.
   * @param <HTMLElement> element - Element to render text on.
   * @param <string> type - Value equal to `"held"`, `"locked"`, or `"total"`.
   * @param <string> zone - Zone name or `undefined`.
   * @return <void>
   */
   renderMultipleLayersStatistics(element, type, zone) {
    // render average statistic for the layers
    element
      .append("div")
      .text(() => `${zone} ${type}:`);
    element
      .append("div")
      .text(() =>
        `\u2022 Average: ${Math.round(this.arcs[type][zone].end * 100)}%`
      );
    // render statistics for each layer
    this.metrics.name.forEach((x, i) => {
      element
        .append("div")
        .text(() =>
          `\u2022 ${x}: ` +
          Math.round(
            (this.metrics[type][zone][i] / this.metrics.total[i]) * 100
          ) +
          "%" +
          (this.tooltipShowAbsoluteUnits ?
            " (" + Math.round(this.metrics[type][zone][i]).toLocaleString() +
            " " + this.metrics.units[i] + ")" : "")
        )
    });
  }

  /**
   * Render statistics for a single layer.
   * @param <HTMLElement> element - Element to render text on.
   * @param <string> type - Value equal to `"held"`, `"locked"`, or `"total"`.
   * @param <string> zone - Zone name or `undefined`.
   * @return <void>
   */
   renderSingleLayerStatistics(element, type, zone) {
    element
      .append("div")
      .text(() =>
        `${zone} ${type}: ` +
        Math.round(
          (this.metrics[type][zone][0] / this.metrics.total[0]) * 100
        ) +
        "%" +
        (this.tooltipShowAbsoluteUnits ?
          " (" + Math.round(this.metrics[type][zone][0]).toLocaleString() +
          " " + this.metrics.units[0] + ")" : "")
    );
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
        this.tooltip
          .append("div")
          .classed("chart-tooltip-text", true)
          .classed("emph", type === x && zone === z)
          .style("color", this.getColor(x, z))
          .call(this.renderLayerStatistics.bind(this), x, z)
      });
    });
  }

  /**
   * Render all segments on the chart.
   * @param <object> svg - Object created with D3.
   * @return <void>
   */
  renderAllSegments(svg) {
    // render segment type
    for (const type of ["total", "held", "locked"]) {
      svg
        .append("g")
        .selectAll("path")
        .data(this.zones)
        .enter()
        .append("path")
        .attr("class", "arc")
        .attr("fill", (d, i) => this.getColor(type, d))
        .style("cursor", "pointer")
        .on("mouseover", (event, d) => {
          // if not rendering total arc, then make arc slightly thicker
          if (type !== "total") {
            d3
              .select(event.target)
              .attr("stroke", this.getColor(type, d))
              .attr("stroke-width", 4);
          }
          // set tooltip content
          this.renderTooltipContent(type, d);
          // set tooltip position
          this.tooltip
            .classed("active", true)
            .style("top", `${event.clientY + 5}px`)
            .style("left", `${event.clientX - 5}px`);
          // if tooltip runs off the page, adjust tooltip position
          const tooltipHeight =
            this.tooltip
            .node()
            .getBoundingClientRect()
            .height;
          const tooltipOverflow =
            event.clientY + 5 + tooltipHeight - window.innerHeight;
          if (tooltipOverflow > 0) {
            this.tooltip.style("top", `${event.clientY - tooltipOverflow}px`);
          }
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
        .duration(type === "total" ? 0 : 400)
        .attrTween("d", (d, i) => {
          let begin = 0;
          let end = 1;
          if (type !== "total") {
            begin = this.arcs[type][d].begin;
            end = this.arcs[type][d].end;
          }
          const interpolate = d3.interpolate(begin, end);
          return t => this.createArc({begin: begin, end: interpolate(t)}, i);
        });
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
    el.classList.add("radial-bar-chart", "chart");
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
