// Team COIS :: Ian Chen-Adamczyk + Stella Oh
// Softdev Period 1
// k28 -- Bubble Bubble Toil Trouble
// 2020-05-11

// demo 4
// JS event propagation

// Name the collections of TDs, TRs, and overall table
var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];


var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  // The first handler, which is the html of the table shown, 
  // is returned and the following handlers are not returned
  // e.stopPropagation();
};


//Q: Does the order in which the event listeners are attached matter?
// The order in which the event listeners are attached does not matter
// the order the event handler is executed only depends on the order of capturing and bubbling
// in this case, the event handlers are executed only according to the capturing order
// (because of the "true" at the end of each addEventListener)
for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky, true);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky, true);
}

table.addEventListener('click', clicky, true);

