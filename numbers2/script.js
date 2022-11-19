function createTable(objectArray, fields, fieldTitles) {
  let body = document.getElementsById('Level1Table')[0];
  let tbl = document.createElement('table');
  tbl.border = 1;
  let thead = document.createElement('thead');
  let thr = document.createElement('tr');
  fieldTitles.forEach((fieldTitle) => {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(fieldTitle));
    thr.appendChild(th);
  });
  thead.appendChild(thr);
  tbl.appendChild(thead);

  let tbdy = document.createElement('tbody');
  let tr = document.createElement('tr');
  objectArray.forEach((object) => {
    let tr = document.createElement('tr');
    fields.forEach((field) => {
      var td = document.createElement('td');
      td.appendChild(document.createTextNode(object[field]));
      tr.appendChild(td);
    });
    tbdy.appendChild(tr);    
  });
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
  return tbl;
}

createTable([
  {name: 'Banana', price: '3.04'},
  {name: 'Orange', price: '2.56'},
  {name: 'Apple', price: '1.45'}
],
['name', 'price'], ['Name', 'Price']);