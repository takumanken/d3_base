import "./style.css";
import * as d3 from "d3";

const body = d3.select("body").style("padding", "30px");

const title = body
  .append("h1")
  .style("font-size", "16px")
  .text("Week 2 - Code Lab - Drawing Shapes");

const svg = body
  .append("svg")
  .attr("viewBox", "0 0 600 400")
  .attr("width", 600)
  .attr("height", 400)
  .style("background", "white")
  .style("box-shadow", "0px 1px 2px #DDDDDD");
