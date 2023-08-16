function ID(id) {
  return document.getElementById(id)
}

//Link
function valuePetals(health, damage, cooldown, name) {
  return (
  ID("pethlt").value = health
  ID("petdmg").value = damage
  ID("petcld").value = cooldown 
  ID("petname").value = name)
}
ID("linkcbasic").onclick = valuePetals(10, 10, 2.5, "Common Basic")
  
//Calculate
ID("runbutton").onclick = function() {
  //Reload Reduction 
  let petrld = ID("petcld").value * ID("reload").value
  //Mob Stats
  let mobstats = Math.ceil(ID("mobhlt").value / ID("mobdmg").value)
  //Full rotations to reach mob
  let petrot = Math.ceil((ID("rotate").value * (petrld + 0.04 * (mobstats - 1))) / (2 * Math.PI))
  //Final
  let total = (mobstats * ID("petdmg").value) / ((2 * petrot * Math.PI) / ID("rotate").value)
  
  //Submit info to the website
  ID("rotateresult").innerHTML = `ROTATION RADIUS: ${ID("rotate").value}`
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: ${ID("reload").value}`
  ID("petalused").innerHTML = `PETAL USED: ${ID("petname").value}`
  ID("mobused").innerHTML = `MOB ATTACK: ${ID("mobname").value}`
  ID("totaldps").innerHTML = `TOTAL DPS OF ${ID("petname").value} IS ${total}`
}