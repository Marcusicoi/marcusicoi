//Tile number generator.
//Always get the ids xD
const text = document.getElementById('text');
//Define some variables
var num = 0;
var ones = ['U', 'D', 'T', 'q', 'Q', 's', 'S', 'O', 'N'],
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