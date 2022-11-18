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
     '~', '??', ',', ':', '±',
     '∓', '≠', '≈', '≪', '≫',
     '∝', '≡'≤
inequality
is less than or equal to	If x≤y, x is less than or equal to y.	5≥
   ];
   let thing = num.value / (Math.floor(Math.random() * (Math.floor(num.value / 2))) + 1);
   let chance = 2.5;
   //
   let jP = [];
   //
   function pOpFunc(type) { return `${type}(${choose(text.value)})` };
   let pOp = [
     pOpFunc("sin"), pOpFunc("cos"), pOpFunc("log"), pOpFunc("tan"), pOpFunc("root"), 
     pOpFunc("In"), pOpFunc("abs"), choose(['-1', '1', '2', '3', '4', '5']) + pOpFunc("powerRoot")
   ];
   //
   let pOp2 = ['sin(', 'cos(', 'log(', 'tan(', 'root(', 'In(', choose(['-1', '1', '2', '3', '4', '5']) + 'powerRoot('];
   let pOpE = [];
   //
   let powernum = ['-1', '1', '2', '3', '4', '5', choose(text.value)];
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
     if (probability(chance)) { equation.push(jP.join(" ") + "]"); };
     //Type( Parenthysis.
     if (probability(chance)) { 
       equation.push(`${choose(op)} ${choose(pOp)}`) 
       //With equation
       if (probability(chance / 2)) { equation.push(pOpE.join(" ") + ')') };
     };
     //Power.
     if (probability(chance)) { 
       equation.push(`${choose(op)} ${choose(text.value)}^(${choose(powernum)})`) 
     };
     //Fraction.
     if (probability(chance)) {
       equation.push(`${choose(op)} (${choose(text.value)}/${choose(text.value)})`);
     };
     //Decimals.
     if (probability(chance)) {
       equation.push(`${choose(op)} ${choose(text.value)}.${Math.floor(Math.random() * 9) + 1}`);
       //Decimals Type.Type.
       if (probability(chance / 2)) {
         equation.push(`${choose(op)} ${choose(text.value)}.${choose(text.value)}`);
       };
     };
     //Pi.
     if (probability(chance)) {
       equation.push(`${choose(op)} π`);
     };
     //!.
     if (probability(chance)) {
       equation.push(`${choose(op)} (${choose(text.value)}!)`);
     };
     //Sum.
     if (probability(chance / 2)) {
       equation.push(`${choose(op)} ∑(x, ${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)})`);
     };
     //Integrral.
     if (probability(chance)) {
       equation.push(`${choose(op)} integral(${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)}, x)`);
     };
     //Degrees.
     if (probability(chance)) {
       equation.push(`${choose(op)} ${choose(text.value)}°${choose(text.value)}`);
     };
     //List
     if (probability(chance / 2)) {
       equation.push(`${choose(op)} [${list.join(" ")} {${choose(text.value)}}]`);
     };
     //Euler's number.
     if (probability(chance)) {
       equation.push(`${choose(op)} e `);
     };
     //Phi.
     if (probability(chance)) {
       equation.push(`${choose(op)} ϕ `);
     };
     //Imaginary unit.
     if (probability(chance)) {
       equation.push(`${choose(op)} i `);
     };
     //Negative.
     if (probability(chance)) {
       equation.push(`${choose(op)} -${choose(text.value)} `);
     };
     //Absolute value.
     if (probability(chance)) {
       equation.push(`${choose(op)} |${choose(text.value)}| `);
     };
     //Not equal (symbol).
     if (probability(chance)) {
       equation.push(`${choose(op)} ${choose(text.value)} `);
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