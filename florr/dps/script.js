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

//Rotation Stats
let fasters = [2.8, 3.1, 3.4, 3.7, 4, 4.3, 4.6, 4.9]

//Reload Stats
let reloads = [0.93, 0.86, 0.8, 0.75, 0.69, 0.65, 0.60, 0.54]

//DPS Stats 
let fasterSkill = 2.5
let reloadSkill = 1
let petalHealth = ID("pethlt").value
let petalDamage = ID("petdmg").value
let petalCooldown = ID("petcld").value
let mobHealth = ID("mobhlt").value
let mobDamage = ID("mobdmg").value

//Rotation IF
if (ID("faster").value === "Common") {
  fasterSkill = fasters[0]
}
if (ID("faster").value === "Unusual") {
  fasterSkill = fasters[1]
}
if (ID("faster").value === "Rare") {
  fasterSkill = fasters[2]
}
if (ID("faster").value === "Epic") {
  fasterSkill = fasters[3]
}
if (ID("faster").value === "Legendary") {
  fasterSkill = fasters[4]
}
if (ID("faster").value === "Mythic") {
  fasterSkill = fasters[5]
}
if (ID("faster").value === "Ultra") {
  fasterSkill = fasters[6]
}
if (ID("faster").value === "Super") {
  fasterSkill = fasters[7]
}
//Reload IF
if (ID("reload").value === "Common") {
  reloadSkill = reloads[0]
}
if (ID("reload").value === "Unusual") {
  reloadSkill = reloads[1]
}
if (ID("reload").value === "Rare") {
  reloadSkill = reloads[2]
}
if (ID("reload").value === "Epic") {
  reloadSkill = reloads[3]
}
if (ID("reload").value === "Legendary") {
  reloadSkill = reloads[4]
}
if (ID("reload").value === "Mythic") {
  reloadSkill = reloads[5]
}
if (ID("reload").value === "Ultra") {
  reloadSkill = reloads[6]
}
if (ID("reload").value === "Super") {
  reloadSkill = reloads[7]
}
//Calculate
ID("runbutton").onclick = function() {/*
  //Reload Reduction 
  let petrld = petalCooldown * reloadSkill
  //Mob N/D
  let mobstats = Math.ceil(mobHealth / mobDamage)
  //Full rotations to reach mob
  let petrot = Math.ceil((fasterSkill(petrld + 0.04(mobstats - 1)))/2(Math.PI))
  //Final
  let total = (mobstats * petalDamage) / (2(petrot)(Math.PI) / fasterSkill)
  */
  //Submit info to the website
  ID("fastresult").innerHTML = "FASTER SKILL: j" //+ ID("faster").value
  ID("rotateresult").innerHTML = "RELOAD SKILL: j" //+ ID("reload").value
}
