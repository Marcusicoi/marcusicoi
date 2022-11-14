let text = document.getElementById("text");
let num = document.getElementById("amount");
let result = document.getElementById("result");
let copy = document.getElementById("copy");
function choose(argument) {
  return argument[Math.floor(Math.random() * argument.length)];
};
function probability(n) {
  return Math.random() < (n / 100)
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
   function pOpFunc(type) { return `${type}(${choose(text.value)})` };
   let pOp = [pOpFunc("sin"), pOpFunc("cos")];
   let equation = [];
   for (let i = 0; i < num.value; i++) {
     equation.push(`${choose(op)} ${choose(text.value)}`);
     if (probability(25)) { equation.push(`${choose(op)} ${choose(pOp)}`) };
   };
   let first = choose(text.value);
   result.innerHTML = first + " " + equation.join(" ");
   copy.value = first + " " + equation.join(" ");
};
document.getElementById("copybutton").onclick = function() {
  copy.select();
  copy.setSelectionRange(0, 8172);
  navigator.clipboard.writeText(copy.value);
  alert("Copied equation");
};