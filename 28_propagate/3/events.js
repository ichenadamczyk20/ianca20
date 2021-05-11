// Team COIS :: Ian Chen-Adamczyk + Stella Oh
// Softdev Period 1
// k28 -- Bubble Bubble Toil Trouble
// 2020-05-11

// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML ); // alert element's contents
  //Q: What will happen when next line is uncommented?
  // The first handler, which is the html of the table shown, 
  // is returned and the following handlers are not returned
  //e.stopPropagation();
};

// no parameter 
for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

// the "true" tells the table to execute clicky in the capturing phase
// default, which is "false" or no parameter tells it to execute clicky in the bubbling phase
table.addEventListener('click', clicky, true); 

// Q: When user clicks on a cell, in what order will the pop-ups appear?

// Table in html, cell item, row in html