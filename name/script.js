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
  let RAN = choose(NAME);
  let ran = choose(name);
  for (let i = 0; i < amount.value; i++) {
  if (NAME === "A") { 
    name = ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "u", "r", "s", "t", "v", "w", "x", "y", "z"];
  };
  if (NAME === "B") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  };
  if (NAME === "C") {
    name = ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"];
  }
  };
};