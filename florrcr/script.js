//Add variables.
const random = Math.floor(Math.random() * 100);
//C60R?1 TRNG
document.getElementById("C60BT1").onclick = function() {
  let C60RS1 = document.getElementById("C60RS1");
  let C60CH1 = document.getElementById("C60CH1");
  if (59 > random) {
      C60RS1.innerHTML = "Success!";
      C60CH1.innerHTML = "60% " + "> " + (random + 1) + "%";
  } 
  if (59 < random) {
      C60RS1.innerHTML = "Failed.";
      C60CH1.innerHTML = "60% " + "> " + (random + 1) + "%";
  }; 
}
//Many Petals
