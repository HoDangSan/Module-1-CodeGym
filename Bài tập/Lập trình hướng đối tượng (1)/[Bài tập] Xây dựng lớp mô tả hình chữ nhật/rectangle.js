function Rectangle(rx,ry,height,width) {
    this.height = height;
    this.width = width;
    this.rx = rx;
    this.ry = ry;
}
Rectangle.prototype.area = function(){
    return this.height * this.width;
}
Rectangle.prototype.perimeter = function(){
    return (this.height + this.width) * 2;
}
Rectangle.prototype.draw = function(context){
    context.fillStyle = "blue";
    context.fillRect(this.rx,this.ry,this.width,this.height);
}
Rectangle.prototype.setHeight = function(height){
    this.height = height;
}
Rectangle.prototype.setWidth =function(width){
    this.width = width;
}