let amount = document.getElementById("amount");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
function choose(argument) {
  return argument[Math.floor(Math.random() * argument.length)]
};
submit.onclick = function() {
  let NAME = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let name = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let names = [];
  for (let i = 0; i < amount.value; i++) {
  if (NAME === "A") { 
    name = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "u", "r", "s", "t", "v", "w", "x", "y", "z"];
  };
  if (NAME === "B") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (NAME === "C") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (NAME === "D") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (NAME === "E") {
    name = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  if (NAME === "F") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (NAME === "G") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "y"];
  };
  if (NAME === "H") {
    name = ["a", "e", "i", "o", "u", "w", "y"];
  };
  if (NAME === "I") {
    name = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  if (NAME === "J") {
    name = ["a", "e", "h", "i", "o", "r", "u", "w", "y"];
  };
  if (NAME === "K") {
    name = ["a", "e", "h", "i", "l", "o", "r", "s", "u", "w", "y"];
  };
  if (NAME === "L") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "y"];
  };
  if (NAME === "M") {
    name = ["a", "e", "i", "o", "r", "u", "w", "y"];
  };
  if (NAME === "N") {
    name = ["a", "e", "i", "o", "u", "w", "y"];
  };
  if (NAME === "O") {
    name = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  if (NAME === "P") {
    name = ["a", "e", "h", "i", "l", "o", "r", "s", "t", "u", "w", "y"];
  };
  if (NAME === "Q") {
    name = ["a", "e", "i", "l", "r", "s", "u", "w"];
  };
  if (NAME === "R") {
    name = ["a", "e", "h", "i", "j", "o", "r", "s", "t", "u", "w", "y"];
  };
  if (NAME === "S") {
    name = ["a", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "w", "y", "z"];
  };
  if (NAME === "T") {
    name = ["a", "e", "f", "h", "i", "k", "l", "o", "r", "u", "w", "y", "z"];
  };
  names.push(choose(name));
  };
  result.innerHTML = choose(NAME) + names.join("");
};