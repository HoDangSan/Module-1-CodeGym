let context;
let rectangle;
let canvas;
window.onload = function() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    rectangle = new Rectangle(10, 10, 100, 200);
    rectangle.draw(context);
    rectangle.setHeight(300);
    rectangle.setWidth(600);
    context.font = "30px Arial";
    context.fillText("Area: " + rectangle.area() + "   " + "Perimeter: " + rectangle.perimeter(), 10, 350);
}