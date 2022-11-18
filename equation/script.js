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
     '~', '??', ',', ':',
   ];
   let thing = num.value / (Math.floor(Math.random() * (Math.floor(num.value / 2))) + 1);
   //
   let jP = [];
   //
   function pOpFunc(type) { return `${type}(${choose(text.value)})` };
   let pOp = [pOpFunc("sin"), pOpFunc("cos"), pOpFunc("log"), pOpFunc("tan"), pOpFunc("root"), pOpFunc("In")];
   //
   let pOp2 = ['sin(', 'cos(', 'log(', 'tan(', 'root(', 'In('];
   let pOpE = [];
   //
   let xnum = ['-1', '1', '2', '3', '4', '5'];
   //
   let list = [];
   //
   let equation = [];
   //Just Parenthysis
   jP.push(`${choose(op)} [${choose(text.value)}`);
   for (let i = 0; i < thing; i++) {
     jP.push(`${choose(op)} ${choose(text.value)}`);
   };
   //Type( Parenthysis + equation.
   pOpE.push(`${choose(op)} ${choose(pOp2)}${choose(text.value)}`);
   for (let i = 0; i < thing; i++) {
     pOpE.push(`${choose(op)} ${choose(text.value)}`);
   };
   //List
   list.push(`{${choose(text.value)}},`);
   for (let i = 0; i < (Math.floor(thing / 4)); i++) {
     list.push(`{${choose(text.value)}},`);
   };
   for (let i = 0; i < num.value; i++) {
     equation.push(`${choose(op)} ${choose(text.value)}`);
     //Just Parenthysis.
     if (probability(5)) { equation.push(jP.join(" ") + "]"); };
     //Type( Parenthysis.
     if (probability(5)) { 
       equation.push(`${choose(op)} ${choose(pOp)}`) 
       //With equation
       if (probability(2.5)) { equation.push(pOpE.join(" ") + ')') };
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
       //Decimals Type.Type.
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
     if (probability(2.5)) {
       equation.push(`${choose(op)} sum(x, ${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)})`);
     };
     //Integrral.
     if (probability(2.5)) {
       equation.push(`${choose(op)} integral(${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)}, x)`);
     };
     //°.
     if (probability(5)) {
       equation.push(`${choose(op)} ${choose(text.value)}°${choose(text.value)}`);
     };
     //List
     if (probability(2.5)) {
       equation.push(`${choose(op)} [${list.join(" ")} {${choose(text.value)}}]`);
     };
     //Euler's number.
     if (probability(5)) {
       equation.push(`${choose(op)} e `);
     };
     //Phi.
     if (probability(5)) {
       equation.push(`${choose(op)} ϕ `);
     };
     //Imaginary unit.
     if (probability(5)) {
       equation.push(`${choose(op)} i `);
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