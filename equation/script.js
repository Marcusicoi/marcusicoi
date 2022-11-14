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
   let pOp = ['sin(', 'cos('];
   let isParenthysis = false;
   let hasEndPart = false;
   let noEndPart = false;
   let nNoEndParts = 0;
   let equation = [];
   for (let i = 0; i < num.value; i++) {
     equation.push(`${choose(op)} ${choose(text.value)}`)
     if (probability(10)) { isParenthysis = true };
     if (isParenthysis === true) {
       equation.push(`${choose(op)} ${choose(pOp)}${choose(text.value)}`) 
       if (probability(50)) { hasEndPart = true };
       if (hasEndPart === true) {
         equation.push(`${choose(op)} ${choose(text.value)})`)
         isParenthysis = false;
         hasEndPart = false;
       let findEndPart = equation.indexOf(')', equation.indexOf(`${choose(pOp)}`));
       if (findEndPart === -1) { noEndPart = true; nNoEndParts += 1 };
       for (let i = 0; i < nNoEndParts; i++) { findEndPart }
       if (nNoEndParts > 1) {
         if (noEndPart === true) {
           for (let i = 0; i < nNoEndParts; i++) {
              equation.push(')');
             nNoEndParts = 0;
           };
         };
       };
       };
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