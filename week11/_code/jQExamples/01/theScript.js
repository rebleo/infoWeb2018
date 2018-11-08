console.log("loaded");
// download library here: https://jquery.com/download/
//
// this is where the JQuery starts - look for the $
$(document).ready(function() {
  console.log("jQ loaded");
  $("#theTest").html("Hello, World!");
  $(".theOtherTest").html("This is the <strong>updated</strong> text!!");
});
