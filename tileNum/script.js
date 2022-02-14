//Tile number generator.
//Always get the ids xD
const gen = document.getElementById('generate');
const text = document.getElementById('text'); text.innerHTML = 1;
//Define some variables
var ones = ['U', 'D', 'T', 'q', 'Q', 's', 'S', 'O', 'N'],
ones2 = ['M', 'D', 'T', 'q', 'Q', 's', 'S', 'O', 'N'],
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
decillions = ['Vec', 'DVec', 'TVec', 'qVec', 'QVec', 'sVec', 'SVec', 'OVec', 'NVec'],
undecillions = ['Mec', 'DMec', 'TMec', 'qMec', 'QMec', 'sMec', 'SMec', 'OMec', 'NMec'],
duodecillions = ['Duec', 'DDuec', 'TDuec', 'qDuec', 'QDuec', 'sDuec', 'SDuec', 'ODuec', 'NDuec'],
tredecillions = ['Trec', 'DTrec', 'TTrec', 'qTrec', 'QTrec', 'sTrec', 'STrec', 'OTrec', 'NTrec'],
quattuordecillions = ['Tetc', 'DTetc', 'TTetc', 'qTetc', 'QTetc', 'sTetc', 'STetc', 'OTetc', 'NTetc'],
quintdecillions = ['Penc', 'DPenc', 'TPenc', 'qPenc', 'QPenc', 'sPenc', 'SPenc', 'OPenc', 'NPenc'],
sexdecillions = ['Hexc', 'DHexc', 'THexc', 'qHexc', 'QHexc', 'sHexc', 'SHexc', 'OHexc', 'NHexc'],
septemdecillions = ['Hepc', 'DHepc', 'THepc', 'qHepc', 'QHepc', 'sHepc', 'SHepc', 'OHepc', 'NHepc'],
octodecillions = ['Octc', 'DOctc', 'TOctc', 'qOctc', 'QOctc', 'sOctc', 'SOctc', 'OOctc', 'NOctc'],
novemdecillions = ['Ennc', 'DEnnc', 'TEnnc', 'qEnnc', 'QEnnc', 'sEnnc', 'SEnnc', 'OEnnc', 'NEnnc'],
vigintillions = ['Icos', 'DIcos', 'TIcos', 'qIcos', 'QIcos', 'sIcos', 'SIcos', 'OIcos', 'NIcos'],
unvigintillions = ['Dico', 'DDico', 'TDico', 'qDico', 'QDico', 'sDico', 'SDico', 'ODico', 'NDico'],
duovigintillions = ['Trio', 'DTrio', 'TTrio', 'qTrio', 'QTrio', 'sTrio', 'STrio', 'OTrio', 'NTrio'],
trevigintillions = ['Teto', 'DTeto', 'TTeto', 'qTeto', 'QTeto', 'sTeto', 'STeto', 'OTeto', 'NTeto'],
quattuorvigintillions = ['Peno', 'DPeno', 'TPeno', 'qPeno', 'QPeno', 'sPeno', 'SPeno', 'OPeno', 'NPeno'],
quintvigintillions = ['Hexo', 'DHexo', 'THexo', 'qHexo', 'QHexo', 'sHexo', 'SHexo', 'OHexo', 'NHexo'],
sexvigintillions = ['Hepto', 'DHepto', 'THepto', 'qHepto', 'QHepto', 'sHepto', 'SHepto', 'OHepto', 'NHepto'],
septemvigintillions = ['Octic', 'DOctic', 'TOctic', 'qOctic', 'QOctic', 'sOctic', 'SOctic', 'OOctic', 'NOctic'],
octovigintillions = ['Ennic', 'DEnnic', 'TEnnic', 'qEnnic', 'QEnnic', 'sEnnic', 'SEnnic', 'OEnnic', 'NEnnic'],
novemvigintillions = ['Trico', 'DTrico', 'TTrico', 'qTrico', 'QTrico', 'sTrico', 'STrico', 'OTrico', 'NTrico'],
trigintillions = ['Metco', 'DMetco', 'TMetco', 'qMetco', 'QMecto', 'sMecto', 'SMecto', 'OMecto', 'NMecto'],
untrigintillions = ['Dueco', 'DDueco', 'TDueco', 'qDueco', 'QDueco', 'sDueco', 'SDueco', 'ODueco', 'NDueco'];

function textResult() {
//Random Variables
var num = Math.floor(Math.random() * 999),
o2ran = ones2[Math.floor(Math.random() * ones2.length)],
o = ones[Math.floor(Math.random() * ones.length)],
t = tens[Math.floor(Math.random() * tens.length)],
h = hundreds[Math.floor(Math.random() * hundreds.length)],
k = thousands[Math.floor(Math.random() * thousands.length)],
m = millions[Math.floor(Math.random() * millions.length)],
b = billions[Math.floor(Math.random() * billions.length)],
tri = trillions[Math.floor(Math.random() * trillions.length)],
q = quadrillions[Math.floor(Math.random() * quadrillions.length)],
Q = quintillions[Math.floor(Math.random() * quintillions.length)],
s = sextillions[Math.floor(Math.random() * sextillions.length)],
S = septillions[Math.floor(Math.random() *  septillions.length)],
O = octillions[Math.floor(Math.random() * octillions.length)],
n = nonillions[Math.floor(Math.random() * nonillions.length)],
d = decillions[Math.floor(Math.random() * decillions.length)],
ud = undecillions[Math.floor(Math.random() * undecillions.length)],
dd = duodecillions[Math.floor(Math.random() * duodecillions.length)],
td = tredecillions[Math.floor(Math.random() * tredecillions.length)],
qd = quattuordecillions[Math.floor(Math.random() * quattuordecillions.length)],
Qd = quintdecillions[Math.floor(Math.random() * quintdecillions.length)],
sd = sexdecillions[Math.floor(Math.random() * sexdecillions.length)],
Sd = septemdecillions[Math.floor(Math.random() * septemdecillions.length)],
od = octodecillions[Math.floor(Math.random() * octodecillions.length)],
nd = novemdecillions[Math.floor(Math.random() * novemdecillions.length)],
v = vigintillions[Math.floor(Math.random() * vigintillions.length)],
uv = unvigintillions[Math.floor(Math.random() *  unvigintillions.length)],
dv = duovigintillions[Math.floor(Math.random() * duovigintillions.length)],
tv = trevigintillions[Math.floor(Math.random() * trevigintillions.length)],
qv = quattuorvigintillions[Math.floor(Math.random() * quattuorvigintillions.length)],
Qv = quintvigintillions[Math.floor(Math.random() * quintvigintillions.length)],
sv = sexvigintillions[Math.floor(Math.random() * sexvigintillions.length)],
Sv = septemvigintillions[Math.floor(Math.random() * septemvigintillions.length)],
ov = octovigintillions[Math.floor(Math.random() * octovigintillions.length)],
nv = novemvigintillions[Math.floor(Math.random() * novemvigintillions.length)],
tr = trigintillions[Math.floor(Math.random() * trigintillions.length)],
utr = untrigintillions[Math.floor(Math.random() * untrigintillions.length)];
text.innerHTML = (text.innerHTML * 2);
  //num + utr + tr + nv + ov + Sv + sv + Qv + qv + tv + dv + uv + v + nd + od + Sd + sd + Qd + qd + td + dd + ud + d + n + O + S + s + Q + q + tri + b + m + k + o + t + h;
function createAbbreviation(x,m){
  var main = ones[x%10] + tens[Math.floor(x/10)%10] + hundreds[Math.floor(x/100)%10];
  if(m == 0){
    if(x < 10){
      return o2ran[x]
    } else if(x < 1000){
      return main;
    } else {
      return createAbbreviation(Math.floor(x/1000),m+1) + main;
    }
  }
  if(m > 0){
    if(x == 1){
      return stages[m]
    } else if(x < 1000) {
      return main + stages[m];
    } else {
      return createAbbreviation(Math.floor(x/1000),m+1) + main + stages[m];
    }
  }
}
}
gen.onclick = function() {textResult();};