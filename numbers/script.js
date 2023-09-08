const BGcol = ["gray", "#72d964", "#ffe65d", "#484eda", "#861fde",
              "#dc201f", "#1fdbdd", "#ff2b75", "#27fea1",
              "#ffc10f", "#010eb1", "#f4bdf2", "#883439"]
const ID = (id) => {
  return document.getElementById(id)
}
const Tcode = (n, i, x = "") => {
  switch(i) {
    case 1: return `<h2>Level ${n} <span style="color:${BGcol[0]}">(${x}s)</span></h2>`
    case 2: return `<h2>Level ${n} <span style="color:${BGcol[1]}">(${x}s)</span></h2>`
    case 3: return `<h2>Level ${n} <span style="color:${BGcol[2]}">(${x}s)</span></h2>`
    case 4: return `<h2>Level ${n} <span style="color:${BGcol[3]}">(${x}s)</span></h2>`
    case 5: return `<h2>Level ${n} <span style="color:${BGcol[4]}">(${x}s)</span></h2>`
    case 6: return `<h2>Level ${n} <span style="color:${BGcol[5]}">(${x}s)</span></h2>`
    case 7: return `<h2>Level ${n} <span style="color:${BGcol[6]}">(${x}s)</span></h2>`
    case 8: return `<h2>Level ${n} <span style="color:${BGcol[7]}">(${x}s)</span></h2>`
    case 9: return `<h2>Level ${n} <span style="color:${BGcol[8]}">(${x}s)</span></h2>`
    case 10: return `<h2>Level ${n} <span style="color:${BGcol[9]}">(${x}s)</span></h2>`
    case 11: return `<h2>Level ${n} <span style="color:${BGcol[10]}">(${x}s)</span></h2>`
  }
}
const Hcode = () => {
  return `
  <table>
    <tr>
      <th style="background:${BGcol[0]}">Numbers</th>
      <th style="background:${BGcol[0]}">Units</th>
      <th style="background:${BGcol[0]}">Digits</th>
      <th style="background:${BGcol[0]}">Abbreviate</th>
    </tr>`
}
const Bcode = (col, num, unit, dig, abb) => {
  return `
  <tr>
    <th style="background:${BGcol[col]}">${num}</th>
    <th style="background:${BGcol[col]}">${unit}</th>
    <th style="background:${BGcol[col]}">10^${dig}</th>
    <th style="background:${BGcol[col]}">${abb}</th>
  </tr>`
}
const script = []
const comma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const digit = (ni) => {
  let j = [], n = 3
  for (let i = 1; i < 10; i += 1) {
    n += ni
    j.push(n)
  }
  return j
}
const digit2 = (ni, t = 3) => {
  let j = []
  for (let i = t; i < (t * 10); i += t) {
    j.push(`(${i}${ni})+3`)
  }
  return j
}
const digit3 = (ni) => {
  let j = []
  for (let i = 3; i < 30; i += 3) {
    j.push(`(${i}x(10^${ni})+3)`)
  }
  return j
}
const abbrev = (type) => {
  let lctype = type.toLowerCase(),
      lcrptype = lctype.replace(lctype.charAt(0), "")
  return [type, `D${lcrptype}`, `T${lcrptype}`, `q${lcrptype}`, `Q${lcrptype}`, `s${lcrptype}`, `S${lcrptype}`, `O${lcrptype}`, `N${lcrptype}`]
}
const abbrev2 = (type) => {
  return [type, `D${type}`, `T${type}`, `q${type}`, `Q${type}`, `s${type}`, `S${type}`, `O${type}`, `N${type}`]
}
const abbrev3 = (i, m, d, ti, te, p, hx, hp, o, e) => {
  return [abbrev2(i), abbrev2(m), abbrev2(d), abbrev2(ti), abbrev2(te), abbrev2(p), abbrev(hx), abbrev2(hp), abbrev2(o), abbrev2(e)]
}
const abbrev4 = (i) => {
  let j = i.replace(i.charAt(0), '')
  let k = i.replace(i.charAt(0), '').replace(i.charAt(1), '')                                         
  return [abbrev2(i), abbrev2(`M${j}`), abbrev2(`D${j}`), abbrev2(`Ti${k}`), abbrev2(`Te${k}`), abbrev2(`Pe${k}`), abbrev(`Hx${k}`), abbrev2(`Hp${k}`), abbrev2(`Oc${k}`), abbrev2(`En${k}`)]
}
const numb = (type) => {
  let lctype = type.toLowerCase()
  return [type, `Du${lctype}`, `Tru${lctype}`, `Quadri${lctype}`, `Quinti${lctype}`, `Ses${lctype}`, `Septi${lctype}`, `Octin${lctype}`, `Nona${lctype}`]
}
const numb2 = (type) => {
  let lctype = type.toLowerCase()
  return [`Me${lctype}`, `Due${lctype}`, `Trio${lctype}`, `Tetra${lctype}`, `Penta${lctype}`, `Hexa${lctype}`, `Hepta${lctype}`, `Octa${lctype}`, `Enna${lctype}`]
}
function code1(n, a, d, lvl, lvl2) {
  let col = 0, x = []
  for (var i = 0; i < 9; i++) {
    let op = 1
    do { op += 1, col += (op / 2) } while (op === 0)
    x.push(Bcode(col, n[i], n[i].replace("illion", "i-"), comma(digit(d)[i]), a[i]))
  }
  return Tcode(lvl, lvl2, n[0]) + Hcode() + x.join("") + "</table>"
}
function code1o2(n, a, d, lvl, lvl2, ds = 3) {
  let col = 0, x = []
  for (var i = 0; i < 9; i++) {
    let op = 1
    do { op += 1, col += (op / 2) } while (op === 0)
    x.push(Bcode(col, n[i], n[i].replace("illion", "i-"), comma(digit2(d, ds)[i]), a[i]))
  }
  return Tcode(lvl, lvl2, n[0]) + Hcode() + x.join("") + "</table>"
}
function code1o3(n, a, d, lvl, lvl2) {
  let col = 0, x = []
  for (var i = 0; i < 9; i++) {
    let op = 1
    do { op += 1, col += (op / 2) } while (op === 0)
    x.push(Bcode(col, n[i], n[i].replace("illion", "i-"), comma(digit3(d)[i]), a[i]))
  }
  return Tcode(lvl, lvl2, n[0]) + Hcode() + x.join("") + "</table>"
}
function code2(n, a, d, lvl, lvl2, dg = 3) {
  d -= 3, lvl -= 1
  let n2 = n.replace('illion', 'illi-'), 
  x = [],
  arrayn = [n, `Me${n.toLowerCase()}`, `Due${n.toLowerCase()}`, `Trio${n.toLowerCase()}`, `Tetra${n.toLowerCase()}`, `Pente${n.toLowerCase()}`, `Hexe${n.toLowerCase()}`, `Hepte${n.toLowerCase()}`, `Octe${n.toLowerCase()}`, `Enne${n.toLowerCase()}`],
  arrayn2 = [n2, `Me${n2.toLowerCase()}`, `Due${n2.toLowerCase()}`, `Trio${n2.toLowerCase()}`, `Tetra${n2.toLowerCase()}`, `Pente${n2.toLowerCase()}`, `Hexe${n2.toLowerCase()}`, `Hepte${n2.toLowerCase()}`, `Octe${n2.toLowerCase()}`, `Enne${n2.toLowerCase()}`]
  for (let i = 0; i < 10; i++) {
    d += dg
    lvl += 1
    x.push(code1(numb(arrayn[i]), numb(arrayn2[i]), a[i], digit(d), lvl, lvl2))
  }
  return x.join("")
}
function code3(n, fa, sa, ta, d, lvl, lvl2) {
  return code1o2(numb(n), abbrev(fa), d, lvl, lvl2) +
         code1o2(numb(`Deca${n.toLowerCase()}`), abbrev(sa), d, (lvl + 1), lvl2, 30) +
         code1o2(numb(`Centi${n.toLowerCase()}`), abbrev(ta), d, (lvl + 2), lvl2, 300)
}

function lvl1() {
  let num = ["Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion"],
      unit = ["", "Un-", "Duo-", "Tre- Tres-", "Quattuor-", "Quin-", "Sex- Ses-", "Sept-", "Octo-", "Novem- Noven-"],
      abb = ["K", "U, M", "D, B", "T", "q", "Q", "s", "S", "O", "N"],
      d = 3, col = 0, x = []
  for (let i = 0; i < 10; i++) {
    d += 3
    col += 1
    x.push(Bcode(col, num[i], unit[i], d, abb[i]))
  }
  return Tcode(1, 1, num[1]) + Hcode() + x.join("") + "</table>"
}
function lvl4() {
  let num = ["illion", "illion", "illion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion"],
      unit = ["", "Un-", "Duo-", "Tre- Tres-", "Quattor-", "Quin-", "Sex- Ses-", "Sept-", "Octo-", "Novem- Noven-"],
      abb = ["K", "U, M", "D, B", "T", "q", "Q", "s", "S", "O", "N"],
      d = 3, col = 0, x = []
  for (let i = 0; i < 10; i++) {
    d += 3
    col += 1
    x.push(Bcode(col, num[i], unit[i], d, abb[i]))
  }
  return Tcode(2, 1, num[1]) + Hcode() + x.join("") + "</table>"
}
function hectilli(i, d, ti, te, p, hx, hp, o, e, n, dg, lvl, lvl2) {
  dg -= 27
  return code2(n, abbrev4(i), dg, lvl, lvl2, 30) +
         code2(`Do${n.toLowerCase()}`, abbrev4(d), (dg + 300), (lvl + 10), (lvl2 - 1), 30) +
         code2(`Tria${n.toLowerCase()}`, abbrev4(ti), (dg + 600), (lvl + 20), (lvl2 - 2), 30) +
         code2(`Tetra${n.toLowerCase()}`, abbrev4(te), (dg + 900), (lvl + 30), (lvl2 - 3), 30) +
         code2(`Penta${n.toLowerCase()}`, abbrev4(p), (dg + 1200), (lvl + 40), (lvl2 - 4), 30) +
         code2(`Hexa${n.toLowerCase()}`, abbrev4(hx), (dg + 1500), (lvl + 50), (lvl2 - 5), 30) +
         code2(`Hepta${n.toLowerCase()}`, abbrev4(hp), (dg + 1800), (lvl + 60), (lvl2 - 6), 30) +
         code2(`Octa${n.toLowerCase()}`, abbrev4(o), (dg + 2100), (lvl + 70), (lvl2 - 5), 30) +
         code2(`Enna${n.toLowerCase()}`, abbrev4(e), (dg + 2400), (lvl + 80), (lvl2 - 4), 30)
}

try {
  ID("tier1").onclick = function() {
    ID("8172").innerHTML =  
      lvl1() + 
      Tcode(2, 1, "Decillion") + Hcode() +
        Bcode(1, "Decillion", "Decilli-", 33, "D") +
        Bcode(2, "Vigintillion", "Viginta-", 63, "V") +
        Bcode(3, "Trigintillion", "Triginta-", 93, "TR") +
        Bcode(4, "Googol", "", 100, "G") +
        Bcode(5, "Quadragintillion", "Quadraginta-", 123, "QU") +
        Bcode(6, "Quinquagintillion", "Quinquaginta-", 153, "QI") +
        Bcode(7, "Sexagintillion", "Sexaginta-", 183, "Sx") +
        Bcode(8, "Septuagintillion", "Septuaginta-", 213, "Sp") +
        Bcode(9, "Octogintillion", "Octoginta-", 243, "Oc") +
        Bcode(10, "Nonagintillion", "Nonaginta-", 273, "No")
      + "</table>" +
  
      Tcode(3, 1, "Centillion") + Hcode() +
        Bcode(1, "Centillion", "Centi-", 303, "Ce") +
        Bcode(2, "Cenuntillion", "Cenunti-", 306, "Ceu") +
        Bcode(3, "Duocentillion", "Duocenti-", 309, "Ced") +
        Bcode(4, "Centretillion", "Centreti-", 312, "Cet") +
        Bcode(5, "Ducentillion", "Ducenti-", 603, "Du") +
        Bcode(6, "Trecentillion", "Trecenti-", 903, "Te") +
        Bcode(7, "Quadringentillion", "Quadringenti-", "1,203", "Qd") +
        Bcode(8, "Quingentillion", "Quingenti-", "1,503", "Qn") +
        Bcode(9, "Sescentillion", "Sescenti-", "1,803", "Sc") +
        Bcode(10, "Septingentillion", "Septingenti-", "2,103", "St") +
        Bcode(11, "Octingentillion", "Octingenti-", "2,403", "Ot") +
        Bcode(12, "Nongentillion", "Nongenti-", "2,703", "Ng")
      + "</table>" 
  }
  ID("tier2").onclick = function() {
    ID("8172").innerHTML =
      Tcode(4, 2, "Millillion") + Hcode() + 
        Bcode(1, "Millillion", "Milli-", "3,003", "ML") +
        Bcode(2, "Platillion", "Plati-", "6,000", "PT") +
        Bcode(3, "Dumillillion", "Dumilli-", "6,003", "DL") +
        Bcode(4, "Trumillillion", "Trumilli-", "9,003", "TL") +
        Bcode(5, "Quadrimillillion", "Quadrimilli-", "12,003", "qL") +
        Bcode(6, "Quintimillillion", "Quintimilli-", "15,003", "QL") +
        Bcode(7, "Sesmillillion", "Sesmilli-", "18,003", "sL") +
        Bcode(8, "Septimillillion", "Septimilli-", "21,003", "SL") +
        Bcode(9, "Octimillillion", "Octimilli-", "24,003", "OL") +
        Bcode(10, "Nonamillillion", "Nonamilli-", "27,003", "NL") 
      + "</table>" +
    code1(numb("Myrillion"), abbrev("My"), 30000, 5, 2) +
    code1(numb("Decamyrillion"), abbrev("DDr"), 300000, 6, 2) +
    code1(numb("Micrillion"), abbrev("Mcr"), 3000000, 7, 3) +
    code1(numb("Decaicrillion"), abbrev("Ducr"), 30000000, 8, 3) +
    code1(numb("Centimicrillion"), abbrev("Cecr"), 300000000, 9, 3) +
    code3("Nanillion", "Nai", "Duna", "Cena", "B", 10, 4) +
    code3("Picillion", "Pic", "Dupc", "Cepc", "T", 13, 4) +
    code3("Femtillion", "Fmt", "Dufm", "Cefm", "q", 16, 4) +
    code3("Attillion",  "Att", "Duat", "Ceat", "Q", 19, 4) +
    code3("Zeptillion", "Zpt", "Duzp", "Cezp", "s", 22, 4) +
    code3("Yoctillion", "Yct", "Duyc", "Ceyc", "S", 25, 5) +
    code3("Xonillion", "Xni", "Duxn", "Cexn", "O", 28, 5) +
    code3("Vecillion", "Vec", "Duvc", "Cevc", "N", 31, 5)
  }

  code3("Mecillion",  "Mci", "Dumc", "Cemc", "D", 34, 6) +
  code3("Duecillion", "Dec", "Dudc", "Cedc", "UD", 37, 6) +
  code3("Trecillion", "Tuc", "Dutc", "Cetc", "DD", 40, 6) +
  code3("Tetrecillion", "Tec", "Dute", "Cete", "TD", 43, 6) +
  code3("Pentecillion", "Pec", "Dupc", "Cepc", "qD", 46, 6) +
  code3("Hexecillion", "Hxc", "Duhx", "Cehx", "QD", 49, 6) +
  code3("Heptecillion", "Hpc", "Duhp", "Cehp", "sD", 52, 6) +
  code3("Octecillion", "Occ", "Duoc", "Ceoc", "SD", 55, 6) +
  code3("Ennecillion", "Enc", "Duec", "Cenc", "OD", 58, 6) +

  code2("Icosillion", "Ico", "Duic", "Ceic", "ND", 61, 7) +
  code2("Triacontillion", abbrev4("Tia"), 90, 35, 8) +
  code2("Tetracontillion", abbrev4("Ttrc"), 120, 45, 9) +
  code2("Pentacontillion", abbrev4("Pntc"), 150, 55, 10) +
  code2("Hexacontillion", abbrev4("Hxac"), 180, 65, 11) +
  code2("Heptacontillion", abbrev4("Hpac"), 210, 75, 10) +
  code2("Octacontillion", abbrev4("Ocac"), 240, 85, 9) +    
  code2("Enneacontillion", abbrev4("Enac"), 270, 95, 8) +
  
hectilli("Hctl", "Dhct", "Tict", "Tect", "Phct", "Hxct", "Hpct", "Ohct", "Ehct", "Hectillion", 300, 105, 7) +

code1(numb("Killillion"), numb("Killilli-"), abbrev2("Kill"), digit(3000), 195, 4) +
code1(numb("Killamillillion"), numb("Killamillilli-"), abbrev2("Klmi"), digit(3003), 196, 4) +
code1(numb("Killamicrillion"), numb("Killamicrilli-"), abbrev2("Klmc"), digit(3006), 197, 4) +
code1(numb("Killananillion"), numb("Killananilli-"), abbrev2("Klna"), digit(3009), 198, 4) +
code1(numb("Killapicillion"), numb("Killapicilli-"), abbrev2("Klpc"), digit(3012), 199, 4) +
code1(numb("Killafemtillion"), numb("Killafemtilli-"), abbrev2("Klfm"), digit(3015), 200, 4)
} catch (err) {
  ID("8172").innerHTML = err
}