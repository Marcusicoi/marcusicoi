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
document.getElementById("C60BT2").onclick = function() {
  let C60IP2 = document.getElementById("C60IP2");
  let C60SC2 = document.getElementById("C60SC2");
  let C60FL2 = document.getElementById("C60FL2");
  let C60FLL2 = Math.floor(Math.random() * 4);
  let C60SCS2 = 0;
  let C60FAL2 = 0;
  function probability(n) {
    return Math.random < n;
  }
  for (let i = 0; i < C60IP2.value; i++) {
  if (probability(0.60)) {
      C60IP2.value -= 5;
      C60SCS2 += 1;
  } else {
      C60IP2.value -= (C60FLL2 + 1);
      C60FAL2 += 1;
  } }
  if (C60IP2.value < 5) {
      C60SC2.innerHTML = "Successes: " + C60SCS2;
      C60FL2.innerHTML = "Fails: " + C60FAL2;
  }
};