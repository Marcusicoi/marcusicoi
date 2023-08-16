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
  
  ID("reloadreduct").innerHTML = `PETAL COOLDOWN: ${petrld} (${ID("petcld").value} * ${ID("reload").value})`
  ID("mobstats").innerHTML = `MOB STATS: ${mobstats} (ceiling(${ID("mobhlt").value} / ${ID("mobdmg").value}))`
  ID("petalrotate").innerHTML = `HITS EACH ROTATION: ${petrot} (ceiling(${ID("rotate").value} * ( 
  ID("totaldps").innerHTML = `TOTAL DPS OF ${ID("petname").value} IS ${total}`
}