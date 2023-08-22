//Functions
//Probability
function probability(n) {
  return Math.random() < (n / 100);
};
//(Opposite) Of Probability
function oProbability(n) {
  return Math.random() > (n / 100);
};
//Select random from array
function choose(arg) {
  return arg[Math.floor(Math.random() * arg.length)]
};
//Select ID of course 
function selectId(id) { return document.getElementById(id) };
//Random color from customize 
const C0CLA0 = ["5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const C0CL0 = "#" + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0);
selectId("C?TL1").style.color = C0CL0;
selectId("C?IP1").style.background = C0CL0;
selectId("C?BT1").style.background = C0CL0;
selectId("C?SC1").style.color = C0CL0;
selectId("C?FL1").style.color = C0CL0;
selectId("C?TL2").style.color = C0CL0;
selectId("C?PB2").style.background = C0CL0;
selectId("C?IP2").style.background = C0CL0;
selectId("C?BT2").style.background = C0CL0;
selectId("C?SCC2").style.color = C0CL0;
selectId("C?FLC2").style.color = C0CL0;
//Title color changing every second
let TitleVar = null;
function TitleFunc() {
clearInterval(TitleVar);
TitleVar = setInterval(TitleChange, 1000);
function TitleChange() { 
  document.getElementsByClassName("TITLE")[0].style.color = "#" + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0);
  document.getElementsByClassName("TITLE")[1].style.color = "#" + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0) + choose(C0CLA0);
};
}; 
TitleFunc();
//Success Color
const X0SC0 = "#52F84D";
selectId("uSuccess").style.color = X0SC0;
selectId("rSuccess").style.color = X0SC0;
selectId("eSuccess").style.color = X0SC0;
selectId("lSuccess").style.color = X0SC0;
selectId("mSuccess").style.color = X0SC0;
selectId("qSuccess").style.color = X0SC0;
//Fail Color
const X0FL0 = "#F46658";
selectId("uFail").style.color = X0FL0;
selectId("rFail").style.color = X0FL0;
selectId("eFail").style.color = X0FL0;
selectId("lFail").style.color = X0FL0;
selectId("mFail").style.color = X0FL0;
selectId("qFail").style.color = X0FL0;
//
selectId("U60SCC2").style.color = X0SC0;
selectId("R40SCC2").style.color = X0SC0;
selectId("E20SCC2").style.color = X0SC0;
selectId("L5SCC2").style.color = X0SC0;
selectId("M3SCC2").style.color = X0SC0;
//
selectId("U60FLC2").style.color = X0FL0;
selectId("R40FLC2").style.color = X0FL0;
selectId("E20FLC2").style.color = X0FL0;
selectId("L5FLC2").style.color = X0FL0;
selectId("M3FLC2").style.color = X0FL0;
//Normal
//Unusual
let uOriginal = selectId("uTypeOriginal");
let uPRNG = selectId("uTypePRNG");
let uOld = selectId("uTypeOld");
let uOlderMSP = selectId("uTypeOlderMSkill");
let uOldLSP = selectId("uTypeOldLSkill");
let uOldMSP = selectId("uTypeOldMSkill");
let uCurrent = selectId("uTypeCurrent");
let uLSP = selectId("uTypeLSkill");
let uMSP = selectId("uTypeMSkill");
//Stuff
let uProb = 40;
let uAtt = 0;
let uCombo = 0;
let uIsPRNG = false;
let uProbArray = [42.26, 84.53, 100];
uOriginal.onclick = function() {
  uProb = 75;
  uIsPRNG = false;
  selectId("uSuccess").innerHTML = "75% Success Chance";
  selectId("uFail").innerHTML = (100 - 75) + "% Fail Chance";
};
uPRNG.onclick = function() {
  uIsPRNG = true;
  uAtt = 0;
  uProb = uProbArray[uAtt];
  selectId("uSuccess").innerHTML = uProbArray[uAtt] + "% Success Chance";
  selectId("uFail").innerHTML = (100 - uProbArray[uAtt]) + "% Fail Chance";
};
uOld.onclick = function() {
  uProb = 60;
  uIsPRNG = false;
  selectId("uSuccess").innerHTML = uProb + " Success Chance";
  selectId("uFail").innerHTML = (100 - uProb) + "% Fail Chance";
};
uOlderMSP.onclick = function() {
  uProb = 90;
  uIsPRNG = false;
  selectId("uSuccess").innerHTML = uProb + " Success Chance";
  selectId("uFail").innerHTML = (100 - uProb) + "% Fail Chance";
};
uOldLSP.onclick = function() {
  uProb = 60;
  uIsPRNG = false;
  selectId("uSuccess").innerHTML = uProb + " Success Chance";
  selectId("uFail").innerHTML = (100 - uProb) + "% Fail Chance";
};
uOldMSP.onclick = function() {
  uProb = 80;
  uIsPRNG = false;
  selectId("uSuccess").innerHTML = uProb + " Success Chance";
  selectId("uFail").innerHTML = (100 - uProb) + "% Fail Chance";
};
uLSP.onclick = function() {
  uProb = 44;
  uIsPRNG = false;
  selectId("uSuccess").innerHTML = uProb + " Success Chance";
  selectId("uFail").innerHTML = (100 - uProb) + "% Fail Chance";
};
uMSP.onclick = function() {
  uProb = 48;
  uIsPRNG = false;
  selectId("uSuccess").innerHTML = uProb + " Success Chance";
  selectId("uFail").innerHTML = (100 - uProb) + "% Fail Chance";
};
uCurrent.onclick = function() {
  uProb = 40;
  uIsPRNG = false;
  selectId("uSuccess").innerHTML = uProb + " Success Chance";
  selectId("uFail").innerHTML = (100 - uProb) + "% Fail Chance";
};
//Now we hit the craft button.
selectId("uButton").onclick = function() {
  let result = selectId("uResult");
  let chance = selectId("uChance");
  //If it successes
  if (probability(uProb)) {
      result.innerHTML = "Success!";
      chance.innerHTML = uIsPRNG === true ? `${uProb}% > ${((Math.random() * uProb).toFixed(2))}%` : `${uProb}% > ${(Math.floor(Math.random() * uProb))}%`;
      if (uIsPRNG === true) { 
        uProb = uProbArray[uAtt];
        selectId("uSuccess").innerHTML = uProb + "% Success Chance";
        selectId("uFail").innerHTML = (100 - uProb).toFixed(2) + "% Fail Chance";
      };
      uAtt > 0 ? selectId("uAttempt").innerHTML = `Suceeded at Attempt ${(uAtt + 1)}` : selectId("uAttempt").innerHTML = `Attempt ${(uAtt + 1)}`;;
      uAtt = 0;
      uCombo = uCombo + 1;
      if (uCombo > 1) { selectId("uAttempt").innerHTML = `Attempt ${(uAtt + 1)}, Combo x${uCombo}` };
      result.style.color = X0SC0;
      chance.style.color = X0SC0;
      selectId("uSuccess").style.color = X0SC0;
      selectId("uFail").style.color = "white";
  } else { //If it fails
      result.innerHTML = "Failed.";
      chance.innerHTML = uIsPRNG === true ? `${uProb}% > ${(((Math.random() * ((100 - uProb) + 1)) + uProb).toFixed(2))}%` : `${uProb}% > ${(Math.floor(Math.random() * ((100 - uProb) + 1)) + uProb)}%`;
      uAtt = uAtt + 1;
      if (uIsPRNG === true) { 
        uProb = uProbArray[uAtt];
        selectId("uSuccess").innerHTML = uProb + "% Success Chance";
        selectId("uFail").innerHTML = (100 - uProb).toFixed(2) + "% Fail Chance";
      };
      selectId("uAttempt").innerHTML = `Attempt ${(uAtt + 1)}`;
      uCombo = 0;
      result.style.color = X0FL0;
      chance.style.color = X0FL0;
      selectId("uSuccess").style.color = "white";
      selectId("uFail").style.color = X0FL0;
  }; 
};
//Rare
let rPRNG = selectId("rTypePRNG");
let rCurrent = selectId("rTypeCurrent");
let rOld = selectId("rTypeOld");
let rSP = selectId("rTypeOld");
//Stuff
let rProb = 40;
let rIsPRNG = false;
let rAtt = 0;
let rCombo = 0;
let rProbArray = [20.15, 40.31, 60.46, 80.62, 100];
let rIsSP = false;
rCurrent.style.visibility = "hidden";
rSP.style.right = "135px";
rIsSP === true ? rOld.style.right = "0px" : rOld.style.right = "135px";
//One disappears, one appears.
rOld.onclick = function() {
  rProb = 50;
  rIsPRNG = false;
  rIsSP = false;
  rOld.style.visibility = "hidden";
  rCurrent.style.visibility = "visible";
  rSP.style.right = "100px";
  rSP.style.visibility = "visible";
  selectId("rSuccess").innerHTML = "50% Success Chance";
  selectId("rFail").innerHTML = (100 - 50) + "% Fail Chance";
};
rCurrent.onclick = function() {
  rProb = 40;
  rIsPRNG = false;
  rIsSP === true ? rOld.style.right = "135px" : undefined;
  rIsSP = false;
  rCurrent.style.visibility = "hidden";
  rOld.style.visibility = "visible";
  if (rOld.style.right === "0px") { rOld.style.right = "135px" };
  rSP.style.visibility = "visible";
  rSP.style.right = "135px";
  selectId("rSuccess").innerHTML = "40% Success Chance";
  selectId("rFail").innerHTML = (100 - 40) + "% Fail Chance";
};
rSP.onclick = function() {
  rProb = 60;
  rIsPRNG = false;
  rIsSP = true;
  rSP.style.visibility = "hidden";
  rCurrent.style.visibility = "visible";
  rOld.style.right = "0px";
  selectId("rSuccess").innerHTML = "60% Success Chance";
  selectId("rFail").innerHTML = (100 - 60) + "% Fail Chance";
};
rPRNG.onclick = function() {
  rIsPRNG = true;
  if (rIsSP === true){
      rOld.style.visibility = "hidden"
      rOld.style.right = "135px";
      rOld.style.visibility = "visible";
      rCurrent.style.visibility = "hidden";
  };
  rIsSP = false;
  rAtt = 0;
  rProb = rProbArray[rAtt];
  rSP.style.visibility = "visible";
  selectId("rSuccess").innerHTML = rProbArray[rAtt] + "% Success Chance";
  selectId("rFail").innerHTML = (100 - rProbArray[rAtt]) + "% Fail Chance";
};
//Now we hit the craft button.
selectId("rButton").onclick = function() {
  let result = selectId("rResult");
  let chance = selectId("rChance");
  //If it successes
  if (probability(rProb)) {
      result.innerHTML = "Success!";
      chance.innerHTML = rIsPRNG === true ? `${rProb}% > ${((Math.random() * rProb).toFixed(2))}%` : `${rProb}% > ${(Math.floor(Math.random() * rProb))}%`;
      if (rIsPRNG === true) { 
        rProb = rProbArray[rAtt];
        selectId("rSuccess").innerHTML = rProb + "% Success Chance";
        selectId("rFail").innerHTML = (100 - rProb).toFixed(2) + "% Fail Chance";
      };
      rAtt > 0 ? selectId("rAttempt").innerHTML = `Suceeded at Attempt ${(rAtt + 1)}` : selectId("rAttempt").innerHTML = `Attempt ${(rAtt + 1)}`;;
      rAtt = 0;
      rCombo = rCombo + 1;
      if (rCombo > 1) { selectId("rAttempt").innerHTML = `Attempt ${(rAtt + 1)}, Combo x${rCombo}` };
      result.style.color = X0SC0;
      chance.style.color = X0SC0;
      selectId("rSuccess").style.color = X0SC0;
      selectId("rFail").style.color = "white";
  } else { //If it fails
      result.innerHTML = "Failed.";
      chance.innerHTML = rIsPRNG === true ? `${rProb}% > ${(((Math.random() * ((100 - rProb) + 1)) + rProb).toFixed(2))}%` : `${rProb}% > ${(Math.floor(Math.random() * ((100 - rProb) + 1)) + rProb)}%`;
      rAtt = rAtt + 1;
      if (rIsPRNG === true) { 
        rProb = rProbArray[rAtt];
        selectId("rSuccess").innerHTML = rProb + "% Success Chance";
        selectId("rFail").innerHTML = (100 - rProb).toFixed(2) + "% Fail Chance";
      };
      selectId("rAttempt").innerHTML = `Attempt ${(rAtt + 1)}`;
      rCombo = 0;
      result.style.color = X0FL0;
      chance.style.color = X0FL0;
      selectId("rSuccess").style.color = "white";
      selectId("rFail").style.color = X0FL0;
  }; 
};
//Epic
let ePRNG = "selectId(undefined)";
let eCurrent = selectId("eTypeCurrent");
let eOld = selectId("eTypeOld");
let eOlder = selectId("eTypeOlder");
let eSP = selectId("eTypeSP");
//Stuff;
let eProb = 20;
let eIsPRNG = false;
let eAtt = 0;
let eCombo = 0;
let eProbArray = [undefined];
let eIsSP = false;
eCurrent.style.visibility = "hidden";
eOlder.style.visibility = "hidden";
eOlder.style.right = "135px";
eSP.style.right = (135 * 1.875) + "px";
eIsSP === true ? eOld.style.right = "0px" : eOld.style.right = "135px";
//One disappears, one appears.
eOld.onclick = function() {
  eProb = 15;
  eIsPRNG = false;
  eIsSP = false;
  eOld.style.visibility = "hidden";
  eOlder.style.right = (135 / 1.3425) + "px"
  eSP.style.right === "117.5px" && eOlder.style.visibility === "hidden" ? eSP.style.right = (135 / 1.3425) + "px" : eSP.style.right = "100px";
  eOlder.style.visibility = "visible";
  eCurrent.style.visibility = "visible";
  eSP.style.visibility = "visible";
  selectId("eSuccess").innerHTML = "15% Success Chance";
  selectId("eFail").innerHTML = (100 - 15) + "% Fail Chance";
};
eOlder.onclick = function() {
  eProb = 25;
  eIsPRNG = false;
  eIsSP = false;
  eOlder.style.visibility = "hidden";
  eOld.style.right = "0px";
  eOld.style.visibility = "visible";
  eCurrent.style.visibility = "visible";
  eSP.style.right = "117.5px";
  eSP.style.visibility = "visible";
  selectId("eSuccess").innerHTML = "25% Success Chance";
  selectId("eFail").innerHTML = (100 - 25) + "% Fail Chance";
};
eCurrent.onclick = function() {
  eProb = 20;
  eIsPRNG = false;
  eIsSP === true ? eOld.style.right = "135px" : undefined;
  eIsSP = false;
  eCurrent.style.visibility = "hidden";
  eOld.style.visibility = "visible";
  if (eOld.style.right === "0px") { eOld.style.right = "135px" };
  eOlder.style.right = "135px";
  eSP.style.visibility = "visible";
  eOlder.style.visibility === "visible" ? eSP.style.right = "135px" : eSP.style.right = (135 * 1.875) + "px";
  selectId("eSuccess").innerHTML = "20% Success Chance";
  selectId("eFail").innerHTML = (100 - 20) + "% Fail Chance";
};
eSP.onclick = function() {
  eProb = 30;
  eIsPRNG = false;
  eIsSP = true;
  eSP.style.visibility = "hidden";
  eCurrent.style.visibility = "visible";
  eOld.style.visibility = "visible";
  eOlder.style.visibility = "visible";
  eOld.style.right = "0px";
  eOlder.style.right = "0px";
  selectId("eSuccess").innerHTML = "30% Success Chance";
  selectId("eFail").innerHTML = (100 - 30) + "% Fail Chance";
};
ePRNG.onclick = function() {
  eIsPRNG = true;
  if (eIsSP === true){
      eOld.style.visibility = "hidden"
      eOld.style.right = "135px";
      eOld.style.visibility = "visible";
      eCurrent.style.visibility = "hidden";
  };
  eIsSP = false;
  eAtt = 0;
  eProb = eProbArray[eAtt];
  eSP.style.visibility = "visible";
  selectId("eSuccess").innerHTML = eProbArray[eAtt] + "% Success Chance";
  selectId("eFail").innerHTML = (100 - eProbArray[eAtt]) + "% Fail Chance";
};
//Now we hit the craft button.
selectId("eButton").onclick = function() {
  let result = selectId("eResult");
  let chance = selectId("eChance");
  //If it successes
  if (probability(eProb)) {
      result.innerHTML = "Success!";
      chance.innerHTML = eIsPRNG === true ? `${eProb}% > ${((Math.random() * eProb).toFixed(2))}%` : `${eProb}% > ${(Math.floor(Math.random() * eProb))}%`;
      if (eIsPRNG === true) { 
        eProb = eProbArray[eAtt];
        selectId("eSuccess").innerHTML = eProb + "% Success Chance";
        selectId("eFail").innerHTML = (100 - eProb).toFixed(2) + "% Fail Chance";
      };
      eAtt > 0 ? selectId("eAttempt").innerHTML = `Suceeded at Attempt ${(eAtt + 1)}` : selectId("eAttempt").innerHTML = `Attempt ${(eAtt + 1)}`;;
      eAtt = 0;
      eCombo = eCombo + 1;
      if (eCombo > 1) { selectId("eAttempt").innerHTML = `Attempt ${(eAtt + 1)}, Combo x${eCombo}` };
      result.style.color = X0SC0;
      chance.style.color = X0SC0;
      selectId("eSuccess").style.color = X0SC0;
      selectId("eFail").style.color = "white";
  } else { //If it fails
      result.innerHTML = "Failed.";
      chance.innerHTML = eIsPRNG === true ? `${eProb}% > ${(((Math.random() * ((100 - eProb) + 1)) + eProb).toFixed(2))}%` : `${eProb}% > ${(Math.floor(Math.random() * ((100 - eProb) + 1)) + eProb)}%`;
      eAtt = eAtt + 1;
      if (eIsPRNG === true) { 
        eProb = eProbArray[eAtt];
        selectId("eSuccess").innerHTML = eProb + "% Success Chance";
        selectId("eFail").innerHTML = (100 - eProb).toFixed(2) + "% Fail Chance";
      };
      selectId("eAttempt").innerHTML = `Attempt ${(eAtt + 1)}`;
      eCombo = 0;
      result.style.color = X0FL0;
      chance.style.color = X0FL0;
      selectId("eSuccess").style.color = "white";
      selectId("eFail").style.color = X0FL0;
  }; 
};
//Legendary
let lPRNG = "selectId(undefined)";
let lCurrent = selectId("lTypeCurrent");
let lOld = selectId("lTypeOld");
let lSP = selectId("lTypeSP");
//Stuff;
let lProb = 10;
let lIsPRNG = false;
let lAtt = 0;
let lCombo = 0;
let lProbArray = [undefined];
let lIsSP = false;
lCurrent.style.visibility = "hidden";
lSP.style.right = "135px";
lIsSP === true ? lOld.style.right = "0px" : lOld.style.right = "135px";
//One disappears, one appears.
lOld.onclick = function() {
  lProb = 5;
  lIsPRNG = false;
  lIsSP = false;
  lOld.style.visibility = "hidden";
  lCurrent.style.visibility = "visible";
  lSP.style.right = (135 / 1.475) + "px";
  lSP.style.visibility = "visible";
  selectId("lSuccess").innerHTML = "5% Success Chance";
  selectId("lFail").innerHTML = (100 - 5) + "% Fail Chance";
};
lCurrent.onclick = function() {
  lProb = 10;
  lIsPRNG = false;
  lIsSP === true ? lOld.style.right = "135px" : undefined;
  lIsSP = false;
  lCurrent.style.visibility = "hidden";
  lOld.style.visibility = "visible";
  if (lOld.style.right === "0px") { lOld.style.right = "135px" };
  lSP.style.visibility = "visible";
  lSP.style.right = "135px";
  selectId("lSuccess").innerHTML = "10% Success Chance";
  selectId("lFail").innerHTML = (100 - 10) + "% Fail Chance";
};
lSP.onclick = function() {
  lProb = 15;
  lIsPRNG = false;
  lIsSP = true;
  lSP.style.visibility = "hidden";
  lCurrent.style.visibility = "visible";
  lOld.style.visibility = "visible";
  lOld.style.right = "0px";
  selectId("lSuccess").innerHTML = "15% Success Chance";
  selectId("lFail").innerHTML = (100 - 15) + "% Fail Chance";
};
lPRNG.onclick = function() {
  lIsPRNG = true;
  if (lIsSP === true){
      lOld.style.visibility = "hidden"
      lOld.style.right = "135px";
      lOld.style.visibility = "visible";
      lCurrent.style.visibility = "hidden";
  };
  lIsSP = false;
  lAtt = 0;
  lProb = lProbArray[lAtt];
  lSP.style.visibility = "visible";
  selectId("lSuccess").innerHTML = lProbArray[lAtt] + "% Success Chance";
  selectId("lFail").innerHTML = (100 - lProbArray[lAtt]) + "% Fail Chance";
};
//Now we hit the craft button.
selectId("lButton").onclick = function() {
  let result = selectId("lResult");
  let chance = selectId("lChance");
  //If it successes
  if (probability(lProb)) {
      result.innerHTML = "Success!";
      chance.innerHTML = lIsPRNG === true ? `${lProb}% > ${((Math.random() * lProb).toFixed(2))}%` : `${lProb}% > ${(Math.floor(Math.random() * lProb))}%`;
      if (lIsPRNG === true) { 
        lProb = lProbArray[lAtt];
        selectId("lSuccess").innerHTML = lProb + "% Success Chance";
        selectId("lFail").innerHTML = (100 - lProb).toFixed(2) + "% Fail Chance";
      };
      lAtt > 0 ? selectId("lAttempt").innerHTML = `Suceeded at Attempt ${(lAtt + 1)}` : selectId("lAttempt").innerHTML = `Attempt ${(lAtt + 1)}`;;
      lAtt = 0;
      lCombo = lCombo + 1;
      if (lCombo > 1) { selectId("lAttempt").innerHTML = `Attempt ${(lAtt + 1)}, Combo x${lCombo}` };
      result.style.color = X0SC0;
      chance.style.color = X0SC0;
      selectId("lSuccess").style.color = X0SC0;
      selectId("lFail").style.color = "white";
  } else { //If it fails
      result.innerHTML = "Failed.";
      chance.innerHTML = lIsPRNG === true ? `${lProb}% > ${(((Math.random() * ((100 - lProb) + 1)) + lProb).toFixed(2))}%` : `${lProb}% > ${(Math.floor(Math.random() * ((100 - lProb) + 1)) + lProb)}%`;
      lAtt = lAtt + 1;
      if (lIsPRNG === true) { 
        lProb = lProbArray[lAtt];
        selectId("lSuccess").innerHTML = lProb + "% Success Chance";
        selectId("lFail").innerHTML = (100 - lProb).toFixed(2) + "% Fail Chance";
      };
      selectId("lAttempt").innerHTML = `Attempt ${(lAtt + 1)}`;
      lCombo = 0;
      result.style.color = X0FL0;
      chance.style.color = X0FL0;
      selectId("lSuccess").style.color = "white";
      selectId("lFail").style.color = X0FL0;
  }; 
};
//m
let mPRNG = "selectId(undefined)";
let mCurrent = selectId("mTypeCurrent");
let mOld = selectId("mTypeOld");
let mOlder = selectId("mTypeOlder");
//Stuff
let mProb = 3;
let mIsPRNG = false;
let mAtt = 0;
let mCombo = 0;
let mProbArray = [undefined];
mCurrent.style.visibility = "hidden";
mOlder.style.visibility = "hidden";
mOlder.style.right = "135px";
mOld.style.right = "125px";
//One disappears, one appears.
mOld.onclick = function() {
  mProb = 2;
  mIsPRNG = false;
  mOld.style.visibility = "hidden";
  mOlder.style.right = (135 / 1.49) + "px";
  mOlder.style.visibility = "visible";
  mCurrent.style.visibility = "visible";
  selectId("mSuccess").innerHTML = "2% Success Chance";
  selectId("mFail").innerHTML = (100 - 2) + "% Fail Chance";
};
mOlder.onclick = function() {
  mProb = 1;
  mIsPRNG = false;
  mOlder.style.visibility = "hidden";
  mOld.style.right = "0px";
  mOld.style.visibility = "visible";
  mCurrent.style.visibility = "visible";
  selectId("mSuccess").innerHTML = "1% Success Chance";
  selectId("mFail").innerHTML = (100 - 1) + "% Fail Chance";
};
mCurrent.onclick = function() {
  mProb = 3;
  mIsPRNG = false;
  mCurrent.style.visibility = "hidden";
  mOld.style.visibility = "visible";
  mOld.style.right = "125px";
  mOlder.style.right = "125px";
  if (mOlder.style.visibility === "visible") { mOlder.style.visibility = "hidden" };
  selectId("mSuccess").innerHTML = "3% Success Chance";
  selectId("mFail").innerHTML = (100 - 3) + "% Fail Chance";
};
mPRNG.onclick = function() {
  mIsPRNG = true;
  mAtt = 0;
  mProb = mProbArray[mAtt];
  selectId("mSuccess").innerHTML = mProbArray[mAtt] + "% Success Chance";
  selectId("mFail").innerHTML = (100 - mProbArray[mAtt]) + "% Fail Chance";
};
//Now we hit the craft button.
selectId("mButton").onclick = function() {
  let result = selectId("mResult");
  let chance = selectId("mChance");
  //If it successes
  if (probability(mProb)) {
      result.innerHTML = "Success!";
      chance.innerHTML = mIsPRNG === true ? `${mProb}% > ${((Math.random() * mProb).toFixed(2))}%` : `${mProb}% > ${(Math.floor(Math.random() * mProb))}%`;
      if (mIsPRNG === true) { 
        mProb = mProbArray[mAtt];
        selectId("mSuccess").innerHTML = mProb + "% Success Chance";
        selectId("mFail").innerHTML = (100 - mProb).toFixed(2) + "% Fail Chance";
      };
      mAtt > 0 ? selectId("mAttempt").innerHTML = `Suceeded at Attempt ${(mAtt + 1)}` : selectId("mAttempt").innerHTML = `Attempt ${(mAtt + 1)}`;;
      mAtt = 0;
      mCombo = mCombo + 1;
      if (mCombo > 1) { selectId("mAttempt").innerHTML = `Attempt ${(mAtt + 1)}, Combo x${mCombo}` };
      result.style.color = X0SC0;
      chance.style.color = X0SC0;
      selectId("mSuccess").style.color = X0SC0;
      selectId("mFail").style.color = "white";
  } else { //If it fails
      result.innerHTML = "Failed.";
      chance.innerHTML = mIsPRNG === true ? `${mProb}% > ${(((Math.random() * ((100 - mProb) + 1)) + mProb).toFixed(2))}%` : `${mProb}% > ${(Math.floor(Math.random() * ((100 - mProb) + 1)) + mProb)}%`;
      mAtt = mAtt + 1;
      if (mIsPRNG === true) { 
        mProb = mProbArray[mAtt];
        selectId("mSuccess").innerHTML = mProb + "% Success Chance";
        selectId("mFail").innerHTML = (100 - mProb).toFixed(2) + "% Fail Chance";
      };
      selectId("mAttempt").innerHTML = `Attempt ${(mAtt + 1)}`;
      mCombo = 0;
      result.style.color = X0FL0;
      chance.style.color = X0FL0;
      selectId("mFail").style.color = "white";
      selectId("mSuccess").style.color = X0FL0;
  };
};
let qProb = 99;
let qFailed = false;
let qIsHelped = false;
selectId("qHelpB").onclick = function() {
  if (qIsHelped === false) {
  selectId("qHelpB").innerHTML = "Help / Close";
  selectId("qHelpT").innerHTML = `
  First chance is 99% but everytime you suceeded
  The chance decreased to 98%,
  If it suceeded again then to 97%, then again to 96%
  and so on until you fail
  then it goes to the original chance (99%). 
  Succeeding from 99% to 1% is 0.00000000000000000000000000000000000000000093326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864%
  `
  qIsHelped = true;
  } else if (qIsHelped === true) {
  selectId("qHelpB").innerHTML = "Help / Open";
  selectId("qHelpT").innerHTML = "";
  qIsHelped = false
  };
};
selectId("qButton").onclick = function() {
  let result = selectId("qResult");
  let chance = selectId("qChance");
  //If it successes
  if (probability(qProb)) {
      result.innerHTML = "Success!";
      chance.innerHTML = `${qProb}% > ${(Math.floor(Math.random() * qProb))}%`;
      qProb = qProb - 1;
      selectId("qSuccess").innerHTML = qProb + "% Success Chance";
      selectId("qFail").innerHTML = (100 - qProb) + "% Fail Chance";
      if (qFailed === true) {
        selectId("qAttempt").innerHTML = "Suceeded to ??%";
      };
      qFailed = false;
      result.style.color = X0SC0;
      chance.style.color = X0SC0;
      selectId("qSuccess").style.color = X0SC0;
      selectId("qFail").style.color = "white";
  } else { //If it fails
      result.innerHTML = "Failed.";
      chance.innerHTML = `${qProb}% > ${(Math.floor(Math.random() * ((100 - qProb) + 1)) + qProb)}%`
      if (qProb < 99) { selectId("qAttempt").innerHTML = `Suceeded to ${qProb}%` };
      qProb = 99;
      qFailed = true;
      selectId("qSuccess").innerHTML = qProb + "% Success Chance";
      selectId("qFail").innerHTML = (100 - qProb) + "% Fail Chance";
      result.style.color = X0FL0;
      chance.style.color = X0FL0;
      selectId("qSuccess").style.color = "white";
      selectId("qFail").style.color = X0FL0;
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
//This because why not?
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
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