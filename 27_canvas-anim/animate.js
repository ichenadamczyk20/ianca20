// Team COIS :: Ian Chen-Adamczyk + Stella Oh
// SoftDev pd1
// K27 -- canvas based JS animation
// 2021-05-07w

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
var dvdButton = document.getElementById("buttonDvd"); // GET DVD BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON
var dvdimg = document.getElementById("logo-dvd"); // GET DVD IMAGE

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "#2a7be2";

var requestID;  //init global var for use with animation frames

// clear function
var clear = (e) => {
    console.log("clear invoked...");
    ctx.clearRect(0, 0, c.width, c.height); // clears the canvas
};

var radius = 0;
var growing = true;
var x = 0;
var y = 0;
var dx = 2;
var dy = 1;
var width = 100;
var height = 50;

var drawDot = () => {
    console.log("drawDot invoked...");
    // clears previous step function from the queue of functions for the next animation frame
    // so that step doesn't keep calling itself after we put another step in the queue
    // in case drawDot was called twice without calling stopIt
    window.cancelAnimationFrame(requestID);
    var step = () => {
        ctx.clearRect(0, 0, c.width, c.height); // clears the canvas
        ctx.beginPath(); // starts the path for the circle
        ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI); // makes the circle
        ctx.fill(); // renders the path
        if (radius > c.width / 2) growing = false; // if the circle is too big, stop growing
        if (radius < 1) growing = true; // if the circle is too small, start growing
        radius += growing * 2 - 1; // true * 2 - 1 => 1, false * 2 - 1 => -1
        requestID = window.requestAnimationFrame(step); // adds step to the queue for the next animation frame
        // each frame, step should be called exactly once
    };
    requestID = window.requestAnimationFrame(step); // starts the cycle of step calling itself each frame
};

var drawDvd = () => {
    console.log("drawDvd invoked...");
    // clears previous step function from the queue of functions for the next animation frame
    // so that step doesn't keep calling itself after we put another step in the queue
    // in case drawDot was called twice without calling stopIt
    window.cancelAnimationFrame(requestID);
    var step = () => {
        ctx.clearRect(0, 0, c.width, c.height); // clears the canvas
        ctx.drawImage(dvdimg, x, y, width, height); // draw dvd
        // move the dvd
        x += dx;
        y += dy;
        // if the x or y position is outside of the canvas borders, reverse the direction of the dvd
        // horizontal borders (if left edge of DVD is past the left border of canvas, or if the right edge of DVD is past the right border of canvas)
        if (x <= 0 || x + width >= c.width) dx *= -1;
        // similarly for vertical borders
        if (y <= 0 || y + height >= c.height) dy *= -1;
        requestID = window.requestAnimationFrame(step); // adds step to the queue for the next animation frame
        // each frame, step should be called exactly once
    };
    requestID = window.requestAnimationFrame(step); // starts the cycle of step calling itself each frame
};

var stopIt = () => {
    console.log("stopIt invoked...");
    console.log(requestID);
    window.cancelAnimationFrame(requestID); // stops step from being called and calling itself next frame
};

// sets the onclick events of each button to call the appropriate function
dotButton.addEventListener("click", drawDot);
dvdButton.addEventListener("click", drawDvd);
stopButton.addEventListener("click", stopIt);