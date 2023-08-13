// im lazy ;-;
function ID(id) {
  return document.getElementById(id)
}

//Randomize Songs
let Songs = [
"C0S1", "C0S2", "C0S3",
"C1S1", "C1S2", "C1S3",
"C2S1", "C2S2", "C3S2", "C2S4"
]

function randomSong() {
  return Songs[Math.floor(Math.random() * Songs.length)]
}


//PLAY!!
ID("button").onclick = function (){
ID("button").style.visibility = "hidden"
ID(randomSong()).play()

//Next song loop
for (let i = 0; i < 8172; i++) {
setInterval(
  function() {ID(randomSong()).play()}, 
  (32000 + (35000 * i))
)}

}