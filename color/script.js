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
  function rgb(x) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  function cmyk(x) {
    let computedC = 0,
        computedM = 0,
        computedY = 0,
        computedK = 0
    hex = (hex.charAt(0)=="#") ? hex.substring(1,7) : hex
    let r = parseInt(hex.substring(0,2),16),
        g = parseInt(hex.substring(2,4),16),
        b = parseInt(hex.substring(4,6),16)

 /
 if (r==0 && g==0 && b==0) {
  computedK = 1;
  return [0,0,0,1];
 }

 computedC = 1 - (r/255);
 computedM = 1 - (g/255);
 computedY = 1 - (b/255);

 var minCMY = Math.min(computedC,Math.min(computedM,computedY));

 computedC = (computedC - minCMY) / (1 - minCMY) ;
 computedM = (computedM - minCMY) / (1 - minCMY) ;
 computedY = (computedY - minCMY) / (1 - minCMY) ;
 computedK = minCMY;

 return [computedC,computedM,computedY,computedK];
}
  let i = "#" + ran() + ran() + ran() + ran() + ran() + ran()
  ID("cresult").innerHTML = i + ", " + `rgb(${rgb(i).r}, ${rgb(i).g}, ${rgb(i).b})`
  return i
}

onclick("button", function() { changeBG(hex())})