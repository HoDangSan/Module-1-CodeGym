function Cat(name, weight, CatImg) {
    this.CatImg = CatImg;
    this.name = name;
    this.weight = weight;
    this.speedMax = 10;
    this.status = true;
    this.cx = 255;
    this.cy = 200;
    this.width = 50;
    this.height = 50;
    this.sound = function() {
        soundCat.play();
    }

    this.draw = function(context) {
        context.drawImage(this.CatImg, this.cx, this.cy, this.width, this.height);
    }

}