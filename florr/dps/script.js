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
let fasterSkill = 2.5
let reloadSkill = 1
let petalHealth = ID("pethlt").value
let petalDamage = ID("petdmg").value
let petalCooldown = ID("petcld").value
let mobHealth = ID("mobhlt").value
let mobDamage = ID("mobdmg").value

if (ID("faster").value === "Common") {
  fasterSkill = 2.8
} else if (ID("faster").value === "Unusual") {
  fasterSkill = 3.1
} else if (ID("faster").value === "Rare") {
  fasterSkill = 3.4
} else if (ID("faster").value === "Epic") {
  fasterSkill = 3.7
} else if (ID("faster").value === "Legendary") {
  fasterSkill = 4
} else if (ID("faster").value === "Mythic") {
  fasterSkill = 4.3
} else if (ID("faster").value === "Ultra") {
  fasterSkill = 4.6
} else if (ID("faster").value === "Super") {
  fasterSkill = 4.9
}

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
}
//Calculate
ID("runbutton").onclick = function() {
  //Reload Reduction 
  let petrld = ID("petcld").value * reloadSkill
  //Mob Stats
  let mobstats = Math.ceil(ID("mobhlt").value / ID("mobdmg").value)
  //Full rotations to reach mob
  let petrot = Math.ceil((fasterSkill * (petrld + 0.04 * (mobstats - 1))) / (2 * Math.PI))
  //Final
  let total = (mobstats * ID("petdmg").value) / ((2 * petrot * Math.PI) / fasterSkill)
  
  //Submit info to the website
  ID("fastresult").innerHTML = `FASTER SKILL: ${ID("faster").value}`
  ID("rotateresult").innerHTML = `RELOAD SKILL: ${ID("reload").value}`
  ID("petalused").innerHTML = `PETAL USED: ${ID("petname").value}`
  ID("mobused").innerHTML = `MOB ATTACK: ${ID("mobname").value}`
  ID("totaldps").innerHTML = `TOTAL DPS OF ${ID("petname").value} IS ${total}`
}
