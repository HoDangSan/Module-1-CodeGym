let mygame;
let ball;
let player;
window.onload = function() {
    // New Mygame
    mygame = new MyGame();
    ball = new Ball();
    player = new Player();
    mygame.init();

    document.getElementById("again").onclick = function() {
        location.reload();
    }
}