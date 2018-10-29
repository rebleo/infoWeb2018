console.log("hello worlds!");
var theVariable1 = 'global';
let theVariable2 = 'global';
console.log(this.theVariable1);
console.log(this.theVariable2);
var theButton = document.querySelector('button');
// this is a comment in javascript!
//https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
function whenThePageLoads() {
  let theVariable3 = "local";
  theButton.onclick = alert("you pushed the button!");
  console.log("loaded")
}
