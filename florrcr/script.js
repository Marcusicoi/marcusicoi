//Add variables.
const random = Math.floor(Math.random() * 100);
function probability(n) {
  return Math.random() < (n / 100);
}
function oProbability(n) {
  return Math.random() > (n / 100);
}
//U60??1 TRNG
document.getElementById("U60BT1").onclick = function() {
  let U60RS1 = document.getElementById("U60RS1");
  let U60CH1 = document.getElementById("U60CH1");
  if (probability(60)) {
      U60RS1.innerHTML = "Success!";
      U60CH1.innerHTML = "60% " + "> " + (Math.floor(Math.random() * 60)) + "%";
  } else {
      U60RS1.innerHTML = "Failed.";
      U60CH1.innerHTML = "60% " + "> " + (Math.floor(Math.random() * 40) + 60) + "%";
  }; 
};
//R40??1 TRNG
document.getElementById("R40BT1").onclick = function() {
  let R40RS1 = document.getElementById("R40RS1");
  let R40CH1 = document.getElementById("R40CH1");
  if (probability(40)) {
      R40RS1.innerHTML = "Success!";
      R40CH1.innerHTML = "40% " + "> " + (Math.floor(Math.random() * 40)) + "%";
  } else {
      R40RS1.innerHTML = "Failed.";
      R40CH1.innerHTML = "40% " + "> " + (Math.floor(Math.random() * 60) + 40) + "%";
  }; 
};
//E20??1 TRNG
document.getElementById("E20BT1").onclick = function() {
  let E20RS1 = document.getElementById("E20RS1");
  let E20CH1 = document.getElementById("E20CH1");
  if (probability(20)) {
      E20RS1.innerHTML = "Success!";
      E20CH1.innerHTML = "20% " + "> " + (Math.floor(Math.random() * 20)) + "%";
  } else {
      E20RS1.innerHTML = "Failed.";
      E20CH1.innerHTML = "20% " + "> " + (Math.floor(Math.random() * 80) + 20) + "%";
  }; 
};
//L5??1 TRNG
document.getElementById("L5BT1").onclick = function() {
  let L5RS1 = document.getElementById("L5RS1");
  let L5CH1 = document.getElementById("L5CH1");
  if (probability(5)) {
      L5RS1.innerHTML = "Success!";
      L5CH1.innerHTML = "5% " + "> " + (Math.floor(Math.random() * 5)) + "%";
  } else {
      L5RS1.innerHTML = "Failed.";
      L5CH1.innerHTML = "5% " + "> " + (Math.floor(Math.random() * 95) + 5) + "%";
  }; 
};
//M3??1 TRNG
document.getElementById("M3BT1").onclick = function() {
  let M3RS1 = document.getElementById("M3RS1");
  let M3CH1 = document.getElementById("M3CH1");
  if (probability(3)) {
      M3RS1.innerHTML = "Success!";
      M3CH1.innerHTML = "3% " + "> " + (Math.floor(Math.random() * 3)) + "%";
  } else {
      M3RS1.innerHTML = "Failed.";
      M3CH1.innerHTML = "3% " + "> " + (Math.floor(Math.random() * 97) + 3) + "%";
  }; 
}
//Many Petals TRNG
document.getElementById("U60BT2").onclick = function() {
  let U60IP2 = document.getElementById("U60IP2");
  let U60SC2 = document.getElementById("U60SC2");
  let U60FL2 = document.getElementById("U60FL2");
  let U60SCS2 = 0;
  let U60FAL2 = 0;
  let U60LST12 = 0;
  let U60LST22 = 0;
  let U60LST32 = 0;
  let U60LST42 = 0;
  do {
  if (probability(60)) {
      U60IP2.value -= 5;
      U60SCS2 += 1;
  } else {
      var U60FLL2 = (Math.floor(Math.random() * 4) + 1);
      if (U60FLL2 === 1) { U60LST12 += 1 };
      if (U60FLL2 === 2) { U60LST22 += 1 };
      if (U60FLL2 === 3) { U60LST32 += 1 };
      if (U60FLL2 === 4) { U60LST42 += 1 };
      U60IP2.value -= U60FLL2;
      U60FAL2 += 1;
  } 
  } while (U60IP2.value > 4)
      U60SC2.innerHTML = "Successes: " + U60SCS2;
      U60FL2.innerHTML = "Fails: " + U60FAL2 + `, [1=${U60LST12}],[2=${U60LST22}],[3=${U60LST32}],[4=${U60LST42}]`;
};