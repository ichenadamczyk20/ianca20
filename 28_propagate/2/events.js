// Team COIS :: Ian Chen-Adamczyk + Stella Oh
// Softdev Period 1
// k28 -- Bubble Bubble Toil Trouble
// 2020-05-11

// demo 2
// JS event propagation

var tds = document.getElementsByTagName('td'); // gets the <td> elements in the document
var trs = document.getElementsByTagName('tr'); // gets the <tr> elements in the document
var table = document.getElementsByTagName('table')[0]; // gets first table element in the document

var clicky = function(e) {
  alert( this.innerHTML ); // alert element's contents
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky); // for each <td>, execute clicky when clicked
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky); // for each <tr>, execute clicky when clicked
}

table.addEventListener('click', clicky); // for the <table>, execute clicky when clicked


// Q: When user clicks on a cell, in what order will the pop-ups appear?

// First, the cell name appears.
// Then, the row of items that the cell is in is returned in html and in order from left to right
// Lastly, the entire table of all the items is returned in html

