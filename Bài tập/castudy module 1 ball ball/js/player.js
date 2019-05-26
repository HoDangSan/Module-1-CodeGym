class Player {
    constructor() {
        this.context = mygame.context;
        this.x = 100;
        this.y = 480;
        this.width = 100;
        this.height = 20;
    }

    drawPlayer() {
        this.context.fillStyle = "blue";
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
}