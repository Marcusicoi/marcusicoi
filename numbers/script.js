let BGcolor = ["#80CC84", "#66C258", "#CFBA4A", "#4C3EB8", "#6D18B4", "#B41818", "#18B1B4", "#B41852", "#373737", "#CCCCCC"];
let TTcolor = ["#A0FFA5", "#27FF00", "#FFD800", "#0C00FF", "#8B00FF", "red", "#00FCFF", "#FF0060", "#777777", "#EEEEEE"];
function headcolor() { return `style="background-color:#CCCCCC; color:#EEEEEE"` };
function colors(n) { return `style="background-color:${BGcolor[n]};color:${TTcolor[n]}"` };
//Code
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
//
function numbercode(type) {
  let lctype = type.toLowerCase();
  return [type, `Du${lctype}`, `Tru${lctype}`, `Quadri${lctype}`, `Quinti${lctype}`, `Ses${lctype}`, `Septi${lctype}`, `Octin${lctype}`, `Nona${lctype}`];
};
function numbercodeplus(type) {
  let lctype = type.toLowerCase();
  return [`Deci${lctype}`, `Viginti${lctype}`, `Triginti${lctype}`, `Quadraginti${lctype}`, `Quinquaginti${lctype}`, `Sexaginti${lctype}`,  `Septuaginti${lctype}`, `Octaginti${lctype}`, `Nonaginti${lctype}`];
};
function abbcode(type) {
  let lctype = type.toLowerCase();
  let lcrptype = lctype.replace(lctype.charAt(0), "");
  return [type, `D${lcrptype}`, `T${lcrptype}`, `q${lcrptype}`, `Q${lcrptype}`, `s${lcrptype}`, `S${lcrptype}`, `O${lcrptype}`, `N${lcrptype}`];
};
function abbcodeplus(type) {
  let lctype = type.toLowerCase();
  let lcrptype = lctype.replace(lctype.charAt(0), "");
  return [`Dc${lcrptype}`, `Vg${lcrptype}`, `Tg${lcrptype}`, `Qg${lcrptype}`, `Qq${lcrptype}`, `Sg${lcrptype}`, `Sa${lcrptype}`, `Og${lcrptype}`, `Nn${lcrptype}`];
};
function abbcodeplusplus(type) {
  let lctype = type.toLowerCase();
  let lcrptype = lctype.replace(lctype.charAt(0), "");
  return [`Cen${lcrptype}`, `Duc${lcrptype}`, `Trc${lcrptype}`, `Qrg${lcrptype}`, `Qng${lcrptype}`, `Ssc${lcrptype}`, `Otg${lcrptype}`, `Nng${lcrptype}`];
};
function abbcode2(type) {
  return [type, `D${type}`, `T${type}`, `q${type}`, `Q${type}`, `s${type}`, `S${type}`, `O${type}`, `N${type}`];
};
function digitcomma(n) {
  return n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
function digitzeros(n) {
  let zeros = [];
  for (let i = 0; i < (n - 1); i++) {
    zeros.push("000,")
  };
  zeros.push("000,003");
  let x = zeros.join("");
  return [`3,${x}`, `6,${x}`, `9,${x}`, `12,${x}`, `15,${x}`, `18,${x}`, `21,${x}`, `24,${x}`, `27,${x}`];
};
function choose(argument) {
  return argument[Math.floor(Math.random() * argument.length)];
};
//
let Abbs0Array = ["U", "D", "T", "q", "Q", "s", "S", "O", "N"];
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
  Row3.push(code(CLnum3, Numbers3Array[i], Units3Array[i], digitcomma(Digit3), Abbs3Array[i]));
};
ID3.innerHTML = headcode() + Row3.join(" ");
//Table 4
let Numbers4Array = ["Millillion", "Dumillillion", "Trimillillion", "Quadrimillilliion", "Quinmillillion", "Sexmillillion", "Septimillillion", "Octimillillion", "Nonimillillion"];
let Units4Array = ["Milli-", "Dumilli-", "Trimilli-", "Quadrimilli-", "Quinmilli-", "Sexmilli-", "Septimilli-", "Octimilli-", "Nonimilli-"];
let Digit4 = 3;
let CLnum4 = -1;
let Row4 = [];
let ID4 = document.getElementById("Level4Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 1000; Digit4 + 3; Digit4 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum4 += op2 } while (op === 0);
  Row4.push(code(CLnum4, Numbers4Array[i], Units4Array[i], digitcomma(Digit4), abbcode("ML")[i]));
};
ID4.innerHTML = headcode() + Row4.join(" ");
//Table 5
let Digit5 = 3;
let CLnum5 = -1;
let Row5 = [];
let ID5 = document.getElementById("Level5Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 10000; Digit5 + 3; Digit5 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum5 += op2 } while (op === 0);
  Row5.push(code(CLnum5, numbercode("Myrilion")[i], numbercode("Myrilli-")[i], digitcomma(Digit5), abbcode("My")[i]));
};
ID5.innerHTML = headcode() + Row5.join(" ");
//Table 6
let Digit6 = 3;
let CLnum6 = -1;
let Row6 = [];
let ID6 = document.getElementById("Level6Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 1000000; Digit6 + 3; Digit6 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum6 += op2 } while (op === 0);
  Row6.push(code(CLnum6, numbercode("Micrillion")[i], numbercode("Micrilli-")[i], digitcomma(Digit6), abbcode("Mcr")[i]));
};
ID6.innerHTML = headcode() + Row6.join(" ");
//Table 7
let Digit7 = 3;
let CLnum7 = -1;
let Row7 = [];
let ID7 = document.getElementById("Level7Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 1000000000; Digit7 + 3; Digit7 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum7 += op2 } while (op === 0);
  Row7.push(code(CLnum7, numbercode("Nanillion")[i], numbercode("Nanilli-")[i], digitcomma(Digit7), abbcode("Nai")[i]));
};
ID7.innerHTML = headcode() + Row7.join(" ");
//Table 8
let Digit8 = 3;
let CLnum8 = -1;
let Row8 = [];
let ID8 = document.getElementById("Level8Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  let op2 = 0;
  do { op += 1000000000000; Digit8 + 3; Digit8 += (3 * op) } while (op === 0);
  do { op2 += 1; CLnum8 += op2 } while (op === 0);
  Row8.push(code(CLnum8, numbercode("Picillion")[i], numbercode("Picilli-")[i], digitcomma(Digit8), abbcode("Pic")[i]));
};
ID8.innerHTML = headcode() + Row8.join(" ");
//Table 9
let CLnum9 = -1;
let Row9 = [];
let ID9 = document.getElementById("Level9Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum9 += op } while (op === 0);
  Row9.push(code(CLnum9, numbercode("Femtillion")[i], numbercode("Femtilli-")[i], digitzeros(4)[i], abbcode("Fmt")[i]));
};
ID9.innerHTML = headcode() + Row9.join(" ");
//Table 10
let CLnum10 = -1;
let Row10 = [];
let ID10 = document.getElementById("Level10Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum10 += op } while (op === 0);
  Row10.push(code(CLnum10, numbercode("Attillion")[i], numbercode("Attilli-")[i], digitzeros(5)[i], abbcode("Att")[i]));
};
ID10.innerHTML = headcode() + Row10.join(" ");
//Table 11
let CLnum11 = -1;
let Row11 = [];
let ID11 = document.getElementById("Level11Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum11 += op } while (op === 0);
  Row11.push(code(CLnum11, numbercode("Zeptillion")[i], numbercode("Zeptilli-")[i], digitzeros(6)[i], abbcode("Zpt")[i]));
};
ID11.innerHTML = headcode() + Row11.join(" ");
//Table 12
let CLnum12 = -1;
let Row12 = [];
let ID12 = document.getElementById("Level12Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum12 += op } while (op === 0);
  Row12.push(code(CLnum12, numbercode("Yoctillion")[i], numbercode("Yoctilli-")[i], digitzeros(7)[i], abbcode("Yct")[i]));
};
ID12.innerHTML = headcode() + Row12.join(" ");
//Table 13
let CLnum13 = -1;
let Row13 = [];
let ID13 = document.getElementById("Level13Table");
for (let i = 0; i < 9; i++) {
  let op = 0
  do { op += 1; CLnum13 += op } while (op === 0);
  Row13.push(code(CLnum13, numbercode("Xonillion")[i], numbercode("Xonilli-")[i], digitzeros(8)[i], abbcode("Xni")[i]));
};
ID13.innerHTML = headcode() + Row13.join(" ");
//Table 14
let CLnum14 = -1;
let Row14 = [];
let ID14 = document.getElementById("Level14Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum14 += op } while (op === 0);
  Row14.push(code(CLnum14, numbercode("Vecillion")[i], numbercode("Vecilli-")[i], digitzeros(9)[i], abbcode("Vec")[i]));
};
ID14.innerHTML = headcode() + Row14.join(" ");
//Table 15
let CLnum15 = -1;
let Row15 = [];
let ID15 = document.getElementById("Level15Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum15 += op } while (op === 0);
  Row15.push(code(CLnum15, numbercode("Mecillion")[i], numbercode("Mecilli-")[i], digitzeros(10)[i], abbcode("Mci")[i]));
};
ID15.innerHTML = headcode() + Row15.join(" ");
//Table 16
let CLnum16 = -1;
let Row16 = [];
let ID16 = document.getElementById("Level16Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum16 += op } while (op === 0);
  Row16.push(code(CLnum16, numbercode("Duecillion")[i], numbercode("Duecilli-")[i], digitzeros(11)[i], abbcode2("Duc")[i]));
};
ID16.innerHTML = headcode() + Row16.join(" ");
//Table 17
let CLnum17 = -1;
let Row17 = [];
let ID17 = document.getElementById("Level17Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum17 += op } while (op === 0);
  Row17.push(code(CLnum17, numbercode("Trecillion")[i], numbercode("Trecilli-")[i], digitzeros(12)[i], abbcode2("Tuc")[i]));
};
ID17.innerHTML = headcode() + Row17.join(" ");
//Table 18
let CLnum18 = -1;
let Row18 = [];
let ID18 = document.getElementById("Level18Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum18 += op } while (op === 0);
  Row18.push(code(CLnum18, numbercode("Tetrecillion")[i], numbercode("Tetrecilli-")[i], digitzeros(13)[i], abbcode2("Tec")[i]));
};
ID18.innerHTML = headcode() + Row18.join(" ");
//Table 19
let CLnum19 = -1;
let Row19 = [];
let ID19 = document.getElementById("Level19Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum19 += op } while (op === 0);
  Row19.push(code(CLnum19, numbercode("Pentecillion")[i], numbercode("Pentecilli-")[i], digitzeros(14)[i], abbcode2("Pec")[i]));
};
ID19.innerHTML = headcode() + Row19.join(" ");
//Table 20
let CLnum20 = -1;
let Row20 = [];
let ID20 = document.getElementById("Level20Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum20 += op } while (op === 0);
  Row20.push(code(CLnum20, numbercode("Hexecillion")[i], numbercode("Hexecilli-")[i], digitzeros(15)[i], abbcode2("Hxc")[i]));
};
ID20.innerHTML = headcode() + Row20.join(" ");
//Table 21
let CLnum21 = -1;
let Row21 = [];
let ID21 = document.getElementById("Level21Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum21 += op } while (op === 0);
  Row21.push(code(CLnum21, numbercode("Heptecillion")[i], numbercode("Heptecilli-")[i], digitzeros(16)[i], abbcode2("Hpc")[i]));
};
ID21.innerHTML = headcode() + Row21.join(" ");
//Table 22
let CLnum22 = -1;
let Row22 = [];
let ID22 = document.getElementById("Level22Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum22 += op } while (op === 0);
  Row22.push(code(CLnum22, numbercode("Octecillion")[i], numbercode("Octecilli-")[i], digitzeros(17)[i], abbcode2("Otc")[i]));
};
ID22.innerHTML = headcode() + Row22.join(" ");
//Table 23
let CLnum23 = -1;
let Row23 = [];
let ID23 = document.getElementById("Level23Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum23 += op } while (op === 0);
  Row23.push(code(CLnum23, numbercode("Ennecillion")[i], numbercode("Enneecilli-")[i], digitzeros(18)[i], abbcode2("Enc")[i]));
};
ID23.innerHTML = headcode() + Row23.join(" ");
//Table 24
let CLnum24 = -1;
let Row24 = [];
let ID24 = document.getElementById("Level24Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum24 += op } while (op === 0);
  Row24.push(code(CLnum24, numbercode("Icosillion")[i], numbercode("Icosilli-")[i], digitzeros(19)[i], abbcode2("Ics")[i]));
};
ID24.innerHTML = headcode() + Row24.join(" ");
//Table 25
let CLnum25 = -1;
let Row25 = [];
let ID25 = document.getElementById("Level25Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum25 += op } while (op === 0);
  Row25.push(code(CLnum25, numbercode("Meicosillion")[i], numbercode("Meicosilli-")[i], digitzeros(20)[i], abbcode2("Mcs")[i]));
};
ID25.innerHTML = headcode() + Row25.join(" "); 
//Table 26
let CLnum26 = -1;
let Row26 = [];
let ID26 = document.getElementById("Level26Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum26 += op } while (op === 0);
  Row26.push(code(CLnum26, numbercode("Dueicosillion")[i], numbercode("Dueicosilli-")[i], digitzeros(21)[i], abbcode2("Dis")[i]));
};
ID26.innerHTML = headcode() + Row26.join(" ");
//Table 27
let CLnum27 = -1;
let Row27 = [];
let ID27 = document.getElementById("Level27Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum27 += op } while (op === 0);
  Row27.push(code(CLnum27, numbercode("Trioicosillion")[i], numbercode("Trioicosilli-")[i], digitzeros(22)[i], abbcode2("Toc")[i]));
};
ID27.innerHTML = headcode() + Row27.join(" ");
//Table 28
let CLnum28 = -1;
let Row28 = [];
let ID28 = document.getElementById("Level28Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum28 += op } while (op === 0);
  Row28.push(code(CLnum28, numbercode("Tetraicosillion")[i], numbercode("Tetraicosilli-")[i], digitzeros(23)[i], abbcode2("Ttc")[i]));
};
ID28.innerHTML = headcode() + Row28.join(" ");
//Table 29
let CLnum29 = -1;
let Row29 = [];
let ID29 = document.getElementById("Level29Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum29 += op } while (op === 0);
  Row29.push(code(CLnum29, numbercode("Penteicosillion")[i], numbercode("Penteicosilli-")[i], digitzeros(24)[i], abbcode2("Ptc")[i]));
};
ID29.innerHTML = headcode() + Row29.join(" ");
//Table 30
let CLnum30 = -1;
let Row30 = [];
let ID30 = document.getElementById("Level30Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum30 += op } while (op === 0);
  Row30.push(code(CLnum30, numbercode("Hexeicosillion")[i], numbercode("Hexeicosilli-")[i], digitzeros(25)[i], abbcode2("Hec")[i]));
};
ID30.innerHTML = headcode() + Row30.join(" ");
//Table 31
let CLnum31 = -1;
let Row31 = [];
let ID31 = document.getElementById("Level31Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum31 += op } while (op === 0);
  Row31.push(code(CLnum31, numbercode("Hepteicosillion")[i], numbercode("Hepteicosilli-")[i], digitzeros(26)[i], abbcode2("Hpc")[i]));
};
ID31.innerHTML = headcode() + Row31.join(" "); 
//Table 32
let CLnum32 = -1;
let Row32 = [];
let ID32 = document.getElementById("Level32Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum32 += op } while (op === 0);
  Row32.push(code(CLnum32, numbercode("Octeicosillion")[i], numbercode("Octeicoslli-")[i], digitzeros(27)[i], abbcode2("Oec")[i]));
}; 
ID32.innerHTML = headcode() + Row32.join(" ");
//Table 33
let CLnum33 = -1;
let Row33 = [];
let ID33 = document.getElementById("Level33Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum33 += op } while (op === 0);
  Row33.push(code(CLnum33, numbercode("Enneicosillion")[i], numbercode("Enneicosilli-")[i], digitzeros(28)[i], abbcode2("Enc")[i]));
};
ID33.innerHTML = headcode() + Row33.join(" ");
//Table 34
let CLnum34 = -1;
let Row34 = [];
let ID34 = document.getElementById("Level34Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum34 += op } while (op === 0);
  Row34.push(code(CLnum34, numbercode("Triacontillion")[i], numbercode("Triacontilli-")[i], digitzeros(29)[i], abbcode2("Tco")[i]));
};
ID34.innerHTML = headcode() + Row34.join(" ");
//Table 35
let CLnum35 = -1;
let Row35 = [];
let ID35 = document.getElementById("Level35Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum35 += op } while (op === 0);
  Row35.push(code(CLnum35, numbercode("Tetracontillion")[i], numbercode("Tetracontilli-")[i], digitzeros(39)[i], abbcode2("Trc")[i]));
};
ID35.innerHTML = headcode() + Row35.join(" ");
//Table 36
let CLnum36 = -1;
let Row36 = [];
let ID36 = document.getElementById("Level36Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum36 += op } while (op === 0);
  Row36.push(code(CLnum36, numbercode("Pentacontillion")[i], numbercode("Pentacontilli-")[i], digitzeros(49)[i], abbcode2("Pnc")[i]));
};
ID36.innerHTML = headcode() + Row36.join(" ");
//Table 36
let CLnum37 = -1;
let Row37 = [];
let ID37 = document.getElementById("Level37Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum37 += op } while (op === 0);
  Row37.push(code(CLnum37, numbercode("Hexacontillion")[i], numbercode("Hexacontilli-")[i], digitzeros(59)[i], abbcode2("Hac")[i]));
};
ID37.innerHTML = headcode() + Row37.join(" ");
//Table 38
let CLnum38 = -1;
let Row38 = [];
let ID38 = document.getElementById("Level38Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum38 += op } while (op === 0);
  Row38.push(code(CLnum38, numbercode("Heptacontillion")[i], numbercode("Heptacontilli-")[i], digitzeros(69)[i], abbcode2("Hpn")[i]));
};
ID38.innerHTML = headcode() + Row38.join(" ");
//Table 3
let CLnum39 = -1;
let Row39 = [];
let ID39 = document.getElementById("Level39Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum39 += op } while (op === 0);
  Row39.push(code(CLnum39, numbercode("Octacontillion")[i], numbercode("Octacontilli-")[i], digitzeros(79)[i], abbcode2("Occ")[i]));
};
ID39.innerHTML = headcode() + Row39.join(" ");
//Table 40
let CLnum40 = -1;
let Row40 = [];
let ID40 = document.getElementById("Level40Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum40 += op } while (op === 0);
  Row40.push(code(CLnum40, numbercode("Ennacontillion")[i], numbercode("Ennacontilli-")[i], digitzeros(89)[i], abbcode2("Eac")[i]));
};
ID40.innerHTML = headcode() + Row40.join(" ");
//Table 41
let CLnum41 = -1;
let Row41 = [];
let ID41 = document.getElementById("Level41Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 1; CLnum41 += op } while (op === 0);
  Row41.push(code(CLnum41, numbercode("Hectillion")[i], numbercode("Hectilli-")[i], digitzeros(99)[i], abbcode2("Het")[i]));
};
ID41.innerHTML = headcode() + Row41.join(" ");
//Not a table, but a random generator
document.getElementById("button").onclick = function() {
  let result = 
      (Math.floor(Math.random() * 998) + 1) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Het")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Eac")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Occ")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Hpn")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Hac")) + 
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Pnc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Trc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Tco")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Enc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Oec")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Hpc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Hec")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Ptc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Ttc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Toc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Dis")) + 
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Mcs")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Ics")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Enc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Otc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Hpc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Hxc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Pec")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Tec")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Tuc")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode2("Duc")) + 
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Mci")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Vec")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Xni")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Yct")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Zpt")) + 
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Att")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Fmt")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Pic")) +
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Nai")) + 
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("Mcr")) +    
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("My")) + 
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array) + choose(abbcode("ML")) + 
      choose(Abbs0Array) + choose(Abbs2Array) + choose(Abbs3Array);
  document.getElementById("result").innerHTML = result;   
};