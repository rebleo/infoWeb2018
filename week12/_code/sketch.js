console.log("hello");

var theArray = ["red", "orange", "yellow", "green", "blue", "purple"];
var theRGB = [ [255,0,0], [0,200,0], [0,0,255]]
//
var theObjects = [];
var theColor;

function setup(){
	createCanvas(windowWidth, windowHeight);
	console.log(theArray);
	fill(random(theRGB));
	ellipse(50,50,100,100);

}


function draw(){
	theColor = "green";
	background(theColor);
	for (var i=0; i < theObjects.length; i++){
		fill(theObjects[i].theColor);
		ellipse(theObjects[i].theX, theObjects[i].theY, 50, 100);
	}

	// from line 38 let's make faces
	theFace(50, 50, 100);
	theFace(100, 250, 30);
	theFace(200, 100, 30);
}

function mousePressed(){
	console.log("click!")
	theObjects.push({
		theColor: [255, 192, 203],
		theX: mouseX,
		theY: mouseY
	});
}

function theFace(x,y,dim){
	this.x = x;
	this.y = y;
	this.dims = dim;
    ellipse(this.x, this.y, this.dims, this.dims);
   

}