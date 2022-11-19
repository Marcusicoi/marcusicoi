let digit = 4;
//Table 1
let Numbers1Array = ["Numbers", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion"];
let Units1Array = ["", "Un-", "Duo", "Tre-, Tres-", "Quattor-", "Quin-", "Sex, Ses-", "Octo-", "Novem-, Noven-"];
let Abb1Array = ["K", "U, M", "D, B", "T", "q", "Q", "s", "S", "O", "N"];
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
function createTable2(numbers, unit, digits, abbs) {
for £
return createTable([
  {number: 'Banana', unit: '3.04'},
  {number: 'Orange', unit: '2.56'},
  {number: 'Apple', unit: '1.45'}
],
['name', 'price'], ['Name', 'Price'])
};
createTable2();