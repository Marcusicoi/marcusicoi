//ID
let number = document.getElementById("number");
let inc = document.getElementById("increaser");
let level = document.getElementById("level");
//The counters
var levelc = 1;
var num = 2n;
function abbreviateNumber(num, fixed) {
  if (num === null) { return null; } // terminate early
  if (num === 0) { return '0'; } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      a1 = d + ['', 'K', 'M', 'B', 'T', 'q', 'Q', 's', 'S', 'O', 'N', 'D'],
      e = d + ['', 'K', 'M', 'B', 'T', 'q', 'Q', 's', 'S', 'O', 'N', '][k]; // append power
  return e;
}
//If you click the button
inc.onclick = function() {
  num *= 2n;
  levelc += 1;
  number.innerHTML = abbreviateNumber(parseInt(num), 0)
  level.innerHTML = "Level " + levelc;
  //If statements
 // if (num.length >= 4) { number.innerHTML = abbreviateNumber(num)};
}