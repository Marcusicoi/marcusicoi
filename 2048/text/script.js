//ID
let number = document.getElementById("number");
let inc = document.getElementById("increaser");
let level = document.getElementById("level");
let abbs = require('./numbers/script.js');
//The counters
var levelc = 1;
var num = 2;
var array = [
  '', 'K', 'M', 'B', 'T', 'q', 'Q', 's', 'S', 'O', 'N', 
  'D', 'V', 'TR', 'QU'
];
function abbreviateNumber(count, withAbbr = false, decimals = 2) {
    const i     = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    let result  = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    if(withAbbr) {
        result += `${array[i]}`; 
    }
    return result;
}
//If you click the button
inc.onclick = function() {
  num *= 2;
  levelc += 1;
  number.innerHTML = abbreviateNumber(num, true, 1)
  level.innerHTML = "Level " + levelc;
  //If statements
 // if (num.length >= 4) { number.innerHTML = abbreviateNumber(num)};
}