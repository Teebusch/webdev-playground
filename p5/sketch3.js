var lines = [];
var nLines = 50;
var nPoints = 20; // number of control points per line
var lineLength = 500; // line length in pixels

function setup() {
  createCanvas(500, 500);
  background(240);
  
  for (var i = 0; i < nLines; i++) {
    var ln = [];
    for (var j = 0; j < nPoints; j++) {
      var x = i * 50;
      var y = j * 50;
      ln.push(createVector(x, y))
    }
    lines.push(ln);
  }
  
  
}

function draw() {
  noLoop();
  lines.forEach(wiggleLine);
  lines.forEach(drawLine);
}


function drawLine(ln) {
  noFill();
  stroke(100, 100, 100, 100);
  beginShape();
  for (var i = 0; i < ln.length; i++) {
    var pt = ln[i];
    vertex(pt.x, pt.y);
  }
  endShape();
}


function wiggleLine(ln) {
  for (var i = 0; i < ln.length; i++) {
    var wiggleVector = createVector(random(-1,1), 0); 
    ln[i] = ln[i].add(wiggleVector.add(createVector(2, 0)));
  }
  return(ln);
}
  