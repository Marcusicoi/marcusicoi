//CALCULATE!
document.getElementById("button").onclick = function() {
  //Formula
  function score(num) {
    return (num > 26300 * 1.5) ? Math.pow(num - 26300, 0.85) + 26300 : num / 1.5                                    
  }
  //Comma Numbers
  function numComma(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
  //Result
  document.getElementById("result").innerHTML = numComma(score(document.getElementById("input").value))
}