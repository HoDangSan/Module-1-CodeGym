function Rectangle(rx, ry, height, width) {
    this.height = height;
    this.width = width;
    this.rx = rx;
    this.ry = ry;

    this.area = function() {
        return this.height * this.width;
    }

    this.perimeter = function() {
        return (this.height + this.width) * 2;
    }

    this.draw = function(context) {
        context.fillStyle = "blue";
        context.fillRect(this.rx, this.ry, this.width, this.height);
    }

    this.setHeight = function(height) {
        this.height = height;
    }

    this.setWidth = function(width) {
        this.width = width;
    }
}