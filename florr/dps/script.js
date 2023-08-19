function ID(id) {
  return document.getElementById(id)
}

function numComma(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
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
]

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
  function rotateResultID(num) {
    ID("rotateresult").innerHTML = `ROTATION RADIUS: <span style="color:#${colorRarities[num]}">${ID("rotate").value} rad/s</span>`
    
    //FROM HITS EACH ROTATION
    ID("petrot1").style.color = `#${colorRarities[num]}`
    ID("petrot4").style.color = `#${colorRarities[num]}`
    
    //FROM TOTAL DPS
    ID("total3").style.color = `#${colorRarities[num]}`
    ID("tdps4").style.color = `#${colorRarities[num]}`
    ID("tdps8").style.color = `#${colorRarities[num]}`
  }
  if (ID("rotate").value == 2.5) { rotateResultID(11) } 
  else if (ID("rotate").value == 2.8) { rotateResultID(0) } 
  else if (ID("rotate").value == 3.1) { rotateResultID(1) }
  else if (ID("rotate").value == 3.4) { rotateResultID(2) }
  else if (ID("rotate").value == 3.7) { rotateResultID(3) } 
  else if (ID("rotate").value == 4) { rotateResultID(4) }
  else if (ID("rotate").value == 4.3) { rotateResultID(5) }
  else if (ID("rotate").value == 4.6) { rotateResultID(6) } 
  else if (ID("rotate").value == 4.9) { rotateResultID(7) }
  else if (ID("rotate").value == 5.2) { rotateResultID(8) }
  else if (ID("rotate").value == 5.5) { rotateResultID(9) }
  else if (ID("rotate").value == 5.8) { rotateResultID(10) }
  
  //RELOAD REDUCTION.
  function reloadResultID(num) {
    ID("reloadresult").innerHTML = `RELOAD REDUCTION: <span style="color:#${colorRarities[num]}">x${ID("reload").value}</span>`
    
    //FROM PETAL COOLDOWN
    ID("relred2").style.color = `#${colorRarities[num]}`
    ID("relred4").style.color = `#${colorRarities[num]}`
    
    //FROM TOTAL DPS
    ID("total4").style.color = `#${colorRarities[num]}`
  }
  if (ID("reload").value == 1) { reloadResultID(11) } 
  else if (ID("reload").value == 0.93) { reloadResultID(0) }
  else if (ID("reload").value == 0.86) { reloadResultID(1) }
  else if (ID("reload").value == 0.8) { reloadResultID(2) }
  else if (ID("reload").value == 0.75) { reloadResultID(3) }
  else if (ID("reload").value == 0.69) { reloadResultID(4) }
  else if (ID("reload").value == 0.64) { reloadResultID(5) }
  else if (ID("reload").value == 0.6) { reloadResultID(6) }
  else if (ID("reload").value == 0.54) { reloadResultID(7) }
  else if (ID("reload").value == 0.49) { reloadResultID(8) }
  else if (ID("reload").value == 0.45) { reloadResultID(9) }
  else if (ID("reload").value == 0.39) { reloadResultID(10) }
 
  
  //PETAL USED
  function petalUsedID(num) {
    ID("petalused").innerHTML = `PETAL USED: <span style="color:#${colorRarities[num]}">${ID("petnum").value} ${ID("petname").value}</span>`
    
    //FROM PETAL COOLDOWN
    ID("relred1").style.color = `#${colorRarities[num]}`
    ID("relred3").style.color = `#${colorRarities[num]}`
    
    //FROM TOTAL DPS
    ID("total1").style.color = `#${colorRarities[num]}`
    ID("tdps2").style.color = `#${colorRarities[num]}`
    ID("tdps6").style.color = `#${colorRarities[num]}`
  }
  for (let i = 0; i < colorRarityNames.length; i++) {
    if (~(ID("petname").value).indexOf(colorRarityNames[i])) {
      if (colorRarityNames[i] == colorRarityNames[i]) { petalUsedID(i) } 
    }
  } 
  
  //MOB USED
  function mobUsedID(num) {
    ID("mobused").innerHTML = `MOB ATTACK: <span style="color:#${colorRarities[num]}">${ID("mobname").value}</span>`
    
    //FROM MOB STATS
    ID("mobstat1").style.color = `#${colorRarities[num]}`
    ID("mobstat2").style.color = `#${colorRarities[num]}`
    ID("mobstat3").style.color = `#${colorRarities[num]}`
    ID("mobstat4").style.color = `#${colorRarities[num]}`
    
    //FROM TOTAL DPS
    ID("total2").style.color = `#${colorRarities[num]}`
  }
  for (let i = 0; i < colorRarityNames.length; i++) {
    if (~(ID("mobname").value).indexOf(colorRarityNames[i])) {
      if (colorRarityNames[i] == colorRarityNames[i]) { mobUsedID(i) }
    }
  }
  //PETAL COOLDOWN
  function reloadReductID(num) {
    ID("reloadreduct").innerHTML = `PETAL COOLDOWN: <span style="color:#${colorRarities[num]}">${petrld}s</span>`
    ID("relred1").innerHTML = ID("petcld").value + "s"
    ID("relred2").innerHTML = "x" + ID("reload").value
    
    //FROM HITS EACH ROTATION
    ID("petrot2").style.color = `#${colorRarities[num]}`
    ID("petrot5").style.color = `#${colorRarities[num]}`
  }
  if (petrld >= 10) { reloadReductID(0) } 
  else if (petrld >= 7.5) { reloadReductID(1) } 
  else if (petrld >= 5) { reloadReductID(2) } 
  else if (petrld >= 3.75) { reloadReductID(3) }
  else if (petrld >= 2.5) { reloadReductID(4) }
  else if (petrld >= 2) { reloadReductID(5 ) }
  else if (petrld >= 1.5) { reloadReductID(6) }
  else if (petrld >= 1) { reloadReductID(7) }
  else if (petrld >= 0.5) { reloadReductID(8) }
  else if (petrld >= 0.25) { reloadReductID(9) }
  else if (petrld < 0.25) { reloadReductID(10) }
 
  //MOB STATS
  function mobStatsID(num) {
    ID("mobstats").innerHTML = `MOB STATS: <span style="color:#${colorRarities[num]}">${numComma(mobstats)}</span>`
    ID("mobstat1").innerHTML = numComma(ID("mobhlt").value)
    ID("mobstat2").innerHTML = numComma(ID("mobdmg").value)
    
    //FROM HITS EACH ROTATION
    ID("petrot3").style.color = `#${colorRarities[num]}`
    ID("petrot6").style.color = `#${colorRarities[num]}`
    
    //FROM TORAL DPS
    ID("tdps1").style.color = `#${colorRarities[num]}`
    ID("tdps5").style.color = `#${colorRarities[num]}`
  }
  if (mobstats < 250) { mobStatsID(0) }
  else if (mobstats <= 500) { mobStatsID(1) }
  else if (mobstats <= 750) { mobStatsID(2) }
  else if (mobstats <= 1000) { mobStatsID(3) }
  else if (mobstats <= 5000) { mobStatsID(4) }
  else if (mobstats <= 10000) { mobStatsID(5) }
  else if (mobstats <= 15000) { mobStatsID(6) }
  else if (mobstats <= 20000) { mobStatsID(7) }
  else if (mobstats <= 27500) { mobStatsID(8) }
  else if (mobstats <= 35000) { mobStatsID(9) }
  else if (mobstats > 35000) { mobStatsID(10) }
  
  //HITS EACH ROTATION
  function hitsRotationID(num) {
    ID("petalrotate").innerHTML = `HITS EACH ROTATION: <span style="color:#${colorRarities[num]}">${numComma(petrot)}</span>`
    ID("petrot1").innerHTML = ID("rotate").value + " rad/s"
    ID("petrot2").innerHTML = petrld + "s"
    ID("petrot3").innerHTML = numComma(mobstats)
    
    //FROM TOTAL DPS
    ID("tdps3").style.color = `#${colorRarities[num]}`
    ID("tdps7").style.color = `#${colorRarities[num]}`
  }
  if (petrot < 25) { hitsRotationID(0) }
  else if (petrot <= 75) { hitsRotationID(1) }
  else if (petrot <= 150) { hitsRotationID(2) }
  else if (petrot <= 225) { hitsRotationID(3) }
  else if (petrot <= 350) { hitsRotationID(4) }
  else if (petrot <= 425) { hitsRotationID(5) }
  else if (petrot <= 500) { hitsRotationID(6) }
  else if (petrot <= 575) { hitsRotationID(7) }
  else if (petrot <= 625) { hitsRotationID(8) }
  else if (petrot <= 750) { hitsRotationID(9) }
  else if (petrot > 175) { hitsRotationID(10) }
  
  //TOTAL DPS
  //
  ID("total1").innerHTML = ID("petnum").value + " " + ID("petname").value
  ID("total2").innerHTML = ID("mobname").value
  ID("total3").innerHTML = ID("rotate").value + " rad/s"
  ID("total4").innerHTML = "x" + ID("reload").value + " -%cd"
  ID("total5").innerHTML = numComma(total)
  ID("total5").style.color = "red"
    
  ID("tdps1").innerHTML = numComma(mobstats)
  ID("tdps2").innerHTML = numComma(ID("petdmg").value)
  ID("tdps3").innerHTML = numComma(petrot)
  ID("tdps4").innerHTML = numComma(ID("rotate").value)
  
  //Show / Hide Formulas
  let isFormula = false, classFormula = document.getElementsByClassName("formula")
  ID("formbutton").onclick = function() {
    if (isFormula === false) {
      isFormula = true
      ID("formbutton").innerHTML = "Show Formula"
      for (let i = 0; i < classFormula.length; i++) {
        classFormula[i].style.visibility = "hidden"
      }
    } else if (isFormula === true) {
      isFormula = false
      ID("formbutton").innerHTML = "Hide Formula"
      for (let i = 0; i < classFormula.length; i++) {
        classFormula[i].style.visibility = "visible"
      }
    }
  }
}
//Link Style
let link = document.querySelectorAll(".link")
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
      randomColor = `hsl(${h}deg, ${random2(100,50)}%, ${random2(90,25)}%)`;
    
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

linkPetals("linklwing", 1620, 2.5, "Legendary Wings")
linkPetals("linkmwing", 4860, 2.5, "Mythic Wings")
linkPetals("linkulwing", 14580, 2.5, "Ultra Wings")
linkPetals("linkswing", 43740, 2.5, "Super Wings")

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