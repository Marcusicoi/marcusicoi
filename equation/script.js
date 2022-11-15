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
   let pOp = [pOpFunc("sin"), pOpFunc("cos"), pOpFunc("log"), pOpFunc("root")];
   let xnum = ['-1', '1', '2', '3', '4', '5'];
   let equation = [];
   for (let i = 0; i < num.value; i++) {
     equation.push(`${choose(op)} ${choose(text.value)}`);
     //Parenthysis.
     if (probability(25)) { 
       equation.push(`${choose(op)} ${choose(pOp)}`) 
     };
     if (probability(25)) {
       for (let i = 0; i < (num.value / Math.floor(Math.random() * (num.value / 2))); i++) {
          equation.push(`${choose(op)} ${choose(text.value)}`)
       }; equation.push(')');
     };  
     //xNUM.
     if (probability(25)) { 
       equation.push(`${choose(op)} (${choose(text.value)})${choose(xnum)}`) 
     };
     if (probability(25)) {
       equation.push(`${choose(op)} frac(${choose(text.value)}/${choose(text.value)})`);
     };
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