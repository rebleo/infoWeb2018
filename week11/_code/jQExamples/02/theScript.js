console.log("hello");
$(document).ready(function() {
  var theClass = ["Sumaia", "Mariano", "Kaylin", "Isabella", "Michaela", "Kelly", "Claire D", "Kasper", "Erinn", "Julia", "Antonio", "Evan", "Kasey", "Hannah L", "Katie M", "Katie MG", "Johnny", "Claire N.", "Anthony", "Mikel", "Destin", "Ted", "Leo", "Ryan", "Rachel", "Hannah T", "Harry"];
  console.log(theClass.length);
  console.log(typeof theClass[0]);
  var textLocation = document.getElementById("theList");
  var textToShow;
  for (var theIndex = 0; theIndex < theClass.length; theIndex++) {
    // console.log(theClass[theIndex]);
    textToShow = document.createElement("SPAN");
    textToShow.innerHTML = theClass[theIndex] + " ";
    console.log(textToShow);
    //
    textLocation.appendChild(textToShow);
  }
});
