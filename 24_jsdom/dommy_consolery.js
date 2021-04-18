
// Team iNeedaBuddy :: Ian Chen-Adamczyk, William Li
// SoftDev pd 1
// K24 -- Getting more comfortable with the dev console and the DOM
// 2021-04-18
// --------------------------------------------------

//open up the connected html file then open up the console using option command j or the windows counterpart
//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO"); // sends "AYO" to console

var i = "hello"; // sets variable i to "hello"
var j = 20; // sets variable j to 20


//assign an anonymous fxn to a var
var f = function(x) {
    var j = 30; // sets variable j to 30 in the scope of the function; j is still 20 outside of the function
    return j + x; // returns x + 30
};
// declares a function f that adds 30 to the arguments

//instantiate an object
var o = { 'name' : 'Thluffy',
    age : 15,
    items : [10, 20, 30, 40],
    morestuff : {a : 1, b : 'ayo'},
    func : function(x) {
        return x + 30;
    }
};
//creates an object called o with properties name, age, items, morestuff and func.
//func is defined as a function like f in the example above
// object properties can be accessed like this:
// o.name
// o["age"]
// o.items[5]
// o.func()

//(define fact (lambda (n) ...)
var fact = function(n) {
    var prod = 1;
    for ( ; n > 1 ; n--){
        prod = prod * n;
    }
    return prod;
};
//function fact returns the factorial of the argument.
//the for loop doesnt require an index declartion because n is already defined. Possible for there to be missing statement in the for loop

//(define fact (lambda (n) ...)
var factR = function(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factR(n-1);
    }
};
//function factR is a recursive version of the factorial function


var addItem = function(text) {
    var list = document.getElementById("thelist"); //gets the element with html id "thelist"
    var newitem = document.createElement("li"); //creates a new element with <li> class that is blank
    newitem.innerHTML = text; //sets the innerHTML of the new element to the argument text
    list.appendChild(newitem); //adds to the list variable what new list item was added in the newitem function
};


var removeItem = function(n) {
    var listitems = document.getElementsByTagName('li'); //gets a list of all li elements in the html
    // sets listitems by reference, not by value. Changes to listitems will affect the actual html because it is a reference
    listitems[n].remove(); //removes the nth html element in listitems
};


var red = function() {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
        items[i].classList.add('red');
    }
};
//sets list item colors to red except those that are blue. This is because the css has an order of precedents where blue has higher precedent over red. 

var stripe = function() {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
        if (i % 2 == 0){
            items[i].classList.add('red');
        } else {
            items[i].classList.add('blue');
        }
    }
};
//should make even elements of the list red and odd blue to create stripe pattern but css heiarchy doesn't makes the color not change as they should

var buttonCallback = function(e) {
    console.log("\n\nhere comes e...");
    console.log(e); //the MouseEvent from when the user clicks on the button
    console.log("\n\nhere comes 'this'...");
    console.log(this); //the button element that triggered the event
}


var b = document.getElementById('b'); //finds the element with id 'b', the button
b.addEventListener('click', buttonCallback); //when the user clicks on the button, function buttonCallback is called


var redCallback = function(e) {
    console.log("\n\n---redCallback invoked---")
    console.log(this);
    this.classList.add('red');
}

var thelist = document.getElementById("thelist");
var litems = thelist.children; //gets all of the children li elements of the #thelist element and iterates through them
for(var i = 0; i < litems.length; i++) {
    litems[i].addEventListener('click', redCallback); //when the user clicks on the li element, the "red" class is added the element
    litems[i].addEventListener('mouseover', function(e){
        console.log("user has moved into this:" + this);
        this.classList.toggle('green');
    });
    //when the user mouses over the li element, the "green" class is toggled
    litems[i].addEventListener('mouseout', function(e){
        console.log("user has moved out of this:" + this);
        this.classList.toggle('blue');
    });
    //when the user mouses out of the li element, the "blue" class is toggled
}
