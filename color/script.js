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
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  function cmyk(x) {
    let c = 0,
        m = 0,
        y = 0,
        k = 0
    let r = parseInt(x.substring(0,2),16),
        g = parseInt(x.substring(2,4),16),
        b = parseInt(x.substring(4,6),16); 
    if (r == 0 && g == 0 && b == 0) {
      k = 1;
      return `0%, 0%, 0%, 1%`;
      }
    c = 1 - (r/255);
    m = 1 - (g/255);
    y = 1 - (b/255);
   let minCMY = Math.min(computedC,Math.min(computedM,computedY));

 computedC = (computedC - minCMY) / (1 - minCMY) ;
 computedM = (computedM - minCMY) / (1 - minCMY) ;
 computedY = (computedY - minCMY) / (1 - minCMY) ;
 computedK = minCMY;

 return [computedC,computedM,computedY,computedK];
}
  
  let i = "#" + ran() + ran() + ran() + ran() + ran() + ran()
  ID("cresult").innerHTML = `${i}, rgb(${rgb(i).r}, ${rgb(i).g}, ${rgb(i).b}), ${cmyk(i)}` 
  return i
}

onclick("button", function() { changeBG(hex())})