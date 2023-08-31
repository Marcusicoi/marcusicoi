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
    let r = rgb(x).r,
        g = rgb(x).g,
        b = rgb(x).b
    if (r == 0 && g == 0 && b == 0) {
      k = 1;
      return `0%, 0%, 0%, 1%`
      }
    c = 1 - (r / 255), m = 1 - (g / 255), y = 1 - (b / 255)
    let minCMY = Math.min(c, Math.min(m, y))
    c = (c - minCMY) / (1 - minCMY)
    m = (m - minCMY) / (1 - minCMY)
    y = (y - minCMY) / (1 - minCMY)
    k = minCMY
    return `${(c * 100)}%, ${(m * 100)}%, ${(y * 100)}%, ${(k * 100)}%`;
  }  
  let i = "#" + ran() + ran() + ran() + ran() + ran() + ran()
  ID("cresult").innerHTML = `${i}, rgb(${rgb(i).r}, ${rgb(i).g}, ${rgb(i).b}), cmyk(${cmyk(i)})` 
  return i
}

onclick("button", function() { changeBG(hex())})