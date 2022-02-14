//Tile number generator.
//Always get the ids xD
const gen = document.getElementById('generate');
const gen2 = document.getElementById('generate2');
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

function textResult2() {
//Random Variables
var o2ran = ones2[Math.floor(Math.random() * ones2.length)],
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
//"if" As Always.
if (gen2.value === "O") {text.innerHTML = num + o2ran};
}
but.onclick = function() {textResult2();};