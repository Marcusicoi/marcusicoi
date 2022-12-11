//ID
let number = document.getElementById("number");
let inc = document.getElementById("increaser");
let level = document.getElementById("level");
//The counters
var levelc = 1;
var num = 2;
//If you click the button
inc.onclick = function() {
  num *= 2;
  levelc += 1;
  number.innerHTML = num.toPrecision(1);
  level.innerHTML = "Level " + levelc;
}