console.log("Loaded!");

function myFunction(theEvent) {
  // check if the pressed key is enter
  // if yes, execute the code below
  if ((theEvent.keycode == 13) || (theEvent.which == 13)) {
    // get the value of the entered input
    var numberToCount = document.getElementById("numberToCount").value;
    var i = 1;
    var theMessage = "";
    // execute a while loop
    while (i < numberToCount) {
      theMessage += i + " x " + i + " = " + (i * i) + "<br>";
      i++;
    }
    // put the text on the page in a p element
    document.getElementById("theName").innerHTML = theMessage;
  }
}
