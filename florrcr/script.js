//Add variables.
const random = Math.floor[(Math.Random() * 100];
//C60R?1 TRNG
function C60SC1() {
  let C60RS1 = document.getElementById("C60RS1");
  let C60AT1 = document.getElementById("C60AT1");
  let C60CH1 = document.getElementById("C60CH1");
  let C60ATT1 = 1;
  if (60 > random) {
      C60RS1.innerHTML("Success!");
      C60AT1.innerHTML("Attempt " + C60ATT1);
      C60CH1.innerHTML("60% " + "> " + random + "%")
      C60ATT1 = 1;
  } 
  if (60 < random) {
      C60RS1.innerHTML("Failed.");
      C60AT1.innerHTML("Attempt " + C60ATT1);
      C60CH1.innerHTML("60% " + "> " + random + "%")
      C60ATT1 = (C60ATT1 + 1);
  }; 
}