class Ball {
    constructor() {
        this.context = mygame.context;
        this.x = 100;
        this.y = 100;
        this.speedX = 5;
        this.speedY = 5;
        this.radius = 10;
    }

    drawBall() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fillStyle = "#000000";
        this.context.fill();
        this.context.stroke();
    }

    ballMove() {
        if (this.x < 0 || this.x > 401 - this.radius)
            this.speedX = -this.speedX;
        if (this.y < 0) this.speedY = -this.speedY;
        if (this.y > 600) mygame.stop();
        this.x += this.speedX;
        this.y += this.speedY;
    }
}