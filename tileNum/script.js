//Tile number generator.
//Always get the ids xD
const gen = document.getElementById('generate');
const text = document.getElementById('text');
//Define some variables
var num = Math.floor(Math.random() * 999),
ones = ['U', 'D', 'T', 'q', 'Q', 's', 'S', 'O', 'N'],
ones2 = ['M', 'B', 'T', 'q', 'Q', 's', 'S', 'O', 'N'],
tens = ['D', 'V', 'TR', 'QU', 'QI', 'Sx', 'Sp', 'Oc', 'No'],
hundreds = ['Ce', 'Du', 'Te', 'Qr', 'Qn', 'Sc', 'St', 'Ot', 'Nn'],
thousands = ['Mil', 'Dil', 'Til', 'qil', 'Qil', 'sil', 'Sil', 'Oil', 'Nil'],
millions = ['Myr', 'Dyr', 'Tyr', 'qyr', 'Qyr', 'syr', 'Syr', 'Oyr', 'Nyr'],
billions = ['Mic', 'Dic', 'Tic', 'qic', 'Qic', 'sic', 'Sic', 'Oic', 'Nic'],
trllions = ['Nan', 'DNan', 'TNan', 'qNan', 'QNan', 'sNan', 'SNan', 'ONan', 'NNan'],
quadrillions = ['Pic', 'DPic', 'TPic', 'qPic', 'QPic', 'sPic', 'SPic', 'OPic', 'NPic'],
quintillions = ['Fem', 'DFem', 'TFem', 'qFem', 'QFem', 'sFem', 'SFem', 'OFem', 'NFem'],
sextillions = ['Att', 'DAtt', 'TAtt', 'qAtt', 'QAtt', 'sAtt', 'SAtt', 'OAtt', 'NAtt'],
septillions = ['Zep', 'DZep', 'TZep', 'qZep', 'QZep', 'sZep', 'SZep', 'OZep', 'NZep'],
octillions = ['Yoc', 'DYoc', 'TYoc', 'qYoc', 'QYoc', 'sYoc', 'SYoc', 'OYoc', 'NYoc'],
nonillions = ['Xon', 'DXon', 'TXon', 'qXon', 'QXon', 'sXon', 'SXon', 'OXon', 'NXon'],
decillions = ['Myr', 'Dyr', 'Tyr', 'qyr', 'Qyr', 'syr', 'Syr', 'Oyr', 'Nyr'];
function textResult() {
//Random Variables
var random = Math.floor(Math.random() * 15),
o2ran = ones2[Math.floor(Math.random() * ones2.length)],
oran = ones[Math.floor(Math.random() * ones.length)],
tran = tens[Math.floor(Math.random() * tens.length)],
hran = hundreds[Math.floor(Math.random() * hundreds.length)],
t2ran = thousands[Math.floor(Math.random() * thousands.length)];
//"if"
if (random = 1) {text.innerHTML = o2ran};
if (random = 2) {text.innerHTML = tran};
if (random = 3) {text.innerHTML = oran + tran};
if (random = 4) {text.innerHTML = hran};;
if (random = 5) {text.innerHTML = oran + hran};
if (random = 6) {text.innerHTML = tran + hran};
if (random = 7) {text.innerHTML = oran + tran + hran};
if (random = 8) {text.innerHTML = t2ran};
if (random = 9) {text.innerHTML = t2ran + oran};
if (random = 10) {text.innerHTML = t2ran + tran};
if (random = 11) {text.innerHTML = t2ran + hran};
if (random = 12) {text.innerHTML = t2ran + hran + oran};
if (random = 13) {text.innerHTML = t2ran + hran + tran};
if (random = 14) {text.innerHTML = t2ran + hran + tran + oran};
}
gen.onclick = function() {textResult()};