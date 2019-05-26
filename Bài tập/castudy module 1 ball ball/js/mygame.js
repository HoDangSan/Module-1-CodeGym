class MyGame {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
    }

    init() {
        this.intervalDrawMyGame = setInterval(updateMyGame, 50);
        document.addEventListener("mousemove", mouseMoveHandler, false);
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    stop() {
        clearInterval(this.intervalDrawMyGame);
        this.clear();
        setTimeout(gameOver, 100);
    }
}