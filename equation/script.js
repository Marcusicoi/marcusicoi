//
let text = document.getElementById("text");
let num = document.getElementById("amount");
let result = document.getElementById("result");
function choose(argument) {
  return argument[Math.floor(Math.random() * argument.length)];
};
document.getElementById("button").onclick = function() {
   let op = [
     '=', '==', '===', '+', '++', 
     '+=', '-', '--', '-=', '*', 
     '**', '*=', '/', '/=', '%', 
     '%=', '**=', '<<=', '<=', '<<', 
     '<', '>', '>>', '>>>', '=>', 
     '=>>', '=>>>', '&', '&&', '&=', 
     '&&=', '^=', '|', '||', '|=', 
     '||=', '!', '!=', '!==', '^', 
     '~', '??'
   ];
   let equation = [];
   for (let i = 0; i < num.value; i++) {
     equation.push(`${choose(op)} ${choose(text.value)}`)
   };
   result.innerHTML = choose(text.value) + " " + equation.join(" ");
}
document.getElementById("copybutton").onclick = function() {
  text.select();
  text.setSelectionRange(0, 8172);
  navigator.clipboard.writeText(text.value);
  alert("Copied equation");
}