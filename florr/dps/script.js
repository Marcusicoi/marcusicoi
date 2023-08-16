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
switch(ID("faster").value) {
    case "Common":
    fasterSkill = fasters[0]
    break;
    case "Unusual":
    fasterSkill = fasters[1]
    break;
    case "Rare":
    fasterSkill = fasters[2]
    break;
    case "Epic":
    fasterSkill = fasters[3]
    break;
    case "Legendary":
    fasterSkill = fasters[4]
    break;
    case "Mythic":
    fasterSkill = fasters[5]
    break;
    case "Ultra":
    fasterSkill = fasters[6]
    break;                      
    case "Super":
    fasterSkill = fasters[7]
    break;
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
