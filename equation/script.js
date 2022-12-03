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
     '∝', '≡', '≤', '≥', '⇒',
     '⇔', '⊥', '≅', '⊗', ':=',
     '~', '∩', '∪', '⊆', '⊂',
     '⊄', '⊇', '⊃', '⊅', '∆',
     '∈', '∉'
   ];
   let thing = num.value / (Math.floor(Math.random() * (Math.floor(num.value / 2))) + 1);
   let chance = 2.5;
   //
   let jP = [];
   //
   function pOpFunc(type) { return `${type}(${choose(text.value)})` };
   let pOp = [
     pOpFunc("sin"), pOpFunc("cos"), pOpFunc("log"), pOpFunc("tan"), pOpFunc("root"), 
     pOpFunc("In"), pOpFunc("abs"), choose(['-1', '1', '2', '3', '4', '5']) + pOpFunc("powerRoot"),
     pOpFunc("F")
   ];
   //
   let pOp2 = ['sin(', 'cos(', 'log(', 'tan(', 'root(', 'In(', choose(['-1', '1', '2', '3', '4', '5']) + 'powerRoot(', 'F('];
   let pOpE = [];
   //
   let powernum = ['-1', '1', '2', '3', '4', '5', choose(text.value)];
   //
   let list = [];
   //
   let startsymbols = ['-', 'mx̄ = ', 'cx̄ = ', '#']
   let endsymbols = ['°', 'deg', ' e', ' ϕ', ' i', '∈', '∉', '%', '‰', '!', ' π', ' γ', 'T', '†', '*'];
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
     //Start symbols.
     if (probability(chance)) { 
       equation.push(`${choose(op)} ${choose(startsymbols)}${choose(text.value)}`);
     };
     //End symbols.
     if (probability(chance)) { 
       equation.push(`${choose(op)} ${choose(text.value)}${choose(endsymbols)}`);
     };
     //Power.
     if (probability(chance)) { 
       equation.push(`${choose(op)} ${choose(text.value)}^(${choose(powernum)})`);
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
     //Floor Bracket.
     if (probability(chance)) {
       equation.push(`${choose(op)} ⌊${choose(text.value)}.${Math.floor(Math.random() * 9) + 1}⌋`);
       //Florr bracket Type.Type.
       if (probability(chance / 2)) {
         equation.push(`${choose(op)} ⌊${choose(text.value)}.${choose(text.value)}⌋`);
       };
     };
     //Ceiling Bracket.
     if (probability(chance)) {
       equation.push(`${choose(op)} ⌈${choose(text.value)}.${Math.floor(Math.random() * 9) + 1}⌉`);
       //Ceiling bracket Type.Type.
       if (probability(chance / 2)) {
         equation.push(`${choose(op)} ⌈${choose(text.value)}.${choose(text.value)}⌉`);
       };
     };
     //Sum.
     if (probability(chance / 2)) {
       equation.push(`${choose(op)} ∑(x, ${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)})`);
     };
     //Double sum.
     if (probability(chance / 4)) {
       equation.push(`${choose(op)} ∑∑(x, ${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)}, y, ${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)})`);
     };
     //Capital Pi.
     if (probability(chance / 2)) {
       equation.push(`${choose(op)} ∏(i, ${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)}^2)`);
     };
     //Integrral.
     if (probability(chance)) {
       equation.push(`${choose(op)} integral(${choose(text.value)}, ${choose(text.value)}, ${choose(text.value)}, x)`);
     };
     //Not degree.
     if (probability(chance)) {
       equation.push(`${choose(op)} ${choose(text.value)}°${choose(text.value)}`);
     };
     //List
     if (probability(chance / 2)) {
       equation.push(`${choose(op)} [${list.join(" ")} {${choose(text.value)}}]`);
     };
     //Absolute value.
     if (probability(chance)) {
       equation.push(`${choose(op)} |${choose(text.value)}| `);
     };
     //Function.
     if (probability(chance / 2)) {
       equation.push(`${choose(op)} f(${choose(text.value)}) = ${choose(text.value)}`);
     };
     //Delta.
     if (probability(chance)) {
       equation.push(`${choose(op)} DL∆${choose(text.value)} = ${choose(text.value)}, ${choose(text.value)}`);
     };
     //Discriminant.
     if (probability(chance)) {
       equation.push(`${choose(op)} DC∆ = ${choose(text.value)}`);
     };
     //Probability.
     if (probability(chance)) {
       equation.push(`${choose(op)} P(${choose(text.value)}) = ${Math.floor(Math.random() * 10)}.${choose(['1', '2', '3', '4', '5', '6', '7', '8', '9'])}${choose(['', '1', '2', '3', '4', '5', '6', '7', '8', '9'])}`);
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