var tileCountX, tileCountY;
var intercol;
var amount;


function setup() {
  createCanvas(600, 5s00);
  noStroke();
}

function draw() {
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var colorsLeft = [];
  var colorsRight = [];
  
  // colors to interpolate between, per row
  colorMode(RGB, tileCountY, 255, 100);
  for (var col = 0; col < tileCountY; col++) {
      colorsLeft.push(color(0, 0, 0));
      colorsRight.push(color(col, 100, 50));
  }
  
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];
    
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      
      amount = gridX / tileCountX;
      intercol = lerpColor(col1, col2, amount);
      fill(intercol);
      
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      
      rect(posX, posY, tileWidth, tileHeight);
      
    }
  }
}