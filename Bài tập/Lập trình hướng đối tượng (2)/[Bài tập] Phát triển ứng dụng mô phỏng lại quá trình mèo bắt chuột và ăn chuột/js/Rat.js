function Rat(name, weight, RatImg) {
    this.RatImg = RatImg;
    this.width = 50;
    this.height = 50;
    this.rx = Math.floor(Math.random() * (canvas.width - 2 * this.width)) + this.width;
    this.ry = Math.floor(Math.random() * (canvas.height - 2 * this.height)) + this.height;
    this.name = name;
    this.weight = weight;
    this.speedX = Math.floor(Math.random() * 10) - 5;
    this.speedY = Math.floor(Math.random() * 10) - 5;
    this.left;
    this.top;
    this.right;
    this.bottom;
    this.status = true;

    this.sound = function(soundRat) {
        soundRat.play();
    }

    this.draw = function(context) {
        context.drawImage(this.RatImg, this.rx, this.ry, this.width, this.height);
    }

    this.move = function() {
        this.rx += this.speedX;
        this.ry += this.speedY;
        this.left = this.rx + this.width / 2;
        this.top = this.ry + this.height / 2;
        this.right = this.rx + this.width / 2;
        this.bottom = this.ry + this.height / 2;
    }

    this.checkCollision = function() {
        if (this.left <= 0 || this.right >= canvas.width) this.speedX = -(this.speedX);
        if (this.top <= 0 || this.bottom >= canvas.height) this.speedY = -(this.speedY);
        // console.log(this.speedx + " " + this.speedy);
    }
}