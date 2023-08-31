function ID(x) {
  return document.getElementById(x)
}

const changeBG = (x) => {
  return document.body.style.background = x
}

const onclick = (id, x) => {
  return ID(id).onclick = x
}

function hex() {
  let char = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
  function ran() {
    return char[Math.floor(Math.random() * char.length)]
  }
  let i = "#" + ran() + ran() + ran() + ran() + ran() + ran()
  ID("cresult").innerHTML = i
  return i
}

onclick("button", function() { changeBG(hex())})