//Table 1
let Numbers1Array = ["Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion"];
let Units1Array = ["", "Un-", "Duo", "Tre-, Tres-", "Quattor-", "Quin-", "Sex, Ses-", "Sept-", "Octo-", "Novem-, Noven-"];
let Abbs1Array = ["K", "U, M", "D, B", "T", "q", "Q", "s", "S", "O", "N"];
let Row1 = [];
let ID1 = document.getElementById("Level1Table");
for (let i = 0; i < 10; i++) {
  let op = 0;
  do { op += 1; digit += (3 * op) } while (op === 11);
  Row1.push(`
  <tr>
    <th>${Numbers1Array[i]}</th>
    <th>${Units1Array[i]}</th>
    <th>10^${digit}</th>
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

let Digits2Array = [33, 63, 93, 123, 151, 191, 211, 241, 271]
let Abbs2Array = ["D", "V", "TR", "QU", "QI", "Sx", "Sp", "Oc", "No"];
let Row2 = [];
let ID2 = document.getElementById("Level2Table");
for (let i = 0; i < 9; i++) {
  let op = 0;
  do { op += 10; digit + 3; digit += (3 * op) } while (op === 21);
  Row2.push(`
  <tr>
    <th>${Numbers2Array[i]}</th>
    <th>${Units2Array[i]}</th>
    <th>${Digits2Array[i]}</th>
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
let Numbers3Array = ["Decillion", "Vigintillion", "Trigintillion", "Quadragintillion", "Quinquagintillion", "Sexagintillion", "Septuagintillion", "Octagintillion", "Nonagintillion"];
let Units3Array = ["Deci-", "Viginti-", "Triginta-", "Quadraginta-", "Quinquaginta-", "Sexaginta-", "Septuaginta-", "Octaginta-", "Nonaginta-"];
let Abbs3Array = ["D", "V", "TR", "QU", "QI", "Sx", "Sp", "Oc", "No"];
let Row3 = [];
let ID3 = document.getElementById("Level3Table");
for (let i = 0; i < 9; i++) {
  Row2.push(`
  <tr>
    <th>${Numbers3Array[i]}</th>
    <th>${Units3Array[i]}</th>
    <th>${digit}</th>
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