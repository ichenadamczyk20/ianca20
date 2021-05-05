// Team Hugs and Buddies :: Ian Chen-Adamczyk, Benjamin Gallai
// SoftDev pd 1
// K24 -- I See a Red Door...
// 2021-05-05
// --------------------------------------------------

// state variable
var state = "box";
// retrieve node in DOM via ID
var c = document.getElementById("slate");
// instantiate a CanvasRenderingContext2d
var ctx = c.getContext("2d");
function clearCanvas(e) {
    // pretty self-explanatory, clears the canvas
    // tells it to draw a rectangle at the top-left corner with the canvas's width and height
    ctx.clearRect(0, 0, c.width, c.height);
}

function toggle(e) {
    // uses a ternary operator
    // (p) ? (value if p is true) : (value if p is false)
    state = (state === "box") ? "dot" : "box";
}

function draw(e) {
    if (state === "box") {
        // draw a red rectangle
        ctx.fillStyle = "#ff0000";
        // e is the event when the mouse is clicked
        // e.offsetX and e.offsetY is the position of the mouse click
        ctx.fillRect(e.offsetX, e.offsetY, 100, 200);
    } else {
        // draw a black dot
        ctx.fillStyle = "#000000";
        // this tells the context to start a new path
        // a path can only have one color
        ctx.beginPath();
        // first two arguments are the center
        // third argument is the radius
        // fourth and fifth arguments are the starting and ending angles of the arc in radians
        ctx.arc(e.offsetX, e.offsetY, 30, 0, 2 * Math.PI);
        // makes a filled in circle
        ctx.fill();
    }
}