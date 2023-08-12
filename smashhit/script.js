// im lazy ;-;
function ID(id) {
  return document.getElementById(id)
}

let Songs = [
"Versus1", "Versus2"
]

function randomSong() {
  return Songs[Math.floor(Math.random() * Songs.length)]
}

//PLAY!!
ID("button").onclick = function (){
ID("button").style.visibility = "hidden"
ID(randomSong()).play()
  
//Seconds to play
let seconds = 0

function incSeconds() { 
  seconds += 1 
  ID("secdisp").innerText = seconds + " Seconds"
}
  
let secInterval = setInterval(incSeconds, 1000)

if (seconds === 0) {
  secInterval
} 
  
if (seconds === 5) {
  seconds = 0
  clearInterval(secInterval)
}

}