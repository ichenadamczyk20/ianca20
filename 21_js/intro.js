/*
    Team COIS (Stella Oh + Ian Chen-Adamczyk)
    SoftDev
    K21 -- Get Scripty
    2021-04-09
    
Notes:
    - Semicolons after code blocks aren't necessary. However, there's a semicolon after the } in the function definition because it's a statement where we set a variable equal to the function.
    - fibR can take a long time to execute in some cases (at least on repl.it).
*/

// factI(n) returns factorial of n, computed iteratively
var factI = (n) => {
    var total = 1; // set default total to 1
    for (var i = 2; i <= n; i++) { // loop from 2 to n inclusive, no loop if n <= 1
        total *= i; // multiply total by each value of i
    }
    return total;
};

console.log("-- Iterative Factorial Test --");
console.log(factI(-1) + " should be 1");
console.log(factI(0) + " should be 1");
console.log(factI(1) + " should be 1");
console.log(factI(2) + " should be 2");
console.log(factI(3) + " should be 6");
console.log(factI(7) + " should be 5040");
console.log("\n");

// factR(n) returns factorial of n, computed recursively
var factR = (n) => {
    if (n < 1) return 1; 
    return n * factR(n - 1); // if n is not less than 1 then return n times the factorial of n-1 and continue until n < 1
};

console.log("-- Recursive Factorial Test --");
console.log(factR(-1) + " should be 1");
console.log(factR(0) + " should be 1");
console.log(factR(1) + " should be 1");
console.log(factR(2) + " should be 2");
console.log(factR(3) + " should be 6");
console.log(factR(7) + " should be 5040");
console.log("\n");

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

console.log("-- Iterative Fibonacci Sequence Test --");
console.log(fibI(-1) + " should be 0");
console.log(fibI(0) + " should be 0");
console.log(fibI(1) + " should be 1");
console.log(fibI(2) + " should be 1");
console.log(fibI(3) + " should be 2");
console.log(fibI(4) + " should be 3");
console.log(fibI(5) + " should be 5");
console.log(fibI(6) + " should be 8");
console.log(fibI(7) + " should be 13");
console.log("\n");

// fibR(n) returns the nth Fibonacci number, computed recursively
var fibR = (n) => {
    if (n <= 0) return 0; // base cases
    if (n == 1) return 1;
    return fibR(n - 1) + fibR(n - 2);
};

console.log("-- Recursive Fibonacci Sequence Test --");
console.log(fibR(-1) + " should be 0");
console.log(fibR(0) + " should be 0");
console.log(fibR(1) + " should be 1");
console.log(fibR(2) + " should be 1");
console.log(fibR(3) + " should be 2");
console.log(fibR(4) + " should be 3");
console.log(fibR(5) + " should be 5");
console.log(fibR(6) + " should be 8");
console.log(fibR(7) + " should be 13");
