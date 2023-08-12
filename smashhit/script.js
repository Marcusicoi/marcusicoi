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

//Next song loop
for (let i = 0; i < 8172; i++) {
setInterval(
  function() {ID(randomSong()).play()}, 
  (32000 + (35000 * i))
)}

}