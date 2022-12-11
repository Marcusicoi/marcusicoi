//ID
let number = document.getElementById("number");
let inc = document.getElementById("increaser");
let level = document.getElementById("level");
//The counters
var levelc = 1;
var num = 2n;
var array = ["K", "M", "B"]
var arrayN = 0;
//If you click the button
inc.onclick = function() {
  num *= 2n;
  levelc += 1;
  number.innerHTML = num
  level.innerHTML = "Level " + levelc;
  //If statements
  if (num.length === 4) {
};