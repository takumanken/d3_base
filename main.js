import "./style.css";
import * as d3 from "d3";

const body = d3.select("body").style("padding", "30px");

const title = body
  .append("h1")
  .style("font-size", "16px")
  .text("D3 Base Template");

const svg = body
  .append("svg")
  .attr("viewBox", "0 0 1280 720")
  .attr("width", 1280)
  .attr("height", 720)
  .style("background", "white")
  .style("box-shadow", "0px 1px 2px #DDDDDD");
