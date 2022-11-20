let BGcolor = ["#80CC84", "#66C258", "#CFBA4A", "#4C3EB8", "#6D18B4", "#B41818", "#18B1B4", "#B41852", "#373737", "#CCCCCC"];
let TTcolor = ["#A0FFA5", "#27FF00", "#FFD800", "#0C00FF", "#8B00FF", "red", "#00FCFF", "#FF0060", "#777777", "#EEEEEE"];
function headcolor() { return `style="background-color:#CCCCCC; color:#EEEEEE"` };
function colors(n) { return `style="background-color:${BGcolor[n]};color:${TTcolor[n]}"` };
//
function headcode() {
  return `
  <table>
  <tr>
    <th ${headcolor()}>Numbers</th>
    <th ${headcolor()}>Units</th>
    <th ${headcolor()}>Digits</th>
    <th ${headcolor()}>Abbreviated</th>
  </tr>
  `;           
};
function code(color, number, unit, digit, abb) {
  return `
  <tr>
    <th ${colors(color)}>${number}</th>
    <th ${colors(color)}>${unit}</th>
    <th ${colors(color)}>10^${digit}</th>
    <th ${colors(color)}>${abb}</th>
  </tr>
  `
};
function numbercode(type) {
  let lctype = type.toLowerCase();
  return [type, `Du${lctype}`, `Tru${lctype}`, `Quadri${lctype}`, `Quinti${lctype}`, `Ses${lctype}`, `Septi${lctype}`, `Octi${lctype}`, `Nona${lctype}`];
};
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
  Row1.push(code(CLnum1, Numbers1Array[i], Units1Array[i], Digit1, Abbs1Array[i]));
};
ID1.innerHTML = headcode() + Row1.join(" ");
//Table 2
let Numbers2Array = ["Decillion", "Vigintillion", "Trigintillion", "Quadragintillion", "Quinquagintillion", "Sexagintillion", "Septuagintillion", "Octagintillion", "Nonagintillion"];
let Units2Array = ["Deci-", "Viginti-", "Triginta-", "Quadraginta-", "Quinquaginta-", "Sexaginta-", "Septuaginta-", "Octaginta-", "Nonaginta-"];
let Digit2 = 3;
let Abbs2Array = ["D", "V", "TR", "QU", "QI", "Sx", "Sp", "Oc", "No"];
let CLnum2 = -1;
let Row2 = [];
let ID2 = document.getElementById("Level2Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 10; Digit2 + 3; Digit2 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum2 += op2 } while (op === 0);
  Row2.push(code(CLnum2, Numbers2Array[i], Units2Array[i], Digit2, Abbs2Array[i]));
};
ID2.innerHTML = headcode() + Row2.join(" ");
//Table 3
let Numbers3Array = ["Centillion", "Ducentillion", "Trecentillion", "Quadringentillion", "Quingentillion", "Sescentillion", "Septingentillion", "Octingentillion", "Nonagentillion"];
let Units3Array = ["Centi-", "Ducenti-", "Trecenti-", "Quadringenti-", "Quingenti-", "Sescenti-", "Septingenti-", "Octingenti-", "Nonagenti-"];
let Digit3 = 3;
let Abbs3Array = ["Ce", "Du", "Te", "Qd", "Qn", "Sc", "St", "Ot", "Ng"];
let CLnum3 = -1;
let Row3 = [];
let ID3 = document.getElementById("Level3Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 100; Digit3 + 3; Digit3 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum3 += op2 } while (op === 0);
  Row3.push(code(CLnum3, Numbers3Array[i], Units3Array[i], Digit3, Abbs3Array[i]));
};
ID3.innerHTML = headcode() + Row3.join(" ");
//Table 4
let Numbers4Array = ["Millillion", "Dumillillion", "Trimillillion", "Quadrimillilliion", "Quinmillillion", "Sexmillillion", "Septimillillion", "Octimillillion", "Nonimillillion"];
let Units4Array = ["Milli-", "Dumilli-", "Trimilli-", "Quadrimilli-", "Quinmilli-", "Sexmilli-", "Septimilli-", "Octimilli-", "Nonimilli-"];
let Digit4 = 3;
let Abbs4Array = ["ML", "DL", "TL", "qL", "QL", "sL", "SL", "OL", "NL"];
let CLnum4 = -1;
let Row4 = [];
let ID4 = document.getElementById("Level4Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 1000; Digit4 + 3; Digit4 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum4 += op2 } while (op === 0);
  Row4.push(code(CLnum4, Numbers4Array[i], Units4Array[i], Digit4, Abbs4Array[i]));
};
ID4.innerHTML = headcode() + Row4.join(" ");
//Table 5
let Numbers5Array = ["Myrillion", "Dumyrillion", "Trumyrillion", "Quadrimyrilliion", "Quintimyrilillion", "Sesmyrillion", "Septimyrillion", "Octimyrillion", "Nonamyrillion"];
let Units5Array = ["Myrilli-", "Dumyrilli-", "Trumyrilli-", "Quadrimyrilli-", "Quintimyrilli-", "Sesmyrilli-", "Septimyrilli-", "Octimyrilli-", "Nonamyrilli-"];
let Digit5 = 3;
let Abbs5Array = ["My", "Dy", "Ty", "qy", "Qy", "sy", "Sy", "Oy", "Ny"];
let CLnum5 = -1;
let Row5 = [];
let ID5 = document.getElementById("Level5Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 10000; Digit5 + 3; Digit5 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum5 += op2 } while (op === 0);
  Row5.push(code(CLnum5, Numbers5Array[i], Units5Array[i], Digit5, Abbs5Array[i]));
};
ID5.innerHTML = headcode() + Row5.join(" ");
//Table 6
let Numbers6Array = ["Micrillion", "Dumicrillion", "Trumicrillion", "Quadrimicrilliion", "Quintimicrlillion", "Sesmicrllion", "Septamicrllion", "Octamicrillion", "Nonamicrillion"];
let Units6Array = ["Micrilli-", "Dumicrilli-", "Trumicrilli-", "Quadrimicrilli-", "Quintimicrilli-", "Sesmicrlli-", "Septamicrilli-", "Octamicrilli-", "Nonamicrilli-"];
let Digit6 = 3;
let Abbs6Array = ["Mcr", "Dcr", "Tcr", "qcr", "Qcr", "scr", "Scr", "Ocr", "Ncr"];
let CLnum6 = -1;
let Row6 = [];
let ID6 = document.getElementById("Level6Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 100000; Digit6 + 3; Digit6 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum6 += op2 } while (op === 0);
  Row6.push(code(CLnum6, Numbers6Array[i], Units6Array[i], Digit6, Abbs6Array[i]));
};
ID6.innerHTML = headcode() + Row6.join(" ");
//Table 7
let Numbers7Array = ["Nanillion", "Dunanillion", "Trunanillion", "Quadrinanilliion", "Quintinanillion", "Sesnanillion", "Septinanillion", "Octonanillion", "Nonananillion"];
let Units7Array = ["Nanilli-", "Dunanilli-", "Trunanilli-", "Quadrinanilli-", "Quintinanilli-", "Sesnanilli-", "Septinanilli-", "Octonanilli-", "Nonananilli-"];
let Digit7 = 3;
let Abbs7Array = ["Nan", "Dan", "Tan", "qan", "Qan", "san", "San", "Oan", "Nal"];
let CLnum7 = -1;
let Row7 = [];
let ID7 = document.getElementById("Level7Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 1000000; Digit7 + 3; Digit7 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum7 += op2 } while (op === 0);
  Row7.push(code(CLnum7, Numbers7Array[i], Units7Array[i], Digit7, Abbs7Array[i]));
};
ID7.innerHTML = headcode() + Row7.join(" ");
//Table 8
let Digit8 = 3;
let Abbs8Array = ["Pic", "Dic", "Tic", "qic", "Qic", "sic", "Sic", "Oic", "Nic"];
let CLnum8 = -1;
let Row8 = [];
let ID8 = document.getElementById("Level8Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 100000000; Digit8 + 3; Digit8 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum8 += op2 } while (op === 0);
  Row8.push(code(CLnum8, numbercode(, Units8Array[i], Digit8, Abbs8Array[i]));
};
ID8.innerHTML = headcode() + Row8.join(" ");
//Not a table, but a random generator
document.getElementById("button").onclick = function() {
  function choose(argument) {
    return argument[Math.floor(Math.random() * argument.length)];
  };
  let Abbs0Array = ["U", "D", "T", "q", "Q", "s", "S", "O", "N"];
  let result = 
      (Math.floor(Math.random() * 998) + 1) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(Abbs8Array) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(Abbs7Array) + 
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(Abbs6Array) +    
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(Abbs5Array) + 
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(Abbs4Array) + 
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array);
  document.getElementById("result").innerHTML = result;   
};