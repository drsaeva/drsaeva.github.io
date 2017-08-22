var network = {
  // Start data
	graph: {d3.json("nucleus.json");},
  // Graph design
  width: 500,
  height: 500,
  lines: {stroke: {color: "#ccc",thickness: 2}},
	  nodes: {fill: {color: "#333"},
		   stroke: {color: "#fff", thickness: 3},
	sizeRange: [8,30]},
	setup: function(){
	  var $network = $("#network");
	  
	  $('<canvas/>').attr({
			'id':'networkCanvas',
			'width':this.width,
			'height':this.height
		}).appendTo($("#network"));
		
		this.canvas = document.getElementById('networkCanvas');
		this.context = this.canvas.getContext('2d');
		
		this.simulation = d3.forceSimulation()
			.stop()
			.force("link",d3.forceLink().id((d)=>{return d.id}))
			.force("change",d3.forceManyBody())
			.force("center",d3.forceCenter())
			.force("collide",d3.forceCollide().radius((d)=>{return d.force;}).iterations(2))
			.on("tick",()=>{
				this.ticked();
			});

    this.drawData(this.graph);

	},
	forceScale: function(node){
    var scale = d3.scaleLog().domain(this.nodes.sizeRange).range(this.nodes.sizeRange.slice().reverse());
    return node.r + scale(node.r);
	},
	drawData: function(graph){
	  var countExtent = d3.extent(graph.nodes,function(d){return d.connections}),
				radiusScale = d3.scalePow().exponent(2).domain(countExtent).range(this.nodes.sizeRange);

    // Let D3 figure out the forces
		for(var i=0,ii=graph.nodes.length;i<ii;i++) {
			var node = graph.nodes[i];

			node.r = radiusScale(node.connections);
			node.force = this.forceScale(node);
		};

    // Add new data to old data
		this.graph.nodes = this.graph.nodes.concat(graph.nodes);
		this.graph.links = this.graph.links.concat(graph.links);

    // Feed to simulation
		this.simulation
			.nodes(this.graph.nodes);

		this.simulation.force("link")
			.links(this.graph.links);

		this.simulation.alpha(0.3).restart();
	},
	ticked: function(){
	  if(!this.graph) {
			return false;
		}

		this.context.clearRect(0,0,this.width,this.height);
		this.context.save();
		this.context.translate(this.width / 2, this.height / 2);

		this.context.beginPath();
		this.graph.links.forEach((d)=>{
			this.context.moveTo(d.source.x, d.source.y);
			this.context.lineTo(d.target.x, d.target.y);
		});
		this.context.strokeStyle = this.lines.stroke.color;
		this.context.lineWidth = this.lines.stroke.thickness;

		this.context.stroke();
		
		this.graph.nodes.forEach((d)=>{
			this.context.beginPath();
			
			this.context.moveTo(d.x + d.r, d.y);
			this.context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);

			this.context.fillStyle = d.colour;
			this.context.strokeStyle =this.nodes.stroke.color;
			this.context.lineWidth = this.nodes.stroke.thickness;
			this.context.fill();
			this.context.stroke();
		});
	
		this.context.restore();
	}
	
  
};

var lastId = 9;

var getRandomColor = function(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var addNode = function(){
  var newGraph = {
    nodes: [{
      name: "Name-"+(++lastId),
      id: lastId,
      colour: getRandomColor(),
      connections: 1
    }],
    links: [{
      source: 1,
      target: lastId
    }]
  };
  console.log(newGraph);
  network.drawData(newGraph);
};

$(function(){
  network.setup();
  
  $("#addNode").click(addNode);
});
