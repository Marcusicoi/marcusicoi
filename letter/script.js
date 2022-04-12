//First, Always define the ids.
const text = document.getElementById("text");
const gen = document.getElementById("button");
const input = document.getElementById("input");
const word1 = document.getElementById("firstword").value;
const word2 = document.getElementById("secondword").value;
const word3 = document.getElementById("thirdword").value;
const word4 = document.getElementById("fourthword").value;
const word5 = document.getElementById("fifthword").value;
//Second, define the variables.
var words = [word1, word2, word3, word4, word5];
var ran1 = words[Math.floor(Math.random() * words.length)];
var ran2 = words[Math.floor(Math.random() * words.length)];
var ran3 = words[Math.floor(Math.random() * words.length)];
var ran4 = words[Math.floor(Math.random() * words.length)];
var ran5 = words[Math.floor(Math.random() * words.length)];
//Thrid, functions.
function generate() {
  let ran = ran1;
  let result = ran1;
  for (let i = 0; i != input.value; i++) { result += ran }
  text.innerHTML = result;
}
gen.onclick = function() {generate()};