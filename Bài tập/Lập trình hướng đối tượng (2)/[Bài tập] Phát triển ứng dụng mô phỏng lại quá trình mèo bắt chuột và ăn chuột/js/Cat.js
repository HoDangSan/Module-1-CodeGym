class Cat {
    constructor(name, weight, CatImg) {
        this.CatImg = CatImg;
        this.name = name;
        this.weight = weight;
        this.speedMax = 10;
        this.status = true;
        this.cx = 255;
        this.cy = 200;
        this.width = 50;
        this.height = 50;
    }

    sound() {
        soundCat.play();
    }

    draw(context) {
        context.drawImage(this.CatImg, this.cx, this.cy, this.width, this.height);
    }

}