//Tile number generator.
//Always get the ids xD
const gen = document.getElementById('generate');
const gen2 = document.getElementById('generate2').value;
const but = document.getElementById('button');
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
trillions = ['Nan', 'DNan', 'TNan', 'qNan', 'QNan', 'sNan', 'SNan', 'ONan', 'NNan'],
quadrillions = ['Pic', 'DPic', 'TPic', 'qPic', 'QPic', 'sPic', 'SPic', 'OPic', 'NPic'],
quintillions = ['Fem', 'DFem', 'TFem', 'qFem', 'QFem', 'sFem', 'SFem', 'OFem', 'NFem'],
sextillions = ['Att', 'DAtt', 'TAtt', 'qAtt', 'QAtt', 'sAtt', 'SAtt', 'OAtt', 'NAtt'],
septillions = ['Zep', 'DZep', 'TZep', 'qZep', 'QZep', 'sZep', 'SZep', 'OZep', 'NZep'],
octillions = ['Yoc', 'DYoc', 'TYoc', 'qYoc', 'QYoc', 'sYoc', 'SYoc', 'OYoc', 'NYoc'],
nonillions = ['Xon', 'DXon', 'TXon', 'qXon', 'QXon', 'sXon', 'SXon', 'OXon', 'NXon'],
decillions = ['Vec', 'DVec', 'TVec', 'qVec', 'QVec', 'sVec', 'SVec', 'OVec', 'NVec'];
function textResult() {
//Random Variables
var random = Math.floor(Math.random() * 65),
o2ran = ones2[Math.floor(Math.random() * ones2.length)],
oran = ones[Math.floor(Math.random() * ones.length)],
tran = tens[Math.floor(Math.random() * tens.length)],
hran = hundreds[Math.floor(Math.random() * hundreds.length)],
t2ran = thousands[Math.floor(Math.random() * thousands.length)],
mran = millions[Math.floor(Math.random() * millions.length)],
bran = billions[Math.floor(Math.random() * billions.length)],
t3ran = trillions[Math.floor(Math.random() * trillions.length)],
qran = quadrillions[Math.floor(Math.random() * quadrillions.length)],
q2ran = quintillions[Math.floor(Math.random() * quintillions.length)],
sran = sextillions[Math.floor(Math.random() * sextillions.length)],
s2ran = septillions[Math.floor(Math.random() *  septillions.length)],
o3ran = octillions[Math.floor(Math.random() * octillions.length)],
nran = nonillions[Math.floor(Math.random() * nonillions.length)],
dran = decillions[Math.floor(Math.random() * decillions.length)];
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
if (random === 33) {text.innerHTML = num + bran + oran};
if (random === 34) {text.innerHTML = num + bran + tran};
if (random === 35) {text.innerHTML = num + bran + oran + tran};
if (random === 36) {text.innerHTML = num + bran + hran};;
if (random === 37) {text.innerHTML = num + bran + oran + hran};
if (random === 38) {text.innerHTML = num + bran + tran + hran};
if (random === 39) {text.innerHTML = num + bran + oran + tran + hran};
if (random === 40) {text.innerHTML = num + bran + t2ran};
if (random === 41) {text.innerHTML = num + bran + t2ran + oran};
if (random === 42) {text.innerHTML = num + bran + t2ran + tran};
if (random === 43) {text.innerHTML = num + bran + t2ran + oran + tran};
if (random === 44) {text.innerHTML = num + bran + t2ran + hran};
if (random === 45) {text.innerHTML = num + bran + t2ran + oran + hran};
if (random === 46) {text.innerHTML = num + bran + t2ran + tran + hran};
if (random === 47) {text.innerHTML = num + bran + t2ran + oran + tran + hran};
if (random === 48) {text.innerHTML = num + bran + mran};
if (random === 49) {text.innerHTML = num + bran + mran + oran};
if (random === 50) {text.innerHTML = num + bran + mran + tran};
if (random === 51) {text.innerHTML = num + bran + mran + oran + tran};
if (random === 52) {text.innerHTML = num + bran + mran + hran};
if (random === 53) {text.innerHTML = num + bran + mran + oran + hran};
if (random === 54) {text.innerHTML = num + bran + mran + tran + hran};
if (random === 55) {text.innerHTML = num + bran + mran + oran + tran + hran};
if (random === 56) {text.innerHTML = num + bran + mran + t2ran};
if (random === 57) {text.innerHTML = num + bran + mran + t2ran + oran};
if (random === 58) {text.innerHTML = num + bran + mran + t2ran + tran};
if (random === 59) {text.innerHTML = num + bran + mran + t2ran + oran + tran};
if (random === 60) {text.innerHTML = num + bran + mran + t2ran + hran};
if (random === 61) {text.innerHTML = num + bran + mran + t2ran + oran + hran};
if (random === 62) {text.innerHTML = num + bran + mran + t2ran + tran + hran};
if (random === 63) {text.innerHTML = num + bran + mran + t2ran + oran + tran + hran};
}
gen.onclick = function() {textResult()};
function textResult2() {
if (gen2 === "arras") {text.innerHTML = 