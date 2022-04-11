//First, Always define the ids.
const text = document.getElementById("text");
const gen = document.getElementById("button");
const input = document.getElementById("input");
const word1 = document.getElementById("firstword");
const word2 = document.getElementById("secondword");
const word3 = document.getElementById("thirdword");
const word4 = document.getElementById("fourthword");
const word5 = document.getElementById("fifthword");
//Second, define the variables.
var words = [word1, word2, word3, word4, word5];
var ran1 = words[Math.floor(Math.random() * words.length)];
var ran2 = words[Math.floor(Math.random() * words.length)];
var ran3 = words[Math.floor(Math.random() * words.length)];
var ran4 = words[Math.floor(Math.random() * words.length)];
var ran5 = words[Math.floor(Math.random() * words.length)];
//Thrid, functions.
function generate() {
  let o = [ran1, ran2, ran3, ran4, ran5];
  let ran = o[Math.floor(Math.random() * o.length)];
  let result = "";
  for (let i = 0; i != input.value; i++) { result += ran }
  text.innerHTML = result;
}
gen.onclick = function() {generate()};