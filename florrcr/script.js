//Add variables.
const random = Math.floor(Math.random() * 100);
function probability(n) {
  return Math.random() < (n / 100);
}
function oProbability(n) {
  return Math.random() > (n / 100);
}
//C60??1 TRNG
document.getElementById("C60BT1").onclick = function() {
  let C60RS1 = document.getElementById("C60RS1");
  let C60CH1 = document.getElementById("C60CH1");
  if (probability(60)) {
      C60RS1.innerHTML = "Success!";
      C60CH1.innerHTML = "60% " + "> " + (Math.floor(Math.random() * 60)) + "%";
  } else {
      C60RS1.innerHTML = "Failed.";
      C60CH1.innerHTML = "60% " + "> " + (Math.floor(Math.random() * 40) + 60) + "%";
  }; 
};
//U40??1 TRNG
document.getElementById("U40BT1").onclick = function() {
  let U40RS1 = document.getElementById("U40RS1");
  let U40CH1 = document.getElementById("U40CH1");
  if (probability(40)) {
      U40RS1.innerHTML = "Success!";
      U40CH1.innerHTML = "40% " + "> " + (Math.floor(Math.random() * 40)) + "%";
  } else {
      U40RS1.innerHTML = "Failed.";
      U40CH1.innerHTML = "40% " + "> " + (Math.floor(Math.random() * 60) + 40) + "%";
  }; 
};
//R20??1 TRNG
document.getElementById("R20BT1").onclick = function() {
  let R20RS1 = document.getElementById("R20RS1");
  let R20CH1 = document.getElementById("R20CH1");
  if (probability(20)) {
      R20RS1.innerHTML = "Success!";
      R20CH1.innerHTML = "20% " + "> " + (Math.floor(Math.random() * 20)) + "%";
  } else {
      R20RS1.innerHTML = "Failed.";
      R20CH1.innerHTML = "20% " + "> " + (Math.floor(Math.random() * 80) + 20) + "%";
  }; 
};
//Many Petals
document.getElementById("C60BT2").onclick = function() {
  let C60IP2 = document.getElementById("C60IP2");
  let C60SC2 = document.getElementById("C60SC2");
  let C60FL2 = document.getElementById("C60FL2");
  let C60SCS2 = 0;
  let C60FAL2 = 0;
  let C60LST12 = 0;
  let C60LST22 = 0;
  let C60LST32 = 0;
  let C60LST42 = 0;
  do {
  if (probability(60)) {
      C60IP2.value -= 5;
      C60SCS2 += 1;
  } else {
      var C60FLL2 = (Math.floor(Math.random() * 4) + 1);
      if (C60FLL2 === 1) { C60LST12 += 1 };
      if (C60FLL2 === 2) { C60LST22 += 1 };
      if (C60FLL2 === 3) { C60LST32 += 1 };
      if (C60FLL2 === 4) { C60LST42 += 1 };
      C60IP2.value -= C60FLL2;
      C60FAL2 += 1;
  } 
  } while (C60IP2.value > 4)
      C60SC2.innerHTML = "Successes: " + C60SCS2;
      C60FL2.innerHTML = "Fails: " + C60FAL2 + `, [1=${C60LST12}],[2=${C60LST22}],[3=${C60LST32}],[4=${C60LST42}]`;
};