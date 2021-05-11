// Team COIS :: Ian Chen-Adamczyk + Stella Oh
// Softdev Period 1
// k28 -- Bubble Bubble Toil Trouble
// 2020-05-11

// demo 1
// JS event propagation

var tds = document.getElementsByTagName('td'); // gets all <td> elements in the document

var clicky = function(e) {
  alert( this.innerHTML ); // alerts element's contents
};

for (var x=0; x < tds.length; x++) { // iterates through every <td> element...
  tds[x].addEventListener('click', clicky); // ... and tells them to run clicky when they are clicked.
}
