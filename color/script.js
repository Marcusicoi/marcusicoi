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
  function rgb(x, y = 0) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x);
    let i = {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
    if (y == 0) {
      return `rgb(${i.r}, ${i.g}, ${i.b})`
    } else if (y == 1) {
      return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
      } : null
    }
  }
  function cmyk(r,g,b) {
    let c = 0,
        m = 0,
        y = 0,
        k = 0
    //remove spaces from input RGB values, convert to int
    var r = parseInt((''+r).replace(/\s/g, ''), 10),
        g = parseInt((''+g).replace(/\s/g, ''), 10),
        b = parseInt((''+b).replace(/\s/g, ''), 10)
    if ( r == 0 && g == 0 && b == 0) {
      k = 1;
    }
    c = 1 - (r/255), m = 1 - (g/255), y = 1 - (b/255)
    let minCMY = Math.min(c, Math.min(m, y))
    c = Math.round((c - minCMY) / (1 - minCMY) * 100) 
    m = Math.round((m - minCMY) / (1 - minCMY) * 100)
    y = Math.round((y - minCMY) / (1 - minCMY) * 100)
    k = Math.round(minCMY * 100);
    return `cmyk(${c}%, ${m}%, ${y}, ${k})`
  }
  let i = "#" + ran() + ran() + ran() + ran() + ran() + ran()
  ID("cresult").innerHTML = `${i}, ${rgb(i, 0)}, ${cmyk(rgb(i, 1).r, rgb(i, 1))}` 
  return i
}

onclick("button", function() { changeBG(hex())})