var stepSize = 10;
var minLength = 200;
var angleCount = 4;

var posX, posY, posXcross, posYcross;
var angle;
var direction;
var reachedBorder;
var posCrossMemory = [];

var N = 0;
var E = 1;
var S = 2;
var W = 3;


function setup() {
  createCanvas(700, 800);
  colorMode(HSL, 360, 100, 100, 100);
  background(100, 10, 97, 100);
  strokeCap(SQUARE);
  blendMode(MULTIPLY);

  posX = floor(width / 2);
  posY = floor(height / 2);
  posXcross = posX;
  posYcross = posY;
  angle = int(random(0, 360));
}

function draw() {
  var speed = int(map(mouseX, 0, width, 0, 200));

  for (var i = 0; i <= speed; i++) {

    // draw point at current position
    strokeWeight(1);
    stroke(0, 0, 80, 90);
    point(posX, posY);

    // update position
    posX += cos(radians(angle)) * stepSize;
    posY += sin(radians(angle)) * stepSize;

    // check if canvas border was reached
    // if true, revert direction
    reachedBorder = false;

    if (posY <= 50) {
      direction = S;
      reachedBorder = true;
    } else if (posY >= height - 50) {
      direction = N;
      reachedBorder = true;
    } else if (posX <= 50) {
      direction = E;
      reachedBorder = true;
    } else if (posX >= width - 50) {
      direction = W;
      reachedBorder = true;
    }

    // check color of current pixel
    loadPixels();
    var currentPixel = get(floor(posX), floor(posY));

    // change angle
    if (lightness(currentPixel) < 50 || reachedBorder) {
      angle = getRandomAngle(direction);

      var distance = dist(posX, posY, posXcross, posYcross);

      // some lines get drawn stronger
      if (distance >= minLength && (direction < 2 || random() > 0.9)) {

        //var outside = max(dist(width/2, height/2, posX, posY), 
        //    dist(width/2, height/2, posXCross, posYCross));

        if ((posY < 300 || posYcross < 300) && random() < 0.98) {
            stroke(300, 0, 95, 10);
        } else {
            stroke(249, 92, 9, 10);
        }

        var sw = exp(map(distance, minLength, max(width, height), 0, 5))
        strokeWeight(sw);

        line(posX, posY, posXcross, posYcross);

        posCrossMemory.push([posX, posY]);
        fillTriangles();
      } else {
        posCrossMemory.pop();
      }

      posXcross = posX;
      posYcross = posY;

    }
  }
}

function getRandomAngle(currentDirection) {
  var a = (floor(random(-angleCount, angleCount)) + 0.5) *
    90 / angleCount;

  if (currentDirection == N) return a - 90;
  if (currentDirection == E) return a;
  if (currentDirection == S) return a + 90;
  if (currentDirection == W) return a + 180;

  return 0;
}


function fillTriangles() {
  // paint filled shapes
  if (posCrossMemory.length >= 3) {
    push();

    noStroke();
    fill(0, 0, 90, 90);

    beginShape();
    for (j = 0; j < 3; j++) {
      var v = posCrossMemory.pop();
      vertex(v[0], v[1]);
    }
    endShape(CLOSE);
    
    pop();
  }
}