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
   let thing = num.value / (Math.floor(Math.random() * (Math.floor(num.value / 2))) + 1);
   //
   let jP = ['(', '{', '['];
   let jPr = choose(jP);
   let jPe = [];
   //
   function pOpFunc(type) { return `${type}(${choose(text.value)})` };
   let pOp = [pOpFunc("sin"), pOpFunc("cos"), pOpFunc("log"), pOpFunc("tan"), pOpFunc("root"), pOpFunc("In")];
   //
   let pOp2 = ['sin(', 'cos(', 'log(', 'tan(', 'root(', 'In('];
   let pOpE = [];
   //
   let xnum = ['-1', '1', '2', '3', '4', '5'];
   //
   let onlist = [];
   let list = [];
   //
   let Fonlist = [];
   let Flist = [];
   //
   let equation = [];
   //Just Parenthysis
   jPe.push(`${choose(op)} ${jPr}${choose(text.value)}`);
   for (let i = 0; i < thing; i++) {
     jPe.push(`${choose(op)} ${choose(text.value)}`);
   };
   //Type( Parenthysis + equation.
   pOpE.push(`${choose(op)} ${choose(pOp2)}${choose(text.value)}`);
   for (let i = 0; i < thing; i++) {
     pOpE.push(`${choose(op)} ${choose(text.value)}`);
   };
   //Onlist
   onlist.push(`${choose(op)} {${choose(text.value)},`);
   for (let i = 0; i < (Math.flooor(thing / 2) + 1); i++) {
     onlist.push(`${choose(text.value)},`);
   };
   //List
   list.push(`${choose(op)} [`);
   for (let i = 0; i < (Math.floor(thing / 2) + 1); i++) {
     list.push(`{${onlist.`);
   };
   for (let i = 0; i < num.value; i++) {
     equation.push(`${choose(op)} ${choose(text.value)}`);
     //Just Parenthysis.
     if (probability(5)) {
       let endPart = '';
       if (jPr === jP[0]) { endPart = ')' };
       if (jPr === jP[1]) { endPart = '}' };
       if (jPr === jP[2]) { endPart = ']' };
       equation.push(jPe.join(" ") + endPart);
     };
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