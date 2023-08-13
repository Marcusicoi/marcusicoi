// im lazy ;-;
function ID(id) {
  return document.getElementById(id)
}

//Audios
var C0S1 = document.createElement("audio")
if (C0S1.canPlayType("audio/mpeg")) {
  C0S1.setAttribute("src",process.env.C0S1)
}
//Randomize Songs
let Songs = [
C0S1
]

function randomSong() {
  return Songs[Math.floor(Math.random() * Songs.length)]
}


//PLAY!!
ID("button").onclick = function (){
ID("button").style.visibility = "hidden"
randomSong().play()

//Next song loop
for (let i = 0; i < 8172; i++) {
setInterval(
  function() {randomSong().play()}, 
  (32000 + (35000 * i))
)}

}