// Team ohNo (Anya Zorin, Ian Chen-Adamczyk, Jessica Yeung)
// SoftDev pd 1
// K30 -- JSorcery
// 2021-05-16

// get the DOM objects for all relevant HTML elements
var c = document.querySelector("#slate");
var startButton = document.querySelector("#startAnim");
var stopButton = document.querySelector("#stopAnim");
var gballstart = document.getElementById("GBallStart");
var gballstop = document.getElementById("GBallStop");
var ctx = c.getContext("2d");

// state variables
var balls = []; // list of Ball objects and children objects
var requestID = 0;
var canvasFillColor = "#ffffff";

// definition of a Ball as an object-oriented class
function Ball(x, y, radius) {
    // set object's attributes for position, speed, and size
    this.x = x;
    this.y = y;
    this.dx = 2 * (Math.random() - 0.5);
    this.dy = 2 * (Math.random() - 0.5);
    this.radius = radius;
    // set object's methods
    this.render = function() {
        // render the ball
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        // move the ball
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        // check that the ball isn't going out of the canvas
        this.bounce();
    };
    this.checkCollision = function(otherBall) {
        // check if the ball is colliding with the provided ball
        if (((this.x - otherBall.x) ** 2 + (this.y - otherBall.y) ** 2) < (this.radius + otherBall.radius) ** 2) {
            return true;
        } else {
            return false;
        }
    };
    this.bounce = function() {
        // bounce the ball off the edge of the canvas
        if (this.x + this.radius >= c.width || this.x - this.radius <= 0) {
            this.dx *= -1;
        }
        if (this.y + this.radius >= c.height || this.y - this.radius <= 0) {
            this.dy *= -1;
        }
    };
    this.oncollide = function(otherBall) {
        // tPV is the vector that goes from the center of this ball to the center of the other ball
        // it is perpendicular to the tangent line at the point of contact
        var tPV = [this.x - otherBall.x, this.y - otherBall.y];
        // this gets the perpendicular slope of tPV
        var m = -1 / (tPV[1]  / tPV[0]);
        // uses linear algebra to reflect the vector (dx, dy) about the line y=mx
        // https://math.stackexchange.com/questions/525082/reflection-across-a-line explains the matrix
        var dx = ((1 - m * m) * this.dx + 2 * m * this.dy) / (1 + m * m);
        var dy = (2 * m * this.dx - (1 - m * m) * this.dy) / (1 + m * m);
        this.dx = dx;
        this.dy = dy;
    };
};

function ImageBall(x, y, radius) {
    Ball.call(this, x, y, radius);
    // set an additional attribute for the image to render
    this.img = new Image();
    this.img.src = "basketball.png";
    this.render = function() {
        // override's parent class's render method to show an image instead of a circle
        ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        this.bounce();
    };
};

function BasketBall(x, y, radius) {
    ImageBall.call(this, x, y, radius);
    // inherits all methods and attributes of ImageBall, but has a custom image
    this.img = new Image();
    this.img.src = "basketball.png";
};

function SoccerBall(x, y, radius) {
    ImageBall.call(this, x, y, radius);
    this.img = new Image();
    this.img.src = "soccerball.png";
};

function TennisBall(x, y, radius) {
    ImageBall.call(this, x, y, radius);
    this.img = new Image();
    this.img.src = "tennisball.png";
};

function EightBall(x, y, radius) {
    ImageBall.call(this, x, y, radius);
    this.img = new Image();
    this.img.src = "eightball.png";
    this.bounce = function() {
        // overrides the bounce method so that whenever the ball bounces off the canvas wall
        // the canvas bg color changes to a random hue with 50% saturation and lightness
        if (this.x + this.radius >= c.width || this.x - this.radius <= 0) {
            this.dx *= -1;
            canvasFillColor = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        }
        if (this.y + this.radius >= c.height || this.y - this.radius <= 0) {
            this.dy *= -1;
            canvasFillColor = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        }
    };
};

// main functions
var clear = (e) => {
    // console.log("Canvas cleared.");
    // fills the canvas with the color given by the state variable canvasFillColor
    ctx.fillStyle = canvasFillColor;
    ctx.beginPath();
    ctx.rect(0, 0, c.width, c.height);
    ctx.fill();
}

var init = () => {
    // generates the balls for the simulation
    balls = [];
    // generate for each row at y = 50, 200, 350, ...
    for (var y = 50; y < c.width - 50; y += 150) {
        // start at x = 50 in the given row
        for (var x = 50; x < c.width - 50; ) {
            // select a random Ball-descended object from the list
            var ballThing = [BasketBall, BasketBall, BasketBall, SoccerBall, SoccerBall, SoccerBall, TennisBall, TennisBall, TennisBall, EightBall, EightBall][Math.floor(11 * Math.random())];
            // generate a random radius from 30 to 50
            var radius = Math.random() * 20 + 30;
            // push to the list of ball objects
            balls.push(new ballThing(x, y, Math.random() * 20 + 30));
            // moves the "ball cursor" horizontally to make room for the other balls in the row
            x += radius + 80;
        }
    }
}

init();

var start = () => {
    // starts the animation of balls
    console.log("Animation in progress...");
    // clear the previous animation frame from the requests
    window.cancelAnimationFrame(requestID);
    // clear the previous frame
    clear();
    
    // render each ball
    for (var i = 0; i < balls.length; i++) {
        balls[i].render();
    }

    // check each ball for colliding with a different ball
    for (var i = 0; i < balls.length; i++) {
        for (var j = i + 1; j < balls.length; j++) {
            if (balls[i].checkCollision(balls[j])) {
                balls[i].oncollide(balls[j]);
                balls[j].oncollide(balls[i]);
            }
        }
    }

    // requests next animation frame
    requestID = window.requestAnimationFrame(start);
}

var stop = () => {
    console.log("Animation stopped");
    // cancels the previous animation frame from the requests
    window.cancelAnimationFrame(requestID);
}
///////////////////////////////////////////////////////////////////////////
var requestID2 = 0;
var counter = 0;
var counterB = true; //boolean for counter, true = growing, false = shrinking
var logo = new Image();
logo.src = "tennisball.png"
var dx = Math.random() * 7;
var dy = dx*Math.random()*2; 
var x = c.width / 2;
var y = c.height / 2;
var width;
var height;
var oldX;
var oldY;
var drawBall = () => {
    ctx.drawImage(logo, x, y, logo.width / 5, logo.height / 5);
    width = logo.width / 5;
    height = logo.height / 5;

    animateBall();
};

var animateBall = () => {
    clear()
    window.cancelAnimationFrame(requestID2);

    if (x + width >= c.width || x <= 0) {
      if (dx > 0) {
        dx = -dx-(counter);//adjust absolute value of speed by the counter
        height += 10;
        console.log("right"); //positive x speed, hit horizontal border
        oldX = x+width; //record position of ball when it last hit wall
        oldY = y;
      }
      else {
        dx = -dx+(counter);
        height -= 10;
        console.log("left"); //negative x speed, hit horizontal border
        oldX = x;
        oldY = y;
      }
    }
    if (y + height >= c.height || y <= 0) {
      if (dy > 0) {
        dy = -dy-(counter*2);
        width += 10;
        console.log("bot"); //negative y speed, hit vertical border
        oldX = x;
        oldY = y+height;
      }
      else {
        dy = -dy+(counter*2);
        width -= 10;
        console.log("top"); //positive y speed, hit vertical border
        oldX = x;
        oldY = y;
      }
    }

    ctx.drawImage(logo, x, y, width, height);

    //ctx.fillStyle = 'blue';
    //ctx.fill();
    //ctx.beginPath();
    //ctx.fillStyle = 'red';
    ctx.arc(x, y, width/2, 0, 2*Math.PI);
    //ctx.fill();
    //ctx.stroke();
    x = x + dx;
    y = y + dy;

    //ctx.strokeRect(oldX, oldY, 50, 50);

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(x+width/2, y+height/2); //line from last wall to current position
    ctx.lineTo(oldX, oldY); 
    ctx.stroke();

    requestID2 = window.requestAnimationFrame(animateBall);
    if (counterB) {
        counter += 0.001;//speed up
        if (counter > 1.2) {
            counterB = false;
            counter = 0;
        }
    }
    else {
        counter -= 0.002;//slow down
        if (counter < -1.2) {
            counterB = true;
            counter = 0;
        }
    }
    //console.log(counter);
};

var stopIt = () => {
    window.cancelAnimationFrame(requestID2);
};

// event handling
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
gballstart.addEventListener("click", drawBall);
gballstop.addEventListener("click", stopIt);