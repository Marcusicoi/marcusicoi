function Level1Table(length, width) {
  let L1Table = document.getElementById("Level1Table");
  let NumbersArray = [
    "Numbers", 
    "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", 
    "Sextillion", "Septillion", "Octillion", "Nonillion"
  ];
  let table = document.createElement('TABLE');
  table.border = '1';
  let tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
  for (let x = 0; x < length; x++) {
    let tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (let y = 0; y < width; y++) {
      let td = document.createElement('TD');
      td.appendChild(document.createTextNode(NumbersArray[x] + "," + y));
      tr.appendChild(td);
    }
  }
  L1Table.appendChild(table);
}
Level1Table(11, 4);