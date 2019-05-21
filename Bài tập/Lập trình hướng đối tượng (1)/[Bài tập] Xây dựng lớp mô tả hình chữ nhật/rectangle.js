class Rectangle {
    constructor(rx, ry, height, width) {
        this.height = height;
        this.width = width;
        this.rx = rx;
        this.ry = ry;
    }

    area() {
        return this.height * this.width;
    }

    perimeter() {
        return (this.height + this.width) * 2;
    }

    draw(context) {
        context.fillStyle = "blue";
        context.fillRect(this.rx, this.ry, this.width, this.height);
    }

    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }
}