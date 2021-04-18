// Team iNeedaBuddy :: Ian Chen-Adamczyk, William Li
// SoftDev pd 1
// K23 -- Basic functions in JavaScript
// 2021-04-15
// --------------------------------------------------

// CARRY OVER YOUR BEST JS fxns here
// factI(n) returns factorial of n, computed iteratively
var factI = (n) => {
    var total = 1; // set default total to 1
    for (var i = 2; i <= n; i++) { // loop from 2 to n inclusive, no loop if n <= 1
        total *= i; // multiply total by each value of i
    }
    return total;
};

// factR(n) returns factorial of n, computed recursively
var factR = (n) => {
    if (n < 1) return 1; 
    return n * factR(n - 1); // if n is not less than 1 then return n times the factorial of n-1 and continue until n < 1
};

// fibI(n) returns the nth Fibonacci number, computed iteratively
var fibI = (n) => {
    var a = 0; // variable for the -1th element
    var b = 0; // variable for the 0th element
    var next = 1; // variable for the 1th element, the element after the one to be returned
    for (var i = 1; i <= n; i++) { // i is the element number b will be at the end of the iteration
        a = b; // inch a, b, and total down the list
        b = next;
        next = a + b;
    }
    return b;
};

// fibR(n) returns the nth Fibonacci number, computed recursively
var fibR = (n) => {
    if (n <= 0) return 0; // base cases
    if (n == 1) return 1;
    return fibR(n - 1) + fibR(n - 2);
};

// ~~~ NEXT STEPS  ~~~
// as a duo...
// pair programming style


// Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.
var gcd = (a, b) => {
    var smaller;
    var commonD = 0; // default return value for when a and/or b is 0
    if (Math.abs(a) < Math.abs(b)) { // for negative cases, mod will return zero regardless of negative or positive so we want the iteration to have a range with max of the number with smaller magnitude 
        smaller = Math.abs(a);
    } else {
        smaller = Math.abs(b);
    }
    for (var i = 0; i < smaller; i++) { // gcd will never be larger than the smaller value of the two
        if (a % i == 0 && b % i == 0) { // iterates through the loop and finds the values where the remainder is zero for both a and b
            commonD = i;
        }
    }
    return commonD;
};

console.log(gcd(30, 18) + " should be 6");
console.log(gcd(72, 96) + " should be 24");
console.log(gcd(-16, -24) + " should be 8");
console.log(gcd(0, 5) + " should be 0");
console.log(gcd(15, -25) + " should be 5");
console.log(gcd(0, 0) + " should be 0");

// Develop, then implement randomStudent(), which returns a randomly selected name from a list.
var randomStudent = () => {
    var min = 0; // inclusive
    var max = studentList.length; // exclusive
    var index = Math.floor(max * Math.random() + min); // Math.random() selects from 0 inclusive to 1 exclusive.
    return studentList[index];
};

// You may want to create helper functions or external list variables here.
studentList = ["Amelia", "Alfie", "Ava", "Archie", "Alexander", "Alice", "Amy", "Aaron", "Anna", "Alex"];
console.log("Three random students from the list: ")
console.log(randomStudent());
console.log(randomStudent());
console.log(randomStudent());

// Do whatever you think is needed. Think: S I M P L E. Think: S M A R T.
