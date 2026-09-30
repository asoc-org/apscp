/** Import dependencies */
// node packages
import * as d3 from "d3";
// define utility functions
import {rad2deg} from "../utils/math.js";
import {deg2rad} from "../utils/math.js";

/** Class representing an object for creating a semi-donut chart. */
export class SemiDonutChart {

  /**
   * Create a semi-donut chart.
   * @param {string} name - Chart title.
   * @param {number} total - Total amount for the layer.
   * @param {string} units - Units for the layer.
   * @param {Array<number>} held - Amount of the layer held by each zone.
   * @param {Array<number>} locked - Amount of the layer locked by each zone.
   * @param {Array<string>} zones - Array of zone names.
   * @param {string} tooltipsId - Identifier for element to contain tooltips.
   * @param {boolean} tooltipShowAbsoluteUnits - Should tooltip report
   * statistics for absolute units?
   * @return {void}
   */
  constructor(
    name,
    total,
    units,
    held,
    locked,
    zones,
    tooltipsId,
    tooltipShowAbsoluteUnits
  ) {
    // compute start end for each arc
    let held_arc = {};
    let locked_arc = {};
    let current_start = 0;
    for (let i = 0;  i < zones.length; ++i) {
      // append arc values for locked
      locked_arc[zones[i]] = {
        begin: current_start,
        end: Math.min(current_start + (locked[zones[i]] / total), 1)
      };
      // append arc values for held
      held_arc[zones[i]] = {
        begin: locked_arc[zones[i]].end,
        end: Math.min(locked_arc[zones[i]].end + (held[zones[i]] / total), 1)
      };
      // update current start
      current_start = held_arc[zones[i]].end;
    }

    // set data field
    this.data = {
      name: name,
      total: total,
      units: units,
      held: held,
      locked: locked,
      arcs: {locked: locked_arc, held: held_arc},
      zones: zones
    };
    this.tooltipsId = tooltipsId;
    this.tooltipShowAbsoluteUnits = tooltipShowAbsoluteUnits;

    // set plotting fields
    this.width = 120;
    this.height = 110;
    this.chartRadius = this.width / 2;
    this.arcMinRadius = 50;
    this.arcWidth = -20; // this.chartRadius - this.arcMinRadius - 1;
    this.scale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, Math.PI]);
    this.getInnerRadius =
      (index) => this.arcMinRadius + (1 - (index + 1)) * this.arcWidth;
    this.getOuterRadius =
      (index) => this.getInnerRadius(index) + this.arcWidth;
    this.createArc = d3
      .arc()
      .innerRadius((_, i) => this.getInnerRadius(i))
      .outerRadius((_, i) => this.getOuterRadius(i))
      .startAngle((d) => this.scale(d.begin) + deg2rad(270))
      .endAngle((d) => this.scale(d.end) + deg2rad(270));
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
    this.data.zones.forEach((z) => {
      ["locked", "held"].forEach((x) => {
        // add statistics
        this.tooltip
          .append("div")
          .style("white-space", "nowrap")
          .text(() =>
            `${z} ${x}: ` +
            Math.round((this.data[x][z] / this.data.total) * 100) +
            "%" +
            (this.tooltipShowAbsoluteUnits ?
              " (" + Math.round(this.data[x][z]).toLocaleString() +
              " " + this.data.units + ")" : "")
          )
          .style("font-weight", type === x && zone === z ? "bold" : "normal")
          .style("color", this.getColor(x, z));
      });
    });
  }

  /**
   * Render segment for a layer in the plot.
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
          .style("display", "inline")
          .style("text-align", "left")
          .style("top", `${event.clientY + 5}px`)
          .style("left", `${event.clientX + 5}px`)
        // set tooltip content
        this.renderTooltipContent(d.type, d.zone);
      })
      .on("mouseout", (event, d) => {
        d3
          .select(event.target)
          .attr("stroke", null);
        this.tooltip
          .style("display", "none")
          .style("top", "0px")
          .style("left", "0px");
        this.tooltip
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
          begin = this.data.arcs[d.type][d.zone].begin;
          end = this.data.arcs[d.type][d.zone].end;
        }
        const interpolate = d3.interpolate(begin, end);
        return t => this.createArc({begin: begin, end:interpolate(t)}, i);
      });
  }

  /**
   * Render all segments on the plot.
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
    for (let i = 0; i < this.data.zones.length; ++i) {
      // render locked arc
      this.renderSegment(svg, "locked", this.data.zones[i], delay);
      // update delay for next arc
      delay +=
        50 +
        (this.data.locked[this.data.zones[i]] / this.data.total) * total_delay;
      // render held arc
      this.renderSegment(svg, "held", this.data.zones[i], delay);
      // update delay for next arc
      delay +=
        50 +
        (this.data.held[this.data.zones[i]] / this.data.total) * total_delay;
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
      .style("display", "none")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("position", "fixed")
      .style("width", "fit-content")
      .style("z-index", 900)
      .style("top", 0)
      .style("left", 0)
      .style("transform", "translateX(-100%)");
  }

  /**
   * Remove tooltip.
   * @return <void>
   */
  removeTooltip() {
    this.tooltip.remove();
  }

  /**
   * Render the plot as an SVG.
   * @param <HTMLElement> element - Element that contains the plot.
   * @return <HTMLElement>
   */
  renderSvg(element) {
    return d3
      .select(element)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height * 0.50)
      .append("g")
      .attr("transform", `translate(${this.width / 2},${this.height / 2})`);
  }

  /**
   * Render title for the plot.
   * @param <HTMLElement> element - Element that contains the plot.
   * @return <HTMLElement>
   */
  renderTitle(element) {
    d3
      .select(element)
      .style("max-width", "110px")
      .style("word-break", "break-word")
      .style("text-align", "center")
      .append("span")
      .append("label")
      .style("color", "black")
      .node()
      .innerHTML = this.data.name;
  }

  /**
   * Render plot.
   * @param <HTMLElement> element - Element that contains the plot.
   * @return <void>
   */
  render(element) {
    // if no data supplied, then exit
    if (this.data.total === 0) return;
    // initialize and render tooltip
    this.renderTooltip(element);
    // render title for plot
    this.renderTitle(element);
    // initialize plot
    const svg = this.renderSvg(element);
    // render all segments for plot
    this.renderAllSegments(svg);
  }

}
