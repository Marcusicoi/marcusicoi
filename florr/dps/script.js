function ID(id) {
  return document.getElementById(id)
}

//Debug??
let isDebugMode = false
ID("debugbutton").onclick = function() {
  if (isDebugMode === false) {
    isDebugMode = true
    ID("debugbutton").innerHTML = "Disable Debug"
  } else {
    isDebugMode = false
    ID("debugbutton").innerHTML = "Enable Debug"
  }
}

//DPS Stats 
var rotationSkill, reloadSkill

//Rotation
if (ID("rotate").value === "Common") {
  rotationSkill = 2.8
} else if (ID("rotate").value === "Unusual") {
  rotationSkill = 3.1
} else if (ID("rotate").value === "Rare") {
  rotationSkill = 3.4
} else if (ID("rotate").value === "Epic") {
  rotationSkill = 3.7
} else if (ID("rotate").value === "Legendary") {
  rotationSkill = 4
} else if (ID("rotate").value === "Mythic") {
  rotationSkill = 4.3
} else if (ID("rotate").value === "Ultra") {
  rotationSkill = 4.6
} else if (ID("rotate").value === "Super") {
  rotationSkill = 4.9
} else { rotationSkill = 2.5 }
//Reload
if (ID("reload").value === "Common") {
  reloadSkill = 0.93
} else if (ID("reload").value === "Unusual") {
  reloadSkill = 0.86
} else if (ID("reload").value === "Rare") {
  reloadSkill = 0.8
} else if (ID("reload").value === "Epic") {
  reloadSkill = 0.75
} else if (ID("reload").value === "Legendary") {
  reloadSkill = 0.69
} else if (ID("reload").value === "Mythic") {
  reloadSkill = 0.65
} else if (ID("reload").value === "Ultra") {
  reloadSkill = 0.6
} else if (ID("reload").value === "Super") {
  reloadSkill = 0.54
} else { reloadSkill = 1 }

//Calculate
ID("runbutton").onclick = function() {
  //Reload Reduction 
  let petrld = ID("petcld").value * reloadSkill
  //Mob Stats
  let mobstats = Math.ceil(ID("mobhlt").value / ID("mobdmg").value)
  //Full rotations to reach mob
  let petrot = Math.ceil((rotationSkill * (petrld + 0.04 * (mobstats - 1))) / (2 * Math.PI))
  //Final
  let total = (mobstats * ID("petdmg").value) / ((2 * petrot * Math.PI) / rotationSkill)
  
  //Submit info to the website
  ID("rotateresult").innerHTML = `ROTATION SKILL: ${ID("rotate").value} ${rotationSkill}`
  ID("reloadresult").innerHTML = `RELOAD SKILL: ${ID("reload").value}`
  ID("petalused").innerHTML = `PETAL USED: ${ID("petname").value}`
  ID("mobused").innerHTML = `MOB ATTACK: ${ID("mobname").value}`
  ID("totaldps").innerHTML = `TOTAL DPS OF ${ID("petname").value} IS ${total}`
}
