// im lazy ;-;
function ID(id) {
  return document.getElementById(id)
}

//Randomize Songs
let Songs = [
"C0S1", "C0S2", "C0S3",
"C1S1", "C1S2", "C1S3",
"C2S1", "C2S2", "C2S3", "C2S4",
"C3S1", "C3S2", "C3S3", "C3S4",
"C4S1", "C4S2",
"C5S1",         "C5S3", "C5S4",
"C6S1", "C6S2", "C6S3", "C6S4",
"C7S1", "C7S2", "C7S3",
                "C8S3",
"C9S1", "C9S2",  "C9S3", "C9S3P2",
"C10S1", "C10S2", "C10S3",
"C11S1", "C11S2", "C11S3", "C11S4", "C11S4P2",
"END2", "CRED",
"VSS1", "VSS2", "VSS3", "VSS4", "VSS5",
"ZEN1", "ZEN2"
]

function randomSong() {
  return Songs[Math.floor(Math.random() * Songs.length)]
}

//REVERSED??!
let isReversed = false
window.onload = function() { ID("reverseT").style.visibility = "hidden" }

let revSongs = [
  "Checkpoint0_1.mp3", "Checkpoint0_2.mp3", "Checkpoint0_3.mp3",
  "Checkpoint1_1.mp3", "Checkpoint1_2.mp3", "Checkpoint2_3.mp3",
  "Checkpoint2_1.mp3", "Checkpoint2_2.mp3", "Checkpoint2_3.mp3", "Checkpoint2_4.mp3",
  "Checkpoint3_1.mp3", "Checkpoint3_2.mp3", "Checkpoint3_3.mp3", "Checkpoint3_4.mp3",
  "Checkpoint4_1.mp3", "Checkpoint4_2.mp3",
  "Checkpoint5_1.mp3",                      "Checkpoint5_3.mp3", "Checkpoint5_4.mp3",
  "Checkpoint6_1.mp3", "Checkpoint6_2.mp3", "Checkpoint6_3.mp3", "Checkpoint6_4.mp3",
  "Checkpoint7_1.mp3", "Checkpoint7_2.mp3", "Checkpoint7_3.mp3",
                                            "Checkpoint8_3.mp3",
  "Checkpoint9_1.mp3", "Checkpoint9_2.mp3", "Checkpoint9_3_1.mp3", "Checkpoint9_3_2.mp3",
  "Checkpoint10_1.mp3", "Checkpoint10_2.mp3", "Checkpoint10_3.mp3",
  "Checkpoint11_1.mp3", "Checkpoint11_2.mp3", "Checkpoint11_3.mp3", "Checkpoint11_4_1.mp3", "Checkpoint11_4_2.mp3",
]

function randomReversedSong() {
  return "/smashhit/songs/" + revSongs[Math.floor(Math.random() * revSongs.length)]                          
}

//Reversed Button
ID("revbutton").onclick = function() {
  if (isReversed === false) {
    isReversed = true
  } else if (isReversed === true) {
    isReversed = false
  }
}
//PLAY!!
ID("button").onclick = function() {
ID("button").style.visibility = "hidden"

if (isReversed === false) { 
  ID(randomSong()).play() 
} else if (isReversed === true) {
  var context = new AudioContext(),
  request = new XMLHttpRequest();
  request.open('GET', randomReversedSong(), true);
  request.responseType = 'arraybuffer';
  request.addEventListener('load', function(){
      context.decodeAudioData(request.response, function(buffer){
          var source = context.createBufferSource();
          Array.prototype.reverse.call( buffer.getChannelData(0) );
          Array.prototype.reverse.call( buffer.getChannelData(1) );
          source.buffer = buffer;
      });
  });
}
//Next song loop
let i = 1
if (isReversed === false) {
  setInterval(
    function() {
      ID(randomSong()).play()
      i += 1
    }, 
    ((35000 * i) - 3000))
} else if(isReversed === true) {
  setInterval(
    function() {
}
}