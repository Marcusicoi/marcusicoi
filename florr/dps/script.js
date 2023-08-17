function ID(id) {
  return document.getElementById(id)
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
      randomColor = `hsl(${h}deg, ${random2(100,50)}%, ${random(75,50)}%)`;
    
  link[i].style.backgroundColor = randomColor;
  link[i].style.color = "white";
  }
  linkColor()
}
//Link Petals
ID("linkcbasic").onclick = function() {
  ID("pethlt").value = 10
  ID("petdmg").value = 10
  ID("petcld").value = 2.5
  ID("petname").value = "Common Basic"
}
//Link Mobs
ID("linkcbaby").onclick = function() {
  ID("mobhlt").value = 25
  ID("mobdmg").value = 10
  ID("mobname").value = "Common Baby Ant"
}
ID("linksover").onclick = function() {
  ID("mobhlt").value = 440000000
  ID("mobdmg").value = 21870
  ID("mobname").value = "Super Termite Overmind"
}

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
  //Reload Reduction 
  let petrld = ID("petcld").value * ID("reload").value
  //Mob Stats
  let mobstats = Math.ceil(ID("mobhlt").value / ID("mobdmg").value)
  //Full rotations to reach mob
  let petrot = Math.ceil( (ID("rotate").value * (petrld + 0.04 * (mobstats - 1) ) ) / (2 * Math.PI))
  //Final
  let total = (mobstats * ID("petdmg").value) / ( (2 * petrot * Math.PI) / ID("rotate").value)
  
  //Submit info to the website
  ID("rotateresult").innerHTML = `ROTATION RADIUS: ${ID("rotate").value}`
  ID("reloadresult").innerHTML = `RELOAD REDUCTION: ${ID("reload").value}`
  ID("petalused").innerHTML = `PETAL USED: ${ID("petname").value}`
  ID("mobused").innerHTML = `MOB ATTACK: ${ID("mobname").value}`
  
  ID("reloadreduct").innerHTML = `
  PETAL COOLDOWN: ${petrld} 
  <h6>(${ID("petcld").value} * ${ID("reload").value})</h6>
  <h6>(PetalCooldown * ReloadReduct)</h6>`
  
  ID("mobstats").innerHTML = `
  MOB STATS: ${mobstats} 
  <h6>ceiling(${ID("mobhlt").value} / ${ID("mobdmg").value})</h6>
  <h6>ceiling(MobHealth / MobDamage)</h6>`
  
  ID("petalrotate").innerHTML = `
  HITS EACH ROTATION: ${petrot} 
  <h6>ceiling((${ID("rotate").value} * (${petrld} + 0.04 * (${mobstats} - 1))) / (2 * π))</h6>
  <h6>ceiling((RotationSkill * ((PetalCooldown * ReloadReduct) + 0.04 * ((MobHealth / MobDamage) - 1))) / (2 * π))</h6>`
  
  ID("totaldps").innerHTML = `
  TOTAL DPS OF ${ID("petname").value} FROM ${ID("mobname").value} IS ${total} 
  <h6>(${mobstats} * ${ID("petdmg").value} / ((2 * ${petrot} * π) / ${ID("rotate").value}))</h6>
  <h6>((MobHealth / MobDamage) * PetalDamage) / ((2 * HitsEachRotation * π) / RotationSkill</h6>`
}