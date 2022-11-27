//Add variables.
const random = Math.floor(Math.random() * 100);
function probability(n) {
  return Math.random() < (n / 100);
}
function oProbability(n) {
  return Math.random() > (n / 100);
}
function selectId(id) { return document.getElementById(id) };
//Style color
const X0SC0 = "#52F84D";
selectId("U60SC1").style.color = X0SC0;
selectId("R40SC1").style.color = X0SC0;
selectId("E20SC1").style.color = X0SC0;
selectId("L5SC1").style.color = X0SC0;
selectId("M3SC1").style.color = X0SC0;
selectId("C?SC1").style.color = X0SC0;
//
const X0FL0 = "#F46658";
selectId("U60FL1").style.color = X0FL0;
selectId("R40FL1").style.color = X0FL0;
selectId("E20FL1").style.color = X0FL0;
selectId("L5FL1").style.color = X0FL0;
selectId("M3FL1").style.color = X0FL0;
selectId("C?FL1").style.color = X0FL0;
//
selectId("U60SCC2").style.color = X0SC0;
selectId("R40SCC2").style.color = X0SC0;
selectId("E20SCC2").style.color = X0SC0;
selectId("L5SCC2").style.color = X0SC0;
selectId("M3SCC2").style.color = X0SC0;
selectId("C?SCC2").style.color = X0SC0;
//
selectId("U60FLC2").style.color = X0FL0;
selectId("R40FLC2").style.color = X0FL0;
selectId("E20FLC2").style.color = X0FL0;
selectId("L5FLC2").style.color = X0FL0;
selectId("M3FLC2").style.color = X0FL0;
selectId("C?FLC2").style.color = X0FL0;
//BUTTON TRNG
//U60??1
selectId("U60BT1").onclick = function() {
  let U60RS1 = selectId("U60RS1");
  let U60CH1 = selectId("U60CH1");
  if (probability(60)) {
      U60RS1.innerHTML = "Success!";
      U60CH1.innerHTML = "60% " + "> " + (Math.floor(Math.random() * 60)) + "%";
      U60RS1.style.color = X0SC0;
      U60CH1.style.color = X0SC0;
      selectId("U60SC1").style.color = X0SC0;
      selectId("U60FL1").style.color = "white";
  } else {
      U60RS1.innerHTML = "Failed.";
      U60CH1.innerHTML = "60% " + "> " + (Math.floor(Math.random() * 40) + 60) + "%";
      U60RS1.style.color = X0FL0;
      U60CH1.style.color = X0FL0;
      selectId("U60SC1").style.color = "white";
      selectId("U60FL1").style.color = X0FL0;
  }; 
};
//R40??1
selectId("R40BT1").onclick = function() {
  let R40RS1 = selectId("R40RS1");
  let R40CH1 = selectId("R40CH1");
  if (probability(40)) {
      R40RS1.innerHTML = "Success!";
      R40CH1.innerHTML = "40% " + "> " + (Math.floor(Math.random() * 40)) + "%";
      R40RS1.style.color = X0SC0;
      R40CH1.style.color = X0SC0;
      selectId("R40SC1").style.color = X0SC0;
      selectId("R40FL1").style.color = "white";
  } else {
      R40RS1.innerHTML = "Failed.";
      R40CH1.innerHTML = "40% " + "> " + (Math.floor(Math.random() * 60) + 40) + "%";
      R40RS1.style.color = X0FL0;
      R40CH1.style.color = X0FL0;
      selectId("R40SC1").style.color = "white";
      selectId("R40FL1").style.color = X0FL0;
  }; 
};
//E20??1
selectId("E20BT1").onclick = function() {
  let E20RS1 = selectId("E20RS1");
  let E20CH1 = selectId("E20CH1");
  if (probability(20)) {
      E20RS1.innerHTML = "Success!";
      E20CH1.innerHTML = "20% " + "> " + (Math.floor(Math.random() * 20)) + "%";
      E20RS1.style.color = X0SC0;
      E20CH1.style.color = X0SC0;
      selectId("E20SC1").style.color = X0SC0;
      selectId("E20FL1").style.color = "white";
  } else {
      E20RS1.innerHTML = "Failed.";
      E20CH1.innerHTML = "20% " + "> " + (Math.floor(Math.random() * 80) + 20) + "%";
      E20RS1.style.color = X0FL0;
      E20CH1.style.color = X0FL0;
      selectId("E20SC1").style.color = "white";
      selectId("E20FL1").style.color = X0FL0;
  }; 
};
//L5??1
selectId("L5BT1").onclick = function() {
  let L5RS1 = selectId("L5RS1");
  let L5CH1 = selectId("L5CH1");
  if (probability(5)) {
      L5RS1.innerHTML = "Success!";
      L5CH1.innerHTML = "5% " + "> " + (Math.floor(Math.random() * 5)) + "%";
      L5RS1.style.color = X0SC0;
      L5CH1.style.color = X0SC0;
      selectId("L5SC1").style.color = X0SC0;
      selectId("L5FL1").style.color = "white";
  } else {
      L5RS1.innerHTML = "Failed.";
      L5CH1.innerHTML = "5% " + "> " + (Math.floor(Math.random() * 95) + 5) + "%";
      L5RS1.style.color = X0FL0;
      L5CH1.style.color = X0FL0;
      selectId("L5SC1").style.color = "white";
      selectId("L5FL1").style.color = X0FL0
  }; 
};
//M3??1
selectId("M3BT1").onclick = function() {
  let M3RS1 = selectId("M3RS1");
  let M3CH1 = selectId("M3CH1");
  if (probability(3)) {
      M3RS1.innerHTML = "Success!";
      M3CH1.innerHTML = "3% " + "> " + (Math.floor(Math.random() * 3)) + "%";
      M3RS1.style.color = X0SC0;
      M3CH1.style.color = X0SC0;
      selectId("M3SC1").style.color = X0SC0;
      selectId("M3FL1").style.color = "white";
  } else {
      M3RS1.innerHTML = "Failed.";
      M3CH1.innerHTML = "3% " + "> " + (Math.floor(Math.random() * 97) + 3) + "%";
      M3RS1.style.color = X0FL0;
      M3CH1.style.color = X0FL0;
      selectId("M3SC1").style.color = "white";
      selectId("M3FL1").style.color = X0FL0
  }; 
};
//C???1
selectId("C?BT1").onclick = function() {
  let C0RS1 = selectId("C?RS1");
  let C0CH1 = selectId("C?CH1");
  let C0IP1 = selectId("C?IP1");
  if (C0IP1.value % 1 !== 0) {
      let C0DC1 = 0, C0OP1 = 0;
      do { C0DC1 += 1 }
      while (C0DC1 < Math.floor(C0IP1.value.length / 2))
      if (probability(C0IP1.value)) {
          C0RS1.innerHTML = "Success!";
          C0CH1.innerHTML = C0IP1.value + "%  " + "> " + (Math.random() * C0IP1.value).toFixed(C0DC1) + "%";
          C0RS1.style.color = X0SC0;
          C0CH1.style.color = X0SC0;
          selectId("C?SC1").style.color = X0SC0;
          selectId("C?FL1").style.color = "white";
      } else {
          C0RS1.innerHTML = "Failed.";
          C0CH1.innerHTML = C0IP1.value + "% " + "> " + ((Math.random() * (100 - C0IP1.value)) + +C0IP1.value).toFixed(C0DC1) + "%";
          C0RS1.style.color = X0FL0;
          C0CH1.style.color = X0FL0;
          selectId("C?SC1").style.color = "white";
          selectId("C?FL1").style.color = X0FL0;
      };
  } else {
      if (probability(C0IP1.value)) {
          C0RS1.innerHTML = "Success!";
          C0CH1.innerHTML = C0IP1.value + "%  " + "> " + (Math.floor(Math.random() * C0IP1.value)) + "%";
          C0RS1.style.color = X0SC0;
          C0CH1.style.color = X0SC0;
          selectId("C?SC1").style.color = X0SC0;
          selectId("C?FL1").style.color = "white";
      } else {
          C0RS1.innerHTML = "Failed.";
          C0CH1.innerHTML = C0IP1.value + "% " + "> " + (Math.floor(Math.random() * (100 - C0IP1.value)) + +C0IP1.value) + "%";
          C0RS1.style.color = X0FL0;
          C0CH1.style.color = X0FL0;
          selectId("C?SC1").style.color = "white";
          selectId("C?FL1").style.color = X0FL0
      };
   };
   selectId("C?SC1").innerHTML = C0IP1.value + "% Success Chance";
   selectId("C?FL1").innerHTML = (100 - +C0IP1.value) + "% Fail Chance";
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
selectId("U60BT2").onclick = function() {
  let U60IP2 = selectId("U60IP2");
  let U60SC2 = selectId("U60SC2");
  let U60FL2 = selectId("U60FL2");
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
  };
  } while (U60IP2.value > 4)
      U60SC2.innerHTML = "Successes: " + U60SCS2;
      U60FL2.innerHTML = "Fails: " + U60FAL2 + `, [1=${U60LST12}],[2=${U60LST22}],[3=${U60LST32}],[4=${U60LST42}]`;
      if (U60SCS2 === 0) {
        U60SC2.style.color = "white";
        selectId("U60SCC2").style.color = "white";
      };
      if (U60FAL2 === 0) {
        U60FL2.style.color = "white";
        selectId("U60FLC2").style.color = "white";
      };
      if (U60SCS2 > 0) {  
        U60SC2.style.color = X0SC0;
        selectId("U60SCC2").style.color = X0SC0;
      };
      if (U60FAL2 > 0) {  
        U60FL2.style.color = X0FL0;
        selectId("U60FLC2").style.color = X0FL0;
      };
};
//R40??2
selectId("R40BT2").onclick = function() {
  let R40IP2 = selectId("R40IP2");
  let R40SC2 = selectId("R40SC2");
  let R40FL2 = selectId("R40FL2");
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
      if (R40SCS2 === 0) {
        R40SC2.style.color = "white";
        selectId("R40SCC2").style.color = "white";
      };
      if (R40FAL2 === 0) {
        R40FL2.style.color = "white";
        selectId("R40FLC2").style.color = "white";
      };
      if (R40SCS2 > 0) {  
        R40SC2.style.color = X0SC0;
        selectId("R40SCC2").style.color = X0SC0;
      };
      if (R40FAL2 > 0) {  
        R40FL2.style.color = X0FL0;
        selectId("R40FLC2").style.color = X0FL0;
      };
};
//E20??2
selectId("E20BT2").onclick = function() {
  let E20IP2 = selectId("E20IP2");
  let E20SC2 = selectId("E20SC2");
  let E20FL2 = selectId("E20FL2");
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
      if (E20SCS2 === 0) {
        E20SC2.style.color = "white";
        selectId("E20SCC2").style.color = "white";
      };
      if (E20FAL2 === 0) {
        E20FL2.style.color = "white";
        selectId("E20FLC2").style.color = "white";
      };
      if (E20SCS2 > 0) {  
        E20SC2.style.color = X0SC0;
        selectId("E20SCC2").style.color = X0SC0;
      };
      if (E20FAL2 > 0) {  
        E20FL2.style.color = X0FL0;
        selectId("E20FLC2").style.color = X0FL0;
      };
};
//L5??2
selectId("L5BT2").onclick = function() {
  let L5IP2 = selectId("L5IP2");
  let L5SC2 = selectId("L5SC2");
  let L5FL2 = selectId("L5FL2");
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
      if (L5SCS2 === 0) {
        L5SC2.style.color = "white";
        selectId("L5SCC2").style.color = "white";
      };
      if (L5FAL2 === 0) {
        L5FL2.style.color = "white";
        selectId("L5FLC2").style.color = "white";
      };
      if (L5SCS2 > 0) {  
        L5SC2.style.color = X0SC0;
        selectId("L5SCC2").style.color = X0SC0;
      };
      if (L5FAL2 > 0) {  
        L5FL2.style.color = X0FL0;
        selectId("L5FLC2").style.color = X0FL0;
      };
};
//M3??2
selectId("M3BT2").onclick = function() {
  let M3IP2 = selectId("M3IP2");
  let M3SC2 = selectId("M3SC2");
  let M3FL2 = selectId("M3FL2");
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
      if (M3SCS2 === 0) {
        M3SC2.style.color = "white";
        selectId("M3SCC2").style.color = "white";
      };
      if (M3FAL2 === 0) {
        M3FL2.style.color = "white";
        selectId("M3FLC2").style.color = "white";
      };
      if (M3SCS2 > 0) {  
        M3SC2.style.color = X0SC0;
        selectId("M3SCC2").style.color = X0SC0;
      };
      if (M3FAL2 > 0) {  
        M3FL2.style.color = X0FL0;
        selectId("M3FLC2").style.color = X0FL0;
      };
};
//C0??2
selectId("C?BT2").onclick = function() {
  let C0IP2 = selectId("C?IP2");
  let C0SC2 = selectId("C?SC2");
  let C0FL2 = selectId("C?FL2");
  let C0PB2 = selectId("C?PB2");
  let C0SCS2 = 0;
  let C0FAL2 = 0;
  let C0LST12 = 0;
  let C0LST22 = 0;
  let C0LST32 = 0;
  let C0LST42 = 0;
  do {
  if (probability(C0PB2.value)) {
      C0IP2.value -= 5;
      C0SCS2 += 1;
  } else {
      var C0FLL2 = (Math.floor(Math.random() * 4) + 1);
      if (C0FLL2 === 1) { C0LST12 += 1 };
      if (C0FLL2 === 2) { C0LST22 += 1 };
      if (C0FLL2 === 3) { C0LST32 += 1 };
      if (C0FLL2 === 4) { C0LST42 += 1 };
      C0IP2.value -= C0FLL2;
      C0FAL2 += 1;
  };
  } while (C0IP2.value > 4)
      C0SC2.innerHTML = "Successes: " + C0SCS2;
      C0FL2.innerHTML = "Fails: " + C0FAL2 + `, [1=${C0LST12}],[2=${C0LST22}],[3=${C0LST32}],[4=${C0LST42}]`;
      if (C0SCS2 === 0) {
        C0SC2.style.color = "white";
        selectId("C?SCC2").style.color = "white";
      };
      if (C0FAL2 === 0) {
        C0FL2.style.color = "white";
        selectId("C?FLC2").style.color = "white";
      };
      if (C0SCS2 > 0) {  
        C0SC2.style.color = X0SC0;
        selectId("C?SCC2").style.color = X0SC0;
      };
      if (C0FAL2 > 0) {  
        C0FL2.style.color = X0FL0;
        selectId("C?FLC2").style.color = X0FL0;
      };
   selectId("C?SCC2").innerHTML = C0PB2.value + "% Success Chance";
   selectId("C?FLC2").innerHTML = (100 - +C0PB2.value) + "% Fail Chance";
};