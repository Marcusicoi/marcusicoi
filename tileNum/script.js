//Tile number generator.
//Always get the ids xD
const gen = document.getElementById('generate');
const text = document.getElementById('text');
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

function textResult() {
//Random Variables
var num = Math.floor(Math.random() * 999),
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
text.innerHTML = num + dran + nran + oran + s2ran + sran + q2ran + qran + t3ran + bran + mran + t2ran + oran + tran + hran;
}
gen.onclick = function() {textResult();};