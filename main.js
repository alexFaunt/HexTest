
var $hex = $('<div class="hex"/>');
var $row = $('<div class="row"/>');
var $body = $('body');

var addGrid = function (columns, hexes) {
  var rows = [];
  var $grid = $('<div class="hex-grid"/>');

  while (hexes) {
    var $rowClone = $row.clone();
    var items;

    if (columns % 2) {
      items = (rows.length + 1) % 2 ? (columns + 1) / 2 : (columns - 1) / 2;
    }
    else {
      items = columns / 2;
    }

    items = items > hexes ? hexes : items;

    for (var i = 0; i < items; i += 1) {
      $rowClone.append($hex.clone());
      hexes -= 1;
    }
    rows.push($rowClone);
  }

  var rowClass = rows.length % 2 ? 'odd' : 'even';

  $grid.addClass('hex-cols-' + columns + ' ' + 'hex-rows-' + rowClass).append(rows);

  $body.append($grid);
};

var addTriangle = function (fillColoumns, pageColumns) {
  var rows = [];
  var $triangle = $('<div class="hex-triangle"/>');

  var hexes = 0;
  var remainingCols = fillColoumns + 1;

  while (remainingCols-- > 1) {

    var row = $row.clone();
    var hexesInCol = remainingCols % 2 ? (remainingCols + 1) / 2 : remainingCols / 2;

    for (var i = 0; i < hexesInCol; i += 1) {
      row.append($hex.clone());
    }

    if (rows.length) {
      var row2 = row.clone(true);
      rows.unshift(row2);
    }

    rows.push(row);

  }

  $triangle.addClass('hex-cols-' + pageColumns).append(rows);
  $body.append($triangle);

};


addGrid(7, 22);

addTriangle(5, 7);