//ID
let number = document.getElementById("number");
let inc = document.getElementById("increaser");
let level = document.getElementById("level");
//The counters
var levelc = 1;
var num = 2;
var array = [
  '', 'K', 'M', 'B', 'T', 'q', 'Q', 's', 'S', 'O', 'N', 'D', 
  'UD', 'DD', 'TD', 'qD', 'QD', 'sD', 'SD', 'OD', 'ND', 'V', 
  'UV', 'DV', 'TV', 'qV', 'QV', 'sV', 'SV', 'OV', 'NV', 'TR', 
  'UTR', 'DTR', 'TTR', 'qTR', 'QTR', 'sTR', 'STR', 'OTR', 'NTR', 'QU', 
  'UQU', 'DQU', 'TQU', 'qQU', 'QQU', 'sQU', 'SQU', 'OQU', 'NQU', 'QI', 
  'UQI', 'DQI', 'TQI', 'qQI', 'QQI', 'sQI', 'SQI', 'OQI', 'NQI', 'Sx', 
  'USx', 'DSx', 'TSx', 'qSx', 'QSx', 'sSx', 'SSx', 'OSx', 'NSx', 'Sp', 
  'USp', 'DSp', 'TSp', 'qSp', 'QSp', 'sSp', 'SSp', 'OSp', 'NSp', 'Oc',  
  'UOc', 'DOc', 'TOc', 'qOc', 'QOc', 'sOc', 'SOc', 'OOc', 'NOc', 'No', 
  'UNo', 'DNo', 'TNo', 'qNo', 'QNo', 'sNo', 'SNo', 'ONo', 'NNo', 'Ce'
];
function abbreviateNumber(count, withAbbr = false, decimals = 2) {
    const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    let result = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    if (withAbbr) {
        result += `${array[i]}`; 
    }
    if (array[i] === undefined) return 'End.';
    return result;
}
//If you click the button
inc.onclick = function() {
  num *= 2;
  levelc += 1;
  number.innerHTML = abbreviateNumber(num, true, 1)
  level.innerHTML = "Level " + levelc;
  //If statements
  if (num.length >= 4) { number.innerHTML = abbreviateNumber(num)};
}