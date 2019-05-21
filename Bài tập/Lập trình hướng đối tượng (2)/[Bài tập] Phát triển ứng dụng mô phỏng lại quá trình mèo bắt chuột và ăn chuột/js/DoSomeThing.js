let canvas;
let context;
let RatImg;
let rat = [];
let ratmove;
let cat;
let soundRat = new Audio();
let soundCat = new Audio();

soundRat.src = "sound/rat.mp3"
soundCat.src = "sound/cat.mp3"

function update(ratIndex) {
    ratIndex.sound(soundRat);
    ratIndex.move();
    ratIndex.checkCollision();
    ratIndex.draw(context);
}
document.addEventListener("keydown", catMove);

function catMove(event) {
    switch (event.keyCode) {
        case 37:
            cat.cx -= cat.speedMax;
            cat.sound(soundCat);
            break;
        case 38:
            cat.cy -= cat.speedMax;;
            cat.sound(soundCat);
            break;
        case 39:
            cat.cx += cat.speedMax;
            cat.sound(soundCat);
            break;
        case 40:
            cat.cy += cat.speedMax;
            cat.sound(soundCat);
            break;
        default:
    }
}

function updateAll() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    cat.draw(context);
    for (let i = 0; i < 100; i++) {
        update(rat[i]);
        if (rat[i].rx >= (cat.cx) && rat[i].rx <= (cat.cx + cat.width / 2) && rat[i].ry >= (cat.cy) && rat[i].ry <= (cat.cy + cat.height / 2)) {
            rat.splice(i, 1);
            cat.width += 1;
            cat.height += 1;
        }
    }
    if (rat.length === 0 || rat === undefined) {
        clearInterval(ratmove);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "red";
        context.font = "100px Georgia"
        context.fillText("You Win!", 180, 230);
    }
}


window.onload = function() {
    RatImg = document.getElementById("rat");
    CatImg = document.getElementById("cat");
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    cat = new Cat("Cat", 5, CatImg);
    for (let i = 0; i < 100; i++) {
        rat[i] = new Rat("Rat " + i, 1, RatImg);
    }
    ratmove = setInterval(updateAll, 10);
}