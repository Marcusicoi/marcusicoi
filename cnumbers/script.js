const n = document.getElementById("input")

function number() {
  let txt = NaN, unit = NaN, unit2 = NaN, unit3 = NaN
  function unit1(char) {
    switch (n.value.charAt(char)) {
        case "1": unit = "Un"; break
        case "2": unit = "Doe"; break
        case "3": unit = "Tre"; break
        case "4": unit = "Quattuor"; break
        case "5": unit = "Quin"; break
        case "6": unit = "Sex"; break
        case "7": unit = "Septen"; break
        case "8": unit = "Octo"; break
        case "9": unit = "Novem"; break
      }
    return unit
  }
  if (n.value.length === 1) {
    switch (n.value.charAt(0)) {
      case "1": txt = "Million"; break
      case "2": txt = "Billion"; break
      case "3": txt = "Trillion"; break
      case "4": txt = "Quadrillion"; break
      case "5": txt = "Quintillion"; break
      case "6": txt = "Sextillion"; break
      case "7": txt = "Septillion"; break
      case "8": txt = "Octillion"; break
      case "9": txt = "Nonillion"; break
    }
  }
  if (n.value.length === 2) {
    switch (n.value.charAt(0)) {
      case "1": txt = "Decillion"; break
      case "2": txt = "Vigintillion"; break
      case "3": txt = "Trigintillion"; break
      case "4": txt = "Quadragintillion"; break
      case "5": txt = "Quinquagintillion"; break
      case "6": txt = "Sexagintillion"; break
      case "7": txt = "Septuagintillion"; break
      case "8": txt = "Octagintillion"; break
      case "9": txt = "Nonagintillion"; break
    }
    if (n.value.charAt(1) > 0) {  
      return unit1(1) + txt.toLowerCase()
    }
  }
  if (n.value.length === 3) { 
    switch (n.value.charAt(0)) {
        case "1": txt = "Centillion"; break
        case "2": txt = "Ducentillion"; break
        case "3": txt = "Trecentillion"; break
        case "4": txt = "Quadringentillion"; break
        case "5": txt = "Quingentillion"; break
        case "6": txt = "Sescentillion"; break
        case "7": txt = "Septingentillion"; break
        case "8": txt = "Octingentillion"; break
        case "9": txt = "Nongentillion"; break
    }
    if (n.value.charAt(1) <= 0 && n.value.charAt(2) <= 0) {
      return txt
    } else {
      if (n.value.charAt(1) > 0) {
        switch (n.value.charAt(1)) {
          case "1": unit2 = "Deci"; break
          case "2": unit2 = "Viginti"; break
          case "3": unit2 = "Triginti"; break
          case "4": unit2 = "Quadraginti"; break
          case "5": unit2 = "Quinquaginti"; break
          case "6": unit2 = "Sexaginti"; break
          case "7": unit2 = "Septuaginti"; break
          case "8": unit2 = "Octaginti"; break
          case "9": unit2 = "Nonaginti"; break
        } 
        if (n.value.charAt(2) <= 0) {
          return unit2 + txt.toLowerCase()
        } else {
          return unit1(2) + unit2.toLowerCase() + txt.toLowerCase()    
        }
      }
      if (n.value.charAt(2) > 0) {
        switch (n.value.charAt(2)) {
        case "1": unit = "Un"; break
        case "2": {
          if (n.value.charAt(1) > 0) {
            unit = "Doe"
          } else {
            unit = "Duo"
          }
        }; break
        case "3": unit = "Tre"; break
        case "4": unit = "Quattuor"; break
        case "5": unit = "Quin"; break
        case "6": unit = "Sex"; break
        case "7": unit = "Septen"; break
        case "8": unit = "Octo"; break
        case "9": unit = "Novem"; break
        }
      }
      if (n.value.charAt(1) <= 0 && n.value.charAt(2) > 0) {
        switch (n.value.charAt(2)) {
          case "1": {
            unit = "Un"
            if (n.value.charAt(0) > 1) {
              txt = txt.replace("cent", "cenunt")
              if (n.value.charAt(0) > 3) {
                txt = txt.replace("gent", "genunt")
              }
            } else {
              txt = txt.replace("Cent", "Cenunt")
              if (n.value.charAt(0) > 3) {
                txt = txt.replace("Gent", "Genunt")
              }
            }
            return txt
          }; break
          case "2": {
            if (n.value.charAt(1) > 0) {
              unit = "Doe"
            } else {
              unit = "Duo"
            }
          }; break
          case "3": {
            unit = "Tre"
            if (n.value.charAt(0) > 1) {
              txt = txt.replace("cent", "centret")
              if (n.value.charAt(0) > 3) {
                txt = txt.replace("gent", "gentret")
              }
            } else {
              txt = txt.replace("Cent", "Centret")
              if (n.value.charAt(0) > 3) {
                txt = txt.replace("Gent", "Gentret")
              }
            }
            return txt
          }; break
          case "4": unit = "Quattuor"; break
          case "5": unit = "Quin"; break
          case "6": unit = "Sex"; break
          case "7": unit = "Septen"; break
          case "8": unit = "Octo"; break
          case "9": unit = "Novem"; break
        }
        return unit + txt.toLowerCase()
      }
    }
  }
  if (n.value.length === 4) {
    switch (n.value.charAt(0)) {
      case "1": txt = "Millillion"; break
      case "2": txt = "Duomillillion"; break
      case "3": txt = "Tremillillion"; break
      case "4": txt = "Quattuormillillion"; break
      case "5": txt = "Quinmillillion"; break
      case "6": txt = "Sexmillillion"; break
      case "7": txt = "Septenmillillion"; break
      case "8": txt = "Octomillillion"; break
      case "9": txt = "Nonmillillion"; break
    }
    function setunit3() {
      switch (n.value.charAt(0)) {
        case "1": unit3 = "Milli"; break
        case "2": unit3 = "Duomilli"; break
        case "3": unit3 = "Tremilli"; break
        case "4": unit3 = "Quattuormilli"; break
        case "5": unit3 = "Quinmilli"; break
        case "6": unit3 = "Sexmilli"; break
        case "7": unit3 = "Septenmilli"; break
        case "8": unit3 = "Octomilli"; break
        case "9": unit3 = "Novemmilli"; break
      }
      return unit3
    }
    if (n.value.charAt(3) > 0) {
      setunit3()
    }
    if (n.value.charAt(1) <= 0 && n.value.charAt(2) <= 0 && n.value.charAt(3) > 0) {
      switch (n.value.charAt(3)) {
        case "1": txt = "Untillion"; break
        case "2": txt = "Deutillion"; break
        case "3": txt = "Tretillion"; break
        case "4": txt = "Quadrillion"; break
        case "5": txt = "Quintillion"; break
        case "6": txt = "Sextillion"; break
        case "7": txt = "Septillion"; break
        case "8": txt = "Octillion"; break
        case "9": txt = "Nonillion"; break
      }
      return unit3 + "-" + txt.toLowerCase()
    }
    if (n.value.charAt(1) <= 0 && n.value.charAt(2) > 0) {
      switch (n.value.charAt(2)) {
        case "1": txt = "Decillion"; break
        case "2": txt = "Vigintillion"; break
        case "3": txt = "Trigintillion"; break
        case "4": txt = "Quadragintillion"; break
        case "5": txt = "Quinquagintillion"; break
        case "6": txt = "Sexagintillion"; break
        case "7": txt = "Septuagintillion"; break
        case "8": txt = "Octagintillion"; break
        case "9": txt = "Nonagintillion"; break
      }
      setunit3()
      if (n.value.charAt(3) > 0) {  
        return unit3 + "-" + unit1(3).toLowerCase() + txt.toLowerCase()
      } else {
        return unit3 + "-" + txt.toLowerCase()
      }
    }
    if (n.value.charAt(1) > 0) {
      if (n.value.charAt(2) <= 0 && n.value.charAt(3) <= 0) {
        switch (n.value.charAt(1)) {
          case "1": txt = "Centillion"; break
          case "2": txt = "Ducentillion"; break
          case "3": txt = "Trecentillion"; break
          case "4": txt = "Quadringentillion"; break
          case "5": txt = "Quingentillion"; break
          case "6": txt = "Sescentillion"; break
          case "7": txt = "Septingentillion"; break
          case "8": txt = "Octingentillion"; break
          case "9": txt = "Nongentillion"; break
        }
        setunit3()
        return unit3 + "-" + txt.toLowerCase()
      }
      if (n.value.charAt(2) > 0) {
        switch (n.value.charAt(2)) {
          case "1": unit2 = "Deci"; break
          case "2": unit2 = "Viginti"; break
          case "3": unit2 = "Triginti"; break
          case "4": unit2 = "Quadraginti"; break
          case "5": unit2 = "Quinquaginti"; break
          case "6": unit2 = "Sexaginti"; break
          case "7": unit2 = "Septuaginti"; break
          case "8": unit2 = "Octaginti"; break
          case "9": unit2 = "Nonaginti"; break
        }
        switch (n.value.charAt(1)) {
          case "1": txt = "Centillion"; break
          case "2": txt = "Ducentillion"; break
          case "3": txt = "Trecentillion"; break
          case "4": txt = "Quadringentillion"; break
          case "5": txt = "Quingentillion"; break
          case "6": txt = "Sescentillion"; break
          case "7": txt = "Septingentillion"; break
          case "8": txt = "Octingentillion"; break
          case "9": txt = "Nongentillion"; break
        }
        setunit3()
        if (n.value.charAt(3) <= 0) {
          return unit3 + "-" + unit2.toLowerCase() + txt.toLowerCase()
        } else {
          return unit3 + "-" + unit1(3).toLowerCase() + unit2.toLowerCase() + txt.toLowerCase()    
        }
      } else {
        setunit3()    
        switch (n.value.charAt(1)) {
          case "1": txt = "Centillion"; break
          case "2": txt = "Ducentillion"; break
          case "3": txt = "Trecentillion"; break
          case "4": txt = "Quadringentillion"; break
          case "5": txt = "Quingentillion"; break
          case "6": txt = "Sescentillion"; break
          case "7": txt = "Septingentillion"; break
          case "8": txt = "Octingentillion"; break
          case "9": txt = "Nongentillion"; break
        }
        switch (n.value.charAt(3)) {
          case "1": {
            unit = "Un"
            if (n.value.charAt(1) > 1) {
              txt = txt.replace("cent", "cenunt")
              if (n.value.charAt(1) > 3) {
                txt = txt.replace("gent", "genunt")
              }
            } else {
              txt = txt.replace("Cent", "Cenunt")
              if (n.value.charAt(1) > 3) {
                txt = txt.replace("Gent", "Genunt")
              }
            }
            return unit3 + "-" + txt.toLowerCase()
          }; break
          case "2": {
            if (n.value.charAt(2) > 0) {
              unit = "Doe"
            } else {
              unit = "Duo"
            }
          }; break
          case "3": {
            unit = "Tre"
            if (n.value.charAt(1) > 1) {
              txt = txt.replace("cent", "centret")
              if (n.value.charAt(1) > 3) {
                txt = txt.replace("gent", "gentret")
              }
            } else {
              txt = txt.replace("Cent", "Centret")
              if (n.value.charAt(1) > 3) {
                txt = txt.replace("Gent", "Gentret")
              }
            }
            return unit3 + "-" + txt.toLowerCase()
          }; break
          case "4": unit = "Quattuor"; break
          case "5": unit = "Quin"; break
          case "6": unit = "Sex"; break
          case "7": unit = "Septen"; break
          case "8": unit = "Octo"; break
          case "9": unit = "Novem"; break
        }
        return unit3 + "-" + unit.toLowerCase() + txt.toLowerCase()
      }
    }
  }
  return txt
}

document.getElementById("button").onclick = function() {
  try {
    document.getElementById("result").innerHTML = number()
  } catch (err) {
    document.getElementById("result").innerHTML = err
  }
}

document.getElementById("fbutton").onclick = function() {
  let i = 0
  setInterval(function() {
    i += 1
    n.value = i
    document.getElementById("result").innerHTML = number()
  }, 50)
}