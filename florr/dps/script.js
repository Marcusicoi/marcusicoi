function ID(id) {
  return document.getElementById(id)
}
//LINKS
let link = document.querySelectorAll(".link")
let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
 r = randomBetween(0, 255),
 g = randomBetween(0, 255),
 b = randomBetween(0, 255),
 rgb = `rgb(${r},${g},${b})`;
//Link Background
function linkBackground() {
 return rgb
}
for (let i = 0; i < link.length; i++) {
  link[i].style.background = linkBackground()
}
//Link Text color

//Link Petals
ID("linkcbasic").onclick = function() {
  ID("pethlt").value = 10
  ID("petdmg").value = 10
  ID("petcld").value = 2.5
  ID("petname").value = "Common Basic"
}  

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