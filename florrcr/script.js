//Add variables.
const random = Math.floor(Math.random() * 100);
function probability(n) {
  return Math.random() < (n / 100);
}
function oProbability(n) {
  return Math.random() > (n / 100);
}
//BUTTON TRNG
//U60??1
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
//R40??1
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
//E20??1
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
//L5??1
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
//M3??1
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
};
//C,??1
document.getElementById("C?BT1").onclick = function() {
  let C0RS1 = document.getElementById("C?RS1");
  let C0CH1 = document.getElementById("C?CH1");
  let C0IP1 = document.getElementById("C?IP1");
  if (C0IP1.value % 1 !== 0) {
      let C0DC1 = 0;
      for (let i = 0; i < C0IP1.length; i++) {
           if (C0IP1.value.charAt(C0IP1.indexOf('.') + i) !== undefined) {
               C0DC1++;
           } else C0D
      };
      if (probability(C0IP1.value)) {
          C0RS1.innerHTML = "Success!";
          C0CH1.innerHTML = C0IP1.value + "%  " + "> " + (Math.random() * C0IP1.value).toFixed(C0DC1) + "%";
      } else {
          C0RS1.innerHTML = "Failed.";
          C0CH1.innerHTML = C0IP1.value + "% " + "> " + ((Math.random() * (100 - C0IP1.value)) + +C0IP1.value).toFixed(C0DC1) + "%";
      };
  } else {
      if (probability(C0IP1.value)) {
          C0RS1.innerHTML = "Success!";
          C0CH1.innerHTML = C0IP1.value + "%  " + "> " + (Math.floor(Math.random() * C0IP1.value)) + "%";
      } else {
          C0RS1.innerHTML = "Failed.";
          C0CH1.innerHTML = C0IP1.value + "% " + "> " + (Math.floor(Math.random() * (100 - C0IP1.value)) + +C0IP1.value) + "%";
      };
   };
};
/*BUTTON PRNG
//U60??1
let UPRNG = 42.265;
document.getElementById("U60BT1P").onclick = function() {
  let U60RS1 = document.getElementById("U60RS1P");
  let U60CH1 = document.getElementById("U60CH1P");
  let U60AT1 = 1;
  let chance = UPRNG * U60AT1;
  if (probability(chance)) {
      U60RS1.innerHTML = "Success!";
      U60CH1.innerHTML = chance + "% " + "> " + (Math.floor(Math.random() * chance)) + "%";
      U60AT1 = 1;
  } else {
      U60RS1.innerHTML = "Failed.";
      U60CH1.innerHTML = chance + "% " + "> " + (Math.floor(Math.random() * 40) + 60) + "%";
      U60AT1 += 1;
  }; 
};*/
//Many Petals TRNG
//U60??2
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
//R40??2
document.getElementById("R40BT2").onclick = function() {
  let R40IP2 = document.getElementById("R40IP2");
  let R40SC2 = document.getElementById("R40SC2");
  let R40FL2 = document.getElementById("R40FL2");
  let R40SCS2 = 0;
  let R40FAL2 = 0;
  let R40LST12 = 0;
  let R40LST22 = 0;
  let R40LST32 = 0;
  let R40LST42 = 0;
  do {
  if (probability(40)) {
      R40IP2.value -= 5;
      R40SCS2 += 1;
  } else {
      var R40FLL2 = (Math.floor(Math.random() * 4) + 1);
      if (R40FLL2 === 1) { R40LST12 += 1 };
      if (R40FLL2 === 2) { R40LST22 += 1 };
      if (R40FLL2 === 3) { R40LST32 += 1 };
      if (R40FLL2 === 4) { R40LST42 += 1 };
      R40IP2.value -= R40FLL2;
      R40FAL2 += 1;
  } 
  } while (R40IP2.value > 4)
      R40SC2.innerHTML = "Successes: " + R40SCS2;
      R40FL2.innerHTML = "Fails: " + R40FAL2 + `, [1=${R40LST12}],[2=${R40LST22}],[3=${R40LST32}],[4=${R40LST42}]`;
};
//E20??2
document.getElementById("E20BT2").onclick = function() {
  let E20IP2 = document.getElementById("E20IP2");
  let E20SC2 = document.getElementById("E20SC2");
  let E20FL2 = document.getElementById("E20FL2");
  let E20SCS2 = 0;
  let E20FAL2 = 0;
  let E20LST12 = 0;
  let E20LST22 = 0;
  let E20LST32 = 0;
  let E20LST42 = 0;
  do {
  if (probability(20)) {
      E20IP2.value -= 5;
      E20SCS2 += 1;
  } else {
      var E20FLL2 = (Math.floor(Math.random() * 4) + 1);
      if (E20FLL2 === 1) { E20LST12 += 1 };
      if (E20FLL2 === 2) { E20LST22 += 1 };
      if (E20FLL2 === 3) { E20LST32 += 1 };
      if (E20FLL2 === 4) { E20LST42 += 1 };
      E20IP2.value -= E20FLL2;
      E20FAL2 += 1;
  } 
  } while (E20IP2.value > 4)
      E20SC2.innerHTML = "Successes: " + E20SCS2;
      E20FL2.innerHTML = "Fails: " + E20FAL2 + `, [1=${E20LST12}],[2=${E20LST22}],[3=${E20LST32}],[4=${E20LST42}]`;
};
//L5??2
document.getElementById("L5BT2").onclick = function() {
  let L5IP2 = document.getElementById("L5IP2");
  let L5SC2 = document.getElementById("L5SC2");
  let L5FL2 = document.getElementById("L5FL2");
  let L5SCS2 = 0;
  let L5FAL2 = 0;
  let L5LST12 = 0;
  let L5LST22 = 0;
  let L5LST32 = 0;
  let L5LST42 = 0;
  do {
  if (probability(5)) {
      L5IP2.value -= 5;
      L5SCS2 += 1;
  } else {
      var L5FLL2 = (Math.floor(Math.random() * 4) + 1);
      if (L5FLL2 === 1) { L5LST12 += 1 };
      if (L5FLL2 === 2) { L5LST22 += 1 };
      if (L5FLL2 === 3) { L5LST32 += 1 };
      if (L5FLL2 === 4) { L5LST42 += 1 };
      L5IP2.value -= L5FLL2;
      L5FAL2 += 1;
  } 
  } while (L5IP2.value > 4)
      L5SC2.innerHTML = "Successes: " + L5SCS2;
      L5FL2.innerHTML = "Fails: " + L5FAL2 + `, [1=${L5LST12}],[2=${L5LST22}],[3=${L5LST32}],[4=${L5LST42}]`;
};
//M3??2
document.getElementById("M3BT2").onclick = function() {
  let M3IP2 = document.getElementById("M3IP2");
  let M3SC2 = document.getElementById("M3SC2");
  let M3FL2 = document.getElementById("M3FL2");
  let M3SCS2 = 0;
  let M3FAL2 = 0;
  let M3LST12 = 0;
  let M3LST22 = 0;
  let M3LST32 = 0;
  let M3LST42 = 0;
  do {
  if (probability(3)) {
      M3IP2.value -= 5;
      M3SCS2 += 1;
  } else {
      var M3FLL2 = (Math.floor(Math.random() * 4) + 1);
      if (M3FLL2 === 1) { M3LST12 += 1 };
      if (M3FLL2 === 2) { M3LST22 += 1 };
      if (M3FLL2 === 3) { M3LST32 += 1 };
      if (M3FLL2 === 4) { M3LST42 += 1 };
      M3IP2.value -= M3FLL2;
      M3FAL2 += 1;
  } 
  } while (M3IP2.value > 4)
      M3SC2.innerHTML = "Successes: " + M3SCS2;
      M3FL2.innerHTML = "Fails: " + M3FAL2 + `, [1=${M3LST12}],[2=${M3LST22}],[3=${M3LST32}],[4=${M3LST42}]`;
};