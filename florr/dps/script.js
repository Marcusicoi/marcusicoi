function ID(id) {
  return document.getElementById(id)
}

window.onload = function() {
  ID("results").style.visibility = "hidden"
}

//Color rarities
let colorRarities = [
  "72d964", "ffe65d", "484eda", "861fde",
  "dc201f", "1fdbdd", "ff2b75", "27fea1",
  "ffc10f", "010eb1", "f4bdf2"
], colorRarityNames = [
  "Common", "Unusual", "Rare", "Epic", 
  "Legendary", "Mythic", "Ultra", "Super",
  "Celestial", "Chaos", "Effulgent"
],
    
//Link Style
link = document.querySelectorAll(".link")
for (let i = 0; i < link.length; i++) {
  let random = (n) => {
    return Math.floor(Math.random() * n)
  },
  random2 = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
  },
  linkColor = () => {
  let h = random(360),
      randomColor = `hsl(${h}deg, ${random2(100,50)}%, ${random2(90,50)}%)`;
    
  link[i].style.backgroundColor = randomColor;
  link[i].style.color = "white";
  }
  linkColor()
}

//Link Petals
function linkPetals(id, damage, cooldown, name) {
  return ID(id).onclick = function() {
  ID("petdmg").value = damage
  ID("petcld").value = cooldown
  ID("petname").value = name
  }
}
linkPetals("linkcbasic", 10, 2.5, "Common Basic")
linkPetals("linkspinger", (43740 * 5), 10, "Super Stinger")
linkPetals("linkmlight", (631.8 * 5), 0.8, "Mythic Light")
linkPetals("linkullight", (1895.4 * 5), 0.8, "Ultra Light")
linkPetals("linkslight", (5686.2 * 5), 0.8, "Super Light")
//Link Mobs
function linkMobs(id, health, damage, name) {
  return ID(id).onclick = function() {
  ID("mobhlt").value = health
  ID("mobdmg").value = damage
  ID("mobname").value = name
  }
}
linkMobs("linkcbaby", 25, 10, "Common Baby Ant")
linkMobs("linksover", 440000000, 21870, "Super Overmind")
//Rotation Buttons.
ID("nrotate").onclick = function() { ID("rotate").value = 2.5 }
ID("crotate").onclick = function() { ID("rotate").value = 2.8 }
ID("urotate").onclick = function() { ID("rotate").value = 3.1 }
ID("rrotate").onclick = function() { ID("rotate").value = 3.4 }
ID("erotate").onclick = function() { ID("rotate").value = 3.7 }
ID("lrotate").onclick = function() { ID("rotate").value = 4 }
ID("mrotate").onclick = function() { ID("rotate").value = 4.3 }
ID("ulrotate").onclick = function() { ID("rotate").value = 4.6 }
ID("srotate").onclick = function() { ID("rotate").value = 4.9 }
ID("cerotate").onclick = function() { ID("rotate").value = 5.2 }
ID("chrotate").onclick = function() { ID("rotate").value = 5.5 }
ID("efrotate").onclick = function() { ID("rotate").value = 5.8 }

//Reload Buttons.
ID("nreload").onclick = function() { ID("reload").value = 1 }
ID("creload").onclick = function() { ID("reload").value = 0.93 }
ID("ureload").onclick = function() { ID("reload").value = 0.86 }
ID("rreload").onclick = function() { ID("reload").value = 0.8 }
ID("ereload").onclick = function() { ID("reload").value = 0.75 }
ID("lreload").onclick = function() { ID("reload").value = 0.69 }
ID("mreload").onclick = function() { ID("reload").value = 0.64 }
ID("ulreload").onclick = function() { ID("reload").value = 0.6 }
ID("sreload").onclick = function() { ID("reload").value = 0.54 }
ID("cereload").onclick = function() { ID("reload").value = 0.49 }
ID("chreload").onclick = function() { ID("reload").value = 0.45 }
ID("efreload").onclick = function() { ID("reload").value = 0.39 }

//Calculate
ID("runbutton").onclick = function() {
  //Show Results!
  ID("results").style.visibility = "visible"
  //Reload Reduction 
  let petrld = ID("petcld").value * ID("reload").value
  //Mob Stats
  let mobstats = Math.ceil(ID("mobhlt").value / ID("mobdmg").value)
  //Full rotations to reach mob
  let petrot = Math.ceil( (ID("rotate").value * (petrld + 0.04 * (mobstats - 1) ) ) / (2 * Math.PI))
  //Final
  let total = (mobstats * (ID("petdmg").value * ID("petnum").value) ) / ( (2 * petrot * Math.PI) / ID("rotate").value)
  
  //Submit info to the website
  
  //ROTATION RADIUS.
  if (ID("rotate").value == 2.5) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: ${ID("rotate").value} rad/s`
  } else if (ID("rotate").value == 2.8) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[0]}">${ID("rotate").value} rad/s</span>`
  } else if (ID("rotate").value == 3.1) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[1]}">${ID("rotate").value} rad/s</span>`
  } else if (ID("rotate").value == 3.4) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[2]}">${ID("rotate").value} rad/s</span>`
  } else if (ID("rotate").value == 3.7) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[3]}">${ID("rotate").value} rad/s</span>`
  } else if (ID("rotate").value == 4) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[4]}">${ID("rotate").value} rad/s</span>`
  } else if (ID("rotate").value == 4.3) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[5]}">${ID("rotate").value} rad/s</span>`
  } else if (ID("rotate").value == 4.6) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[6]}">${ID("rotate").value} rad/s</span>`
  } else if (ID("rotate").value == 4.9) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[7]}">${ID("rotate").value} rad/s</span>`
  } else if (ID("rotate").value == 5.2) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[8]}">${ID("rotate").value} rad/s</span>`
  } else if (ID("rotate").value == 5.5) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[9]}">${ID("rotate").value} rad/s</span>`
  } else if (ID("rotate").value == 5.8) {
  ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[10]}">${ID("rotate").value} rad/s</span>`
  }
  
  //RELOAD REDUCTION.
  if (ID("reload").value == 1) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: x${ID("reload").value}`
  } else if (ID("reload").value == 0.93) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[0]}">x${ID("reload").value}</span>`
  } else if (ID("reload").value == 0.86) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[1]}">x${ID("reload").value}</span>`
  } else if (ID("reload").value == 0.8) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[2]}">x${ID("reload").value}</span>`
  } else if (ID("reload").value == 0.75) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[3]}">x${ID("reload").value}</span>`
  } else if (ID("reload").value == 0.69) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[4]}">x${ID("reload").value}</span>`
  } else if (ID("reload").value == 0.64) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[5]}">x${ID("reload").value}</span>`
  } else if (ID("reload").value == 0.6) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[6]}">x${ID("reload").value}</span>`
  } else if (ID("reload").value == 0.54) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[7]}">x${ID("reload").value}</span>`
  } else if (ID("reload").value == 0.49) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[8]}">x${ID("reload").value}</span>`
  } else if (ID("reload").value == 0.45) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[9]}">x${ID("reload").value}</span>`
  } else if (ID("reload").value == 0.39) {
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[10]}">x${ID("reload").value}</span>`
  }
  
  //PETAL USED
  for (let i = 0; i < colorRarityNames.length; i++) {
    if (~(ID("petname").value).indexOf(colorRarityNames[i])) {
      if (colorRarityNames[i] == "Common") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[0]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
      if (colorRarityNames[i] == "Unusual") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[1]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
      if (colorRarityNames[i] == "Rare") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[2]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
      if (colorRarityNames[i] == "Epic") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[3]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
      if (colorRarityNames[i] == "Legendary") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[4]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
      if (colorRarityNames[i] == "Mythic") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[5]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
      if (colorRarityNames[i] == "Ultra") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[6]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
      if (colorRarityNames[i] == "Super") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[7]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
      if (colorRarityNames[i] == "Celestial") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[8]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
      if (colorRarityNames[i] == "Chaos") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[9]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
      if (colorRarityNames[i] == "Effulgent") {
      ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[10]}">${ID("petnum").value} ${ID("petname").value}</span>`
      }
    }
  } 
  
  //MOB USED
  for (let i = 0; i < colorRarityNames.length; i++) {
    if (~(ID("mobname").value).indexOf(colorRarityNames[i])) {
      if (colorRarityNames[i] == "Common") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[0]}">${ID("mobname").value}</span>`
      }
      if (colorRarityNames[i] == "Unusual") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[1]}"> ${ID("mobname").value}</span>`
      }
      if (colorRarityNames[i] == "Rare") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[2]}"> ${ID("mobname").value}</span>`
      }
      if (colorRarityNames[i] == "Epic") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[3]}"> ${ID("mobname").value}</span>`
      }
      if (colorRarityNames[i] == "Legendary") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[4]}"> ${ID("mobname").value}</span>`
      }
      if (colorRarityNames[i] == "Mythic") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[5]}"> ${ID("mobname").value}</span>`
      }
      if (colorRarityNames[i] == "Ultra") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[6]}"> ${ID("mobname").value}</span>`
      }
      if (colorRarityNames[i] == "Super") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[7]}"> ${ID("mobname").value}</span>`
      }
      if (colorRarityNames[i] == "Celestial") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[8]}"> ${ID("mobname").value}</span>`
      }
      if (colorRarityNames[i] == "Chaos") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[9]}"> ${ID("mobname").value}</span>`
      }
      if (colorRarityNames[i] == "Effulgent") {
      ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[10]}"> ${ID("mobname").value}</span>`
      }
    }
  }
  //PETAL COOLDOWN
  if (petrld >= 10) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[0]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  } else if (petrld >= 7.5) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[1]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  } else if (petrld >= 5) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[2]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  } else if (petrld >= 3.75) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[3]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  } else if (petrld >= 2.5) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[4]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  } else if (petrld >= 2) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[5]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  } else if (petrld >= 1.5) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[6]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  } else if (petrld >= 1) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[7]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  } else if (petrld >= 0.5) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[8]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  } else if (petrld >= 0.25) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[9]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  } else if (petrld < 0.25) {
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: <span style="color:#${colorRarities[10]}">${petrld}s</span>
  <h6>(${ID("petcld").value}s * x${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  }
  
  //MOB STATS
  ID("mobstats").innerHTML = `
  MOB STATS: ${mobstats} 
  <h6>ceiling(${ID("mobhlt").value} / ${ID("mobdmg").value})</h6>
  <h6>ceiling(MobHealth / MobDamage)</h6>`
  
  ID("petalrotate").innerHTML = `
  HITS EACH ROTATION: ${petrot} 
  <h6>ceiling((${ID("rotate").value} * (${petrld} + 0.04 * (${mobstats} - 1))) / (2 * π))</h6>
  <h6>ceiling((RotationSkill * ((PetalCooldown * ReloadReduct) + 0.04 * ((MobHealth / MobDamage) - 1))) / (2 * π))</h6>`
  
  ID("totaldps").innerHTML = `
  TOTAL DPS OF ${ID("petnum").value} ${ID("petname").value}(s) FROM ${ID("mobname").value} WITH ${ID("rotate").value} rad/s AND x${ID("reload").value} RELOAD REDUCTION IS ${total} 
  <h6>(${mobstats} * ${ID("petdmg").value} / ((2 * ${petrot} * π) / ${ID("rotate").value}))</h6>
  <h6>((MobHealth / MobDamage) * PetalDamage) / ((2 * HitsEachRotation * π) / RotationSkill</h6>`
}