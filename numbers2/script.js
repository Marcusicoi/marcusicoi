let digit = 4;
//Table 1
let Numbers1Array = ["Numbers", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion"];
let Units1Array = ["", "", "Un-", "Duo", "Tre-, Tres-", "Quattor-", "Quin-", "Sex, Ses-", "Sept-", "Octo-", "Novem-, Noven-"];
let Abbs1Array = ["", "K", "U, M", "D, B", "T", "q", "Q", "s", "S", "O", "N"];
let Row1 = [];
let ID1 = document.getElementById("Level1Table");
for (let i = 0; i < 11; i++) {
  let X = 0;
  do { X+=1 ;digit += (3 * X)} while (X === 11)
digit -= 3
  Row1.push(`
  <tr>
    <th>${Numbers1Array[i]}</th>
    <th>${Units1Array[i]}</th>
    <th>${digit}</th>
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