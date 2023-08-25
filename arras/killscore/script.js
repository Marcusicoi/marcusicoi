//CALCULATE!
document.getElementById("button").onclick = function() {
  //Formula
  function score(num) {
    return (num > 26300 * 1.5) ? Math.pow(num - 26300, 0.85) + 26300 : num / 1.5                                    
  }
  //
  document.getElementById("result").innerHTML = score(document.getElementById("input").value)
}