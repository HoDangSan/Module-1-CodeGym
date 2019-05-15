let _context;
let _rectangle;
let _canvas;
window.onload = function(){
    _canvas = document.getElementById("myCanvas");
    _context = _canvas.getContext("2d");
    _rectangle = new Rectangle(10,10,100,200);
    _rectangle.draw(_context);
    _rectangle.setHeight(300);
    _rectangle.setWidth(600);
    _context.font = "30px Arial";
    _context.fillText("Area: " + _rectangle.area() + "   " + "Perimeter: " + _rectangle.perimeter(),10,350);
}