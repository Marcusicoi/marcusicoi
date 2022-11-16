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
  if (choose(NAME) === "A") { 
    name = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "u", "r", "s", "t", "v", "w", "x", "y", "z"];
  };
  if (choose(NAME) === "B") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (choose(NAME) === "C") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (choose(NAME) === "D") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (choose(NAME) === "E") {
    name = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  if (choose(NAME) === "F") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (choose(NAME) === "G") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "y"];
  };
  if (choose(NAME) === "H") {
    name = ["a", "e", "i", "o", "u", "w", "y"];
  };
  if (choose(NAME) === "I") {
    name = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  if (choose(NAME) === "J") {
    name = ["a", "e", "h", "i", "o", "r", "u", "w", "y"];
  };
  if (choose(NAME) === "K") {
    name = ["a", "e", "h", "i", "l", "o", "r", "s", "u", "w", "y"];
  };
  if (choose(NAME) === "L") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "y"];
  };
  if (choose(NAME) === "M") {
    name = ["a", "e", "i", "o", "r", "u", "w", "y"];
  };
  if (choose(NAME) === "N") {
    name = ["a", "e", "i", "o", "u", "w", "y"];
  };
  if (choose(NAME) === "O") {
    name = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  if (choose(NAME) === "P") {
    name = ["a", "e", "h", "i", "l", "o", "r", "s", "t", "u", "w", "y"];
  };
  if (choose(NAME) === "Q") {
    name = ["a", "e", "i", "l", "r", "s", "u", "w"];
  };
  if (choose(NAME) === "R") {
    name = ["a", "e", "h", "i", "j", "o", "r", "s", "t", "u", "w", "y"];
  };
  if (choose(NAME) === "S") {
    name = ["a", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "w", "y", "z"];
  };
  if (choose(NAME) === "T") {
    name = ["a", "e", "f", "h", "i", "k", "l", "o", "r", "u", "w", "y", "z"];
  };
  names.push(choose(name));
  };
  result.innerHTML = choose(NAME) + names.join("");
};