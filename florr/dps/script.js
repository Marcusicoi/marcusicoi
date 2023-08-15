function ID(id) {
  return document.getElementById(id)
}

//Debug??
let isDebugMode = false

//Rotation Stats
let deffaster = 2.5
let fasters = [2.8, 3.1, 3.4, 3.7, 4, 4.3, 4.6]

//Reload Stats
let reloads = [0.93, 0.86, 0.8, 0.75, 0.69, 0.65, 0.60, 0.55]

//DPS Stats 
let fasterSkill = ID("faster").value
let reloadSkill = ID("reload").value
let petalHealth = ID("pethlt").value
let petalDamage = ID("petdmg").value
let petalCooldown = ID("petcld").value
let mobHealth = ID("mobhlt").value
let mobDamage = ID("mobdmg").value


