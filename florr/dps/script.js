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
  let fasterSkill = fasters[0]
}
if (ID("faster").value === "Unusual") {
  let fasterSkill = fasters[1]
}
if (ID("faster").value === "Rare") {
  let fasterSkill = fasters[2]
}
if (ID("faster").value === "Epic") {
  let fasterSkill = fasters[3]
}
if (ID("faster").value === "Legendary") {
  let fasterSkill = fasters[4]
}
if (ID("faster").value === "Mythic") {
  let fasterSkill = fasters[5]
}
if (ID("faster").value === "Ultra") {
  let fasterSkill = fasters[6]
}
if (ID("faster").value === "Super") {
  let fasterSkill = fasters[7]
}
//Reload IF
if (ID("reload").value === "Common") {
  let reloadSkill = reloads[0]
}
if (ID("reload").value === "Unusual") {
  let reloadSkill = reloads[1]
}
if (ID("reload").value === "Rare") {
  let reloadSkill = reloads[2]
}
if (ID("reload").value === "Epic") {
  let reloadSkill = reloads[3]
}
if (ID("reload").value === "Legendary") {
  let reloadSkill = reloads[4]
}
if (ID("reload").value === "Mythic") {
  let reloadSkill = reloads[5]
}
if (ID("reload").value === "Ultra") {
  let reloadSkill = reloads[6]
}
if (ID("reload").value === "Super") {
  let reloadSkill = reloads[7]
}
//Calculate
ID("button").onclick = function() {
  //Reload Reduction 
  let petrld = petalCooldown * reloadSkill
  //Mob N/D
  let mobstats = Math.ceil(mobHealth / mobDamage)
  //Full rotations to reach mob
  let petrot = Math.ceil((fasterSkill(petrld + 0.04(mobstats - 1)))/2(Math.PI))
  //Final
  let total = (mobstats * petalDamage) / (2(petrot)(Math.PI) / fasterSkill)
  
  //Submit info to the website
  ID("fastresult").innerHTML = "FASTER SKILL: " + ID("faster").value
  ID("
}
