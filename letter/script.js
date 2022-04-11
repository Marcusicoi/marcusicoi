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
var numbers = [1, 2, 3, 4, 5];
var ran1 = numbers[Math.floor(Math.random() * 5)];
var ran2 = numbers[Math.floor(Math.random() * 5)];
var ran3 = numbers[Math.floor(Math.random() * 5)];
var ran4 = numbers[Math.floor(Math.random() * 5)];
var ran5 = numbers[Math.floor(Math.random() * 5)];
//Thrid, functions.
function generate() {
  let num = ran + numbers[Math.floor(Math.random() * 5)];
  