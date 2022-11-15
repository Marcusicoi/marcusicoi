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
   let pOp = [pOpFunc("sin"), pOpFunc("cos"), pOpFunc("log"), pOpFunc("tan"), pOpFunc("root"), pOpFunc("In")];
   let xnum = ['-1', '1', '2', '3', '4', '5'];
   let equation = [];
   for (let i = 0; i < num.value; i++) {
     equation.push(`${choose(op)} ${choose(text.value)}`);
     //Parenthysis.
     if (probability(5)) { 
       equation.push(`${choose(op)} ${choose(pOp)}`) 
     };
     //xNUM.
     if (probability(5)) { 
       equation.push(`${choose(op)} ${choose(text.value)}^(${choose(xnum)})`) 
     };
     //Fraction.
     if (probability(5)) {
       equation.push(`${choose(op)} (${choose(text.value)}/${choose(text.value)})`);
     };
     //Decimals.
     if (probability(5)) {
       equation.push(`${choose(op)} ${choose(text.value)}.${Math.floor(Math.random() * 9) + 1}`);
       //Decimals X.Y.
       if (probability(2.5)) {
         equation.push(`${choose(op)} ${choose(text.value)}.${choose(text.value)}`);
       };
     };
     //Pi.
     if (probability(5)) {
       equation.push(`${choose(op)} π`);
     };
     //!.
     if (probability(5)) {
       equation.push(`${choose(op)} (${choose(text.value)}!)`);
     };
     //Sum.
     if (probability(5)) {
       equation.push(`${choose(op)} sum(x, ${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)})`);
     };
     //Sum.
     if (probability(5)) {
       equation.push(`${choose(op)} integral(${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)}, x)`);
     };
     //°.
     if (probability(5)) {
       equation.push(`${choose(op)} ${choose(text.value)}°${choose(text.value)}`);
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