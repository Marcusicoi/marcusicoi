function Level1Table(length, width) {
  var L1Table = document.getElementById("Level1Table");
  var table = document.createElement('TABLE');
  table.border = '1';
  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
  for (var x = 0; x < length; x++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (var y = 0; y < width; y++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode("Cell " + x + "," + y));
      tr.appendChild(td);
    }
  }
  L1Table.appendChild(table);
}
Level1Table(10, 4);