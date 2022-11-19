let digit = 4;
//Table 1
let Numbers1Array = ["Numbers", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion"];
let Units1Array = ["", "Un-", "Duo", "Tre-, Tres-", "Quattor-", "Quin-", "Sex, Ses-", "Octo-", "Novem-, Noven-"];
let Abbs1Array = ["K", "U, M", "D, B", "T", "q", "Q", "s", "S", "O", "N"];
//The function
function createTable(array, type, title) {
  let body = document.getElementById('Level1Table');
  let tbl = document.createElement('table');
  tbl.border = 1;
  let thead = document.createElement('thead');
  let thr = document.createElement('tr');
  title.forEach((title) => {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(title));
    thr.appendChild(th);
  });
  thead.appendChild(thr);
  tbl.appendChild(thead);
  let tbdy = document.createElement('tbody');
  let tr = document.createElement('tr');
  array.forEach((object) => {
    let tr = document.createElement('tr');
    type.forEach((type) => {
      var td = document.createElement('td');
      td.appendChild(document.createTextNode(object[type]));
      tr.appendChild(td);
    });
    tbdy.appendChild(tr);    
  });
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
  return tbl;
};
let row = [];
for (let i = 0; i < 11; i++) {
  let N = Numbers1Array[i], U = Units1Array[i], A = Abbs1Array[i];
  digit += (3 * i)
  row.push({number: N, unit: U, digits: digit, abbs: A})
};
createTable([{number:], ['number', 'unit', 'digits', 'abbs'], ['Numbers', 'Units', 'Digits', 'Abbreviations'])