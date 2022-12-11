//ID
let number = document.getElementById("number");
let inc = document.getElementById("increaser");
let level = document.getElementById("level");
//The counters
var levelc = 1;
var num = 2n;
function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "K", "M", "B","T"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}
//If you click the button
inc.onclick = function() {
  num *= 2n;
  levelc += 1;
  number.innerHTML = abbreviateNumber(num)
  level.innerHTML = "Level " + levelc;
  //If statements
 // if (num.length >= 4) { number.innerHTML = abbreviateNumber(num)};
}