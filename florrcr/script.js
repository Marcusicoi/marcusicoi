//Add variables.
var random = Math.floor[Math.random() * 100]
var tchance = ['60', '40', '20', '10', '3']
var pchance = ['42.26', '20.15', '5.57', '1.47', '0.14']
//ID Variables
const C60RN1 = document.elementByID("C60RN1");
//C60R?1 TRNG
function C60SC1() {
  let C60RS1 = document.elementByID("C60RS1");
  let C60AT1 = document.elementByID("C60AT1");
  let C60CH1 = document.elementByID("C60CH1");
  let C60ATT1 = 1;
  if (tchance[0] > random) {
      C60RS1.innerHTML("Success!");
      C60AT1.innerHTML("Attempt " + C60ATT1);
      C60CH1.innerHTML(tchance[0] + ">" + random)
      C60ATT1 = 1;
  };                     
  if (tchance[0] < random) {
      C60RS1.innerHTML("Failed.");
      C60AT1.innerHTML("Attempt " + C60ATT1);
      C60CH1.innerHTML(tchance[0] + ">" + random)
      C60ATT1 = (C60ATT1 + 1);
  }; 
}