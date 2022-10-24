//Add variables.
var random = Math.floor[Math.random() * 100]
var tchance = ['60', '40', '20', '10', '3']
var pchance = ['42.26', '20.15', '5.57', '1.47', '0.14']
/*ID Variables
const C60RN1 = document.elementByID("C60RN1");
const C60RS1 = document.elementByID("C60RS1");*/
//C60R?1 TRNG
C60RN1.onclick = () => {
  let C60RS1 = document.elementByID("C60RS1");
  let C60AT1 = document.elementByID("C60AT1");
  let C60CH1 = document.elementByID("C60CH1");
  if (tchance[0] > random) {
      C60RS1.innerHTML("Success!");
      C60AT1.innerHTML("1st Attempt");
      C60CH1.innerHTML(
  