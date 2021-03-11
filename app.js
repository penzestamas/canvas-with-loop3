var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 30;
var positionX = 125;
var positionY = 50;
var padding = 5;
var red = 255;
var green = 79;
var blue = 120;

for (var i = 0; i < 6; i++) {
  positionX = 125;
  for (var rowItem = 0; rowItem < 6; rowItem++) {
    context.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
    context.fillRect(positionX, positionY, size, size);
    positionX += size + padding;
    red -= 7;
  }
  blue += 15;
  positionY += size + padding;
}