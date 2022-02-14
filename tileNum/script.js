//Tile number generator.
//Always get the ids xD
const gen = document.getElementById('generate');
const text = document.getElementById('text');
//Define some variables
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
ranum = Math.floor(Math.random() * number.length), 
ranum2 = Math.floor(Math.random() * number.length), 
ranum3 = Math.floor(Math.random() * number.length), 
num = ranum,ranum2,ranum3,
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
var random = Math.floor(Math.random() * 33),
o2ran = ones2[Math.floor(Math.random() * ones2.length)],
oran = ones[Math.floor(Math.random() * ones.length)],
tran = tens[Math.floor(Math.random() * tens.length)],
hran = hundreds[Math.floor(Math.random() * hundreds.length)],
t2ran = thousands[Math.floor(Math.random() * thousands.length)],
mran = millions[Math.floor(Math.random() * millions.length)],
bran = billions[Math.floor(Math.random() * billions.length)];
//"if"
if (random === 1) {text.innerHTML = num};
if (random === 2) {text.innerHTML = num + o2ran};
if (random === 3) {text.innerHTML = num + tran};
if (random === 4) {text.innerHTML = num + oran + tran};
if (random === 5) {text.innerHTML = num + hran};;
if (random === 6) {text.innerHTML = num + oran + hran};
if (random === 7) {text.innerHTML = num + tran + hran};
if (random === 8) {text.innerHTML = num + oran + tran + hran};
if (random === 9) {text.innerHTML = num + t2ran};
if (random === 10) {text.innerHTML = num + t2ran + oran};
if (random === 11) {text.innerHTML = num + t2ran + tran};
if (random === 12) {text.innerHTML = num + t2ran + oran + tran};
if (random === 13) {text.innerHTML = num + t2ran + hran};
if (random === 14) {text.innerHTML = num + t2ran + oran + hran};
if (random === 15) {text.innerHTML = num + t2ran + tran + hran};
if (random === 16) {text.innerHTML = num + t2ran + oran + tran + hran};
if (random === 17) {text.innerHTML = num + mran};
if (random === 18) {text.innerHTML = num + mran + oran};
if (random === 19) {text.innerHTML = num + mran + tran};
if (random === 20) {text.innerHTML = num + mran + oran + tran};
if (random === 21) {text.innerHTML = num + mran + hran};
if (random === 22) {text.innerHTML = num + mran + oran + hran};
if (random === 23) {text.innerHTML = num + mran + tran + hran};
if (random === 24) {text.innerHTML = num + mran + oran + tran + hran};
if (random === 25) {text.innerHTML = num + mran + t2ran};
if (random === 26) {text.innerHTML = num + mran + t2ran + oran};
if (random === 27) {text.innerHTML = num + mran + t2ran + tran};
if (random === 28) {text.innerHTML = num + mran + t2ran + oran + tran};
if (random === 29) {text.innerHTML = num + mran + t2ran + hran};
if (random === 30) {text.innerHTML = num + mran + t2ran + oran + hran};
if (random === 31) {text.innerHTML = num + mran + t2ran + tran + hran};
if (random === 32) {text.innerHTML = num + mran + t2ran + oran + tran + hran};
}
gen.onclick = function() {textResult()};