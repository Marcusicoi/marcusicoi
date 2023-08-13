// im lazy ;-;
function ID(id) {
  return document.getElementById(id)
}

//

function randomSong() {
  return Songs[Math.floor(Math.random() * Songs.length)]
}

//PLAY!!
ID("button").onclick = function (){
ID("button").style.visibility = "hidden"
ID(randomSong()).play()

//Next song loop
let i = 1
setInterval(
  function() {
    ID(randomSong()).play()
    i += 1
  }, 
  ((35000 * i) - 3000))
}