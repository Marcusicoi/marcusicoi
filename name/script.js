let amount = document.getElementById("amount");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
function choose(argument) {
  return argument[Math.floor(Math.random() * argument.length)]
};
let NAME = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let name = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let names = [];
submit.onclick = function() {
  for (let i = 0; i < amount.value; i++) {
  if (NAME === "A" && name === "a") { 
    name = ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "u", "r", "s", "t", "v", "w", "x", "y", "z"];
  };
  if (NAME === "B" && name === "b") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (NAME === "C" && name === "c") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (NAME === "D" && name === "d") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (NAME === "E" && name === "e") {
    name = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  if (NAME === "F" && name === "f") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (NAME === "G" && name === "g") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "y"];
  };
  if (NAME === "H" && name === "h") {
    name = ["a", "e", "i", "o", "u", "w", "y"];
  };
  if (NAME === "I" && name === "i") {
    name = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  if (NAME === "J" && name === "j") {
    name = ["a", "e", "h", "i", "o", "r", "u", "w", "y"];
  };
  if (NAME === "K" && name === "k") {
    name = ["a", "e", "h", "i", "l", "o", "r", "s", "u", "w", "y"];
  };
  if (NAME === "L" && name === "l") {
    name = ["a", "e", "h", "i", "o", "r", "u", "y"];
  };
  if (NAME === "M" && name === "m") {
    name = ["a", "e", "i", "o", "r", "u", "w", "y"];
  };
  if (NAME === "N" && name === "n") {
    name = ["a", "e", "i", "o", "u", "w", "y"];
  };
  if (NAME === "O" & name === "o") {
    name = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  names.push(choose(name));
  };
  result.innerHTML = choose(NAME) + names.join("");
};