// im lazy ;-;
function ID(id) {
  return document.getElementById(id)
}

//Body Background
function hex() {
  let char = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
  function x() {
    return char[Math.floor(Math.random() * char.length)]
  }
  return "#" + x() + x() + x() + x() + x() + x()
}
function BG() {
  let txt = (x) => {
    return `linear-gradient(${x})`
  }
  function hexF() {
    let i = Math.floor(Math.random() * 5) + 1
    let deg = () => {
      return Math.floor(Math.random() * 360) + "deg"
    }, to = () => {
      let dir = ["bottom", "left", "right", "top left", "top right", "bottom left", "bottom right"]
      return "to " + dir[Math.floor(Math.random() * dir.length)]
    }
    switch (i) {
      case 1: return deg(); break
      case 2: return to(); break
      default: return "to top"; break;
    }
  }
  function hexN() {
    let ia = Math.floor(Math.random() * (4 - 2 + 1) + 2),
        ip = Math.floor(Math.random() * 100) + 1    
    function ranp(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1) + min) + "%"
    }    
    let p1 = () => { return ranp(0, 25) },
        p2 = () => { return ranp(25, 50) },
        p3 = () => { return ranp(50, 75) },
        p4 = () => { return ranp(75, 100) }    
    if (ip < (100 / 3)) {
      switch (ia) {
        case 2: return `${hex()} ${p1()}, ${hex()} ${p2()}`; break
        case 3: return `${hex()} ${p1()}, ${hex()} ${p2()}, ${hex()} ${p3()}`; break
        case 4: return `${hex()} ${p1()}, ${hex()} ${p2()}, ${hex()} ${p3()}, ${hex()} ${p4()}`; break
      }
    } else {
      switch (ia) {
        case 2: return `${hex()}, ${hex()}`; break
        case 3: return `${hex()}, ${hex()}, ${hex()}`; break
        case 4: return `${hex()}, ${hex()}, ${hex()}, ${hex()}`; break
      }
    }    
  }
  
  //BG text
  let color = txt(`${hexF()}, ${hexN()}`)
  ID("bgtxt").innerHTML = color
  return color
}
document.body.style.height = "100vh"
document.body.style.background = BG()
document.body.style["background-attachment"] = "fixed"

ID("bgbg").
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