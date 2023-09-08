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
var isColor = false
var isGradient = false
const setColor = () => {
  if (isColor === false) {
    isColor = true
    isGradient = false
  }
  if (isGradient === true) {
    isGradient = false
  }
}
const setGradient = () => {
  if (isGradient === false) {
    isGradient = true
    isColor = false
  }
  if (isColor === true) {
    isColor = false
  }
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
function text(bgColor) {
  let r = rgb(bgColor, 1).r,
      g = rgb(bgColor, 1).g,
      b = rgb(bgColor, 1).b,
      uicolors = [r / 255, g / 255, b / 255],
      c = uicolors.map((col) => {
        if (col <= 0.03928) {
          return col / 12.92;
        }
      return Math.pow((col + 0.055) / 1.055, 2.4)
      })
  let L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2])
  return (L > 0.179) ? "black" : "white"
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
  ID("ssctxt").innerHTML = `<h4 style="height:0px">${i}</h4>
                            <h6 style="height:0px">${rgb(i, 0)}</h6>
                            <h6 style="height:0px">${cmyk(rgb(i, 1).r, rgb(i, 1).g, rgb(i, 1).b)}
                            <h6 style="height:0px">${hsl(i)}</h6>`
  ID("gresult").innerHTML = ""
  ID("cinput").value = i
  for (let j = 0; j < document.getElementsByClassName("txt").length; j++) {
    CLASS("txt", j).style.color = text(i)
    CLASS("txt", j).style.mixBlendMode = "normal"
  }
  setColor()
  return i  
}
onclick("cbutton", function() { changeBG(hex())})
function conkeyup() {
  changeBG(ID("cinput").value)
  setColor()
  ID("cresult").innerHTML = `<h4 style="height:0px">${ID("cinput").value}</h4>
                             <h6 style="height:0px">${rgb(ID("cinput").value, 0)}</h6>
                             <h6 style="height:0px">${cmyk(rgb(ID("cinput").value, 1).r, rgb(ID("cinput").value, 1).g, rgb(ID("cinput").value, 1).b)}
                             <h6 style="height:0px">${hsl(ID("cinput").value)}</h6>`
  ID("gresult").innerHTML = ""
  ID("ssctxt").innerHTML = `<h4 style="height:0px">${ID("cinput").value}</h4>
                             <h6 style="height:0px">${rgb(ID("cinput").value, 0)}</h6>
                             <h6 style="height:0px">${cmyk(rgb(ID("cinput").value, 1).r, rgb(ID("cinput").value, 1).g, rgb(ID("cinput").value, 1).b)}
                             <h6 style="height:0px">${hsl(ID("cinput").value)}</h6>`
}
ID("cinput").onkeyup = function() { conkeyup() }


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
  ID("ginput").value = color
  ID("ssctxt").innerHTML = color
  for (let i = 0; i < document.getElementsByClassName("txt").length; i++) {
    CLASS("txt", i).style.color = "white"
    CLASS("txt", i).style.mixBlendMode = "difference"
    CLASS("txt", i).style.filter = "grayscale(100)"
  }
  ID("sstop").style.marginTop = "-84.75px"
  setGradient()
  return color
}
document.body.style.height = "100vh"
onclick("gbutton", function() { changeBG(gradient()) })
function inputcolor() {
  changeBG(ID("ginput").value)
  ID("gresult").innerHTML = ID("ginput").value
  ID("ssctxt").innerHTML = ID("ginput").value
  ID("cresult").innerHTML = ""
  setGradient()
}
ID("ginput").onkeyup = function() { inputcolor() }

let isView = false
function mg(id, px1, px2) {
  if (window.matchMedia('(max-width: 960px)').matches) {
    ID(id).style.marginTop = (px1 + "px")
  } else {
    ID(id).style.marginTop = (px2 + "px")
  }
}
function vis(id, v, x) {
  if (v === 0) {
    id.style.visibility = "hidden"
  } else if (v === 1) {
    id.style.visibility = "visible"
  }
}
function checkView() {
  if (isView == false) {
    vis(CLASS("overview", 0), 0)
    vis(CLASS("overview", 1), 0)
    vis(CLASS("overview", 2), 0)
    vis(ID("sbutton"), 1)
    ID("vbutton").innerHTML = "Back"
    mg("cresult", -65, -55)
    mg("gresult", -65, -55)
    mg("v", -300, -200)
    isView = true
  } else if (isView == true) {
    vis(CLASS("overview", 0), 1)
    vis(CLASS("overview", 1), 1)
    vis(CLASS("overview", 2), 1)
    vis(ID("sbutton"), 0)
    ID("vbutton").innerHTML = "View"
    mg("cresult", 0, 0)
    mg("gresult", 0, 0)
    mg("v", 0, 0)
    isView = false
  }
}
onclick("vbutton", function() { checkView() })
onclick("sbutton", function() {
  vis(ID("vbutton"), 0), vis(ID("sbutton"), 0)
  vis(ID("gresult"), 0), vis(ID("cresult"), 0)
  vis(ID("sstop"), 1), vis(ID("ssbottom"), 1)
  html2canvas(document.body).then(function(canvas) {
      return Canvas2Image.saveAsPNG(canvas)
  })  
  setTimeout(function() {
  vis(ID("vbutton"), 1), vis(ID("sbutton"), 1)
  vis(ID("gresult"), 1), vis(ID("cresult"), 1)
  vis(ID("sstop"), 0), vis(ID("ssbottom"), 0)
  if (isGradient === true && isColor === false) {
    for (let i = 0; i < document.getElementsByClassName("txt").length; i++) {
      CLASS("txt", i).style.color = "white"
      CLASS("txt", i).style.mixBlendMode = "difference"
      CLASS("txt", i).style.filter = "grayscale(100)"
    }
  } else if (isColor === true && isGradient === false) {
    for (let i = 0; i < document.getElementsByClassName("txt").length; i++) {
      CLASS("txt", i).style.color = text(ID("cinput").value)
    }
  }}, 3500)
})