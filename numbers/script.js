let BGcolor = ["#80CC84", "#66C258", "#CFBA4A", "#4C3EB8", "#6D18B4", "#B41818", "#18B1B4", "#B41852", "#373737", "#CCCCCC"];
let TTcolor = ["#8FE493", "#7EEF6C", "#FFE65D", "#534CE3", "#861EDE", "#DE1E1E", "#1EDBDE", "#DE1E65", "#444444", "#DDDDDD"];
function colors(n) { return `style="background-color:${BGcolor[n]};color:${TTcolor[n]}"` };
//Table 1
let Numbers1Array = ["Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion"];
let Units1Array = ["", "Un-", "Duo", "Tre-, Tres-", "Quattor-", "Quin-", "Sex, Ses-", "Sept-", "Octo-", "Novem-, Noven-"];
let Digit1 = 0;
let Abbs1Array = ["K", "U, M", "D, B", "T", "q", "Q", "s", "S", "O", "N"];
let CLnum1 = -1;
let Row1 = [];
let ID1 = document.getElementById("Level1Table");
for (let i = 0; i < 10; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 1; Digit1 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum1 += op2 } while (op2 === 0);
  Row1.push(`
  <tr>
    <th ${colors(CLnum1)}>${Numbers1Array[i]}</th>
    <th>${Units1Array[i]}</th>
    <th>10^${Digit1}</th>
    <th>${Abbs1Array[i]}</th>
  </tr>
  `);
};
ID1.innerHTML = `
  <table>
  <tr>
    <th>Numbers</th>
    <th>Units</th>
    <th>Digits</th>
    <th>Abbreviated</th>
  </tr>
` + Row1.join(" ");
//Table 2
let Numbers2Array = ["Decillion", "Vigintillion", "Trigintillion", "Quadragintillion", "Quinquagintillion", "Sexagintillion", "Septuagintillion", "Octagintillion", "Nonagintillion"];
let Units2Array = ["Deci-", "Viginti-", "Triginta-", "Quadraginta-", "Quinquaginta-", "Sexaginta-", "Septuaginta-", "Octaginta-", "Nonaginta-"];
let Digit2 = 3;
let Abbs2Array = ["D", "V", "TR", "QU", "QI", "Sx", "Sp", "Oc", "No"];
let BGnum2 = -1;
let Row2 = [];
let ID2 = document.getElementById("Level2Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 10; Digit2 + 3; Digit2 += (3 * op) } while (op === 0);
  do { op2 += 1; BGnum2 += op2 } while (op === 0);
  Row2.push(`
  <tr>
    <th style="background-color:${BGcolor[BGnum2]}">${Numbers2Array[i]}</th>
    <th>${Units2Array[i]}</th>
    <th>10^${Digit2}</th>
    <th>${Abbs2Array[i]}</th>
  </tr>
  `);
};
ID2.innerHTML = `
  <table>
  <tr>
    <th>Numbers</th>
    <th>Units</th>
    <th>Digits</th>
    <th>Abbreviated</th>
  </tr>
` + Row2.join(" ");
//Table 3
let Numbers3Array = ["Centillion", "Ducentillion", "Trecentillion", "Quadringentillion", "Quingentillion", "Sescentillion", "Septingentillion", "Octingentillion", "Nonagentillion"];
let Units3Array = ["Centi-", "Ducenti-", "Trecenti-", "Quadringenti-", "Quingenti-", "Sescenti-", "Septingenti-", "Octingenti-", "Nonagenti-"];
let Digit3 = 3;
let Abbs3Array = ["Ce", "Du", "Te", "Qd", "Qn", "Sc", "St", "Ot", "Ng"];
let Row3 = [];
let ID3 = document.getElementById("Level3Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 100; Digit3 + 3; Digit3 += (3 * op) } while (op === 0);
  Row3.push(`
  <tr>
    <th>${Numbers3Array[i]}</th>
    <th>${Units3Array[i]}</th>
    <th>10^${Digit3}</th>
    <th>${Abbs3Array[i]}</th>
  </tr>
  `);
};
ID3.innerHTML = `
  <table>
  <tr>
    <th>Numbers</th>
    <th>Units</th>
    <th>Digits</th>
    <th>Abbreviated</th>
  </tr>
` + Row3.join(" ");
//Table 4
let Numbers4Array = ["Millillion", "Dumillillion", "Trimillillion", "Quadrimillilliion", "Quinmillillion", "Sexmillillion", "Septimillillion", "Octimillillion", "Nonimillillion"];
let Units4Array = ["Milli-", "Dumilli-", "Trimilli-", "Quadrimilli-", "Quinmilli-", "Sexmilli-", "Septimilli-", "Octimilli-", "Nonimilli-"];
let Digit4 = 3;
let Abbs4Array = ["ML", "DL", "TL", "qL", "QL", "sL", "SL", "OL", "NL"];
let Row4 = [];
let ID4 = document.getElementById("Level4Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1000; Digit4 + 3; Digit4 += (3 * op) } while (op === 0);
  Row4.push(`
  <tr>
    <th>${Numbers4Array[i]}</th>
    <th>${Units4Array[i]}</th>
    <th>10^${Digit4}</th>
    <th>${Abbs4Array[i]}</th>
  </tr>
  `);
};
ID4.innerHTML = `
  <table>
  <tr>
    <th>Numbers</th>
    <th>Units</th>
    <th>Digits</th>
    <th>Abbreviated</th>
  </tr>
` + Row4.join(" ");