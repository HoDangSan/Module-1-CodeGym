let canvas;
let context;
let driverImg;
let rockImg;
let driver;
let rock = [];
let lever1;
let lever2;
let lever3;
let lever4;
let lever5;
let lever6;
let lever7;
let lever8;
let game;
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
    context.drawImage(driverImg, driver.x, driver.y, driver.width, driver.height);
    for (let i = 0; i < 10; i++) {
        context.drawImage(rockImg, rock[i].x, rock[i].y, rock[i].width, rock[i].height);
        if (driver.x >= (rock[i].x - rock[i].width / 2) && driver.x <= (rock[i].x + rock[i].width) && driver.y >= (rock[i].y - rock[i].height / 2) && driver.y <= (rock[i].y + rock[i].height)) {
            clearInterval(game);
            dead.play();
        }
    }
}

function rotate(d) {
    switch (d) {
        case "LEFT":
            driverImg.src = "image/driverLeft.png";
            driver.width = 50;
            driver.height = 25;
            break;
        case "UP":
            driverImg.src = "image/driverTop.png";
            driver.width = 25;
            driver.height = 50;
            break;
        case "RIGHT":
            driverImg.src = "image/driverRight.png";
            driver.width = 50;
            driver.height = 25;
            break;
        case "DOWN":
            driverImg.src = "image/driverBottom.png";
            driver.width = 25;
            driver.height = 50;
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
    if (driver.x < 0 || driver.x > (canvas.width - driver.width) || driver.y < 3 || driver.y > (canvas.height - driver.height)) {
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
    rockImg = document.getElementById("rock");
    driver = new Driver(200, 300, 25, 50);
    for (let i = 0; i < 10; i++) {
        rock[i] = new Rock(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 500), Math.floor(Math.random() * 50) + 50, Math.floor(Math.random() * 50) + 50);
    }
    document.addEventListener("keydown", direction);
    game = setInterval(update, 10);
    lever1 = setTimeout(function() {
        driver.speedX += 1;
        driver.speedY += 1;
    }, 10000);
    lever2 = setTimeout(function() {
        driver.speedX += 1;
        driver.speedY += 1;
    }, 5000);
}