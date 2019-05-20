let canvas;
let context;
let driverImg;
let driver;
let game;
let WIDTH = 25;
let HEIGHT = 50;
// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

let d;

function direction(event) {
    let key = event.keyCode;
    if (key === 37 && d !== "RIGHT") {
        left.play();
        d = "LEFT";
        rotate(d);
    } else if (key === 38 && d !== "DOWN") {
        d = "UP";
        up.play();
        rotate(d);
    } else if (key === 39 && d !== "LEFT") {
        d = "RIGHT";
        right.play();
        rotate(d);
    } else if (key === 40 && d !== "UP") {
        d = "DOWN";
        down.play();
        rotate(d);
    } else if (key === 13) location.reload();
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(driverImg, driver.x, driver.y, WIDTH, HEIGHT);
}

function rotate(d) {
    switch (d) {
        case "LEFT":
            driverImg.src = "image/driverLeft.png";
            WIDTH = 50;
            HEIGHT = 25;
            break;
        case "UP":
            driverImg.src = "image/driverTop.png";
            WIDTH = 25;
            HEIGHT = 50;
            break;
        case "RIGHT":
            driverImg.src = "image/driverRight.png";
            WIDTH = 50;
            HEIGHT = 25;
            break;
        case "DOWN":
            driverImg.src = "image/driverBottom.png";
            WIDTH = 25;
            HEIGHT = 50;
            break;
        default:
            break;
    }
}

function move() {
    if (d === "LEFT") driver.x -= driver.speedX;
    if (d === "UP") driver.y -= driver.speedX;
    if (d === "RIGHT") driver.x += driver.speedX;
    if (d === "DOWN") driver.y += driver.speedX;
}

function check() {
    if (driver.x < 0 || driver.x > (canvas.width - 50) || driver.y < 0 || driver.y > (canvas.height - 50)) {
        clearInterval(game);
        dead.play();
    }
}


function update() {
    move();
    check();
    draw();
}


window.onload = function() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    driverImg = document.getElementById("driver");
    driver = new Driver(200, 300);
    document.addEventListener("keydown", direction);
    game = setInterval(update, 10);
}