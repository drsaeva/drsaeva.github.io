var width=800, height=400;
var color = d3.scale.category20();

var force = d3.layout.force()
    .size([width, height])
    .linkDistance(100)
    .charge(-300)
    .start();

var svg = d3.select("#fdg").append("svg")
            .attr("width", width)
            .attr("height", height);   

d3.json("https://codepen.io/superpikar/pen/KFein.js", function(error, graph){ 
   
var nodes = {};
var links = graph.arcs;
var pathtype = [];  
  
// Compute the distinct nodes from the links.
links.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
  
  pathtype.push(link.dependency);
  
});
  console.log(pathtype);    
  force
      .nodes(d3.values(nodes))
      .links(links)
      .on("tick", tick)
      .start();

  svg.append("defs").selectAll("marker")
    .data(pathtype)
  .enter().append("marker")
    .attr("id", function(d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 25)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("path")
    .attr("d", "M0,-5L10,0L0,5");

var path = svg.append("g").selectAll("path")
    .data(force.links())
  .enter().append("path")
    .attr("class", function(d) { return "link " + d.dependency; })
    .attr("marker-end", function(d) { return "url(#" + d.dependency + ")"; });

var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
  .enter().append("circle")
    .attr("r", 15)
    .call(force.drag); 

var text = svg.append("g").selectAll("text")
    .data(force.nodes())
  .enter().append("text")
    .attr("x", 15)
    .attr("y", ".31em")
    .text(function(d) { return d.name; });

// Use elliptical arc path segments to doubly-encode directionality.
function tick() {
  path.attr("d", linkArc);
  circle.attr("transform", transform);
  text.attr("transform", transform);
}

function linkArc(d) {
  var dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = Math.sqrt(dx * dx + dy * dy);
  return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
}

function transform(d) {
  return "translate(" + d.x + "," + d.y + ")";
}


});
