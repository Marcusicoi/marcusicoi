function ID(x) {
  return document.getElementById(x)
}
function CLASS(x, y) {
  return document.getElementsByClassName(x)[y]
}
const changeBG = (x) => {
  return document.body.style.background = x
}
const onclick = (id, x) => {
  return ID(id).onclick = x
}
function rgb(x, y) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x);
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
  return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`
}
function hsl(x) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x),
      r = parseInt(result[1], 16),
      g = parseInt(result[2], 16),
      b = parseInt(result[3], 16);
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b),
  h, s, l = (max + min) / 2
  if (max == min) {
    h = s = 0
  } else {
    let d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }
  h = Math.round(h * 360)
  s = s * 100
  s = Math.round(s)
  l = l * 100
  l = Math.round(l)
  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}
function hex() {
  let char = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
  function ran() {
    return char[Math.floor(Math.random() * char.length)]
  }
  let i = "#" + ran() + ran() + ran() + ran() + ran() + ran()
  ID("cresult").innerHTML = `<h4 style="height:0px">${i}</h4>
                            <h6 style="height:0px">${rgb(i, 0)}</h6>
                            <h6 style="height:0px">${cmyk(rgb(i, 1).r, rgb(i, 1).g, rgb(i, 1).b)}
                            <h6 style="height:0px">${hsl(i)}</h6>`
  ID("gresult").innerHTML = ""
  return i  
}
onclick("cbutton", function() { changeBG(hex())})
ID("cinput").onkeyup = function() {
let cinput = ID("cinput").value
changeBG(cinput)
ID("cresult").innerHTML = `<h4 style="height:0px">${cinput}</h4>
                           <h6 style="height:0px">${rgb(cinput, 0)}</h6>
                           <h6 style="height:0px">${cmyk(rgb(cinput, 1).r, rgb(cinput, 1).g, rgb(cinput, 1).b)}
                           <h6 style="height:0px">${hsl(cinput)}</h6>`
ID("gresult").innerHTML = ""
}

function gradient() {
  let txt = (x) => {
    return `linear-gradient(${x})`
  }
  function hex2() {
    let char = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    function x() {
      return char[Math.floor(Math.random() * char.length)]
    }
    return "#" + x() + x() + x() + x() + x() + x()
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
        case 2: return `${hex2()} ${p1()}, ${hex2()} ${p2()}`; break
        case 3: return `${hex2()} ${p1()}, ${hex2()} ${p2()}, ${hex2()} ${p3()}`; break
        case 4: return `${hex2()} ${p1()}, ${hex2()} ${p2()}, ${hex2()} ${p3()}, ${hex2()} ${p4()}`; break
      }
    } else {
      switch (ia) {
        case 2: return `${hex2()}, ${hex2()}`; break
        case 3: return `${hex2()}, ${hex2()}, ${hex2()}`; break
        case 4: return `${hex2()}, ${hex2()}, ${hex2()}, ${hex2()}`; break
      }
    } 
  }
  let color = txt(`${hexF()}, ${hexN()}`)
  ID("gresult").innerHTML = color
  ID("cresult").innerHTML = ""
  return color
}
document.body.style.height = "100vh"
onclick("gbutton", function() { changeBG(gradient()) })
function inputcolor() {
  changeBG(`linear-gradient(${ID("ginputdir").value}, ${ID("ginputhex").value})`)
  ID("gresult").innerHTML = `linear-gradient(${ID("ginputdir").value}, ${ID("ginputhex").value})`
  ID("cresult").innerHTML = ""
}
ID("ginputdir").onkeyup = function() { inputcolor() }
ID("ginputhex").onkeyup = function() { inputcolor() }

let isView = false
function checkView() {
  let px = "-225"
  if (isView == false) {
    CLASS("overview", 0).style.visibility = "hidden"
    CLASS("overview", 1).style.visibility = "hidden"
    ID("cresult").style.marginTop = (px - 25) + "px"
    ID("gresult").style.marginTop = px + "px"
    ID("view").style.marginTop = px + "px"
    isView = true
  } else if (isView == true) {
    CLASS("overview", 0).style.visibility = "visible"
    CLASS("overview", 1).style.visibility = "visible"
    ID("cresult").style.marginTop = "0px"
    ID("gresult").style.marginTop = "0px"
    ID("view").style.marginTop = "0px"
    isView = false
  }
}
onclick("view", function() { checkView() })