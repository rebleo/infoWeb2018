console.log("hello worlds!");

var thePrice = 500;
var theQuantity = 25;
var theTotal;

theTotal = thePrice * theQuantity;
console.log(theTotal);


var thisImage = document.getElementById("theImage");

// this function is called in the <button> 
// tag in the html 
function whenButtonPressed(){
	console.log("you pushed button!");
}