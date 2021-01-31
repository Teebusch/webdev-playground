var startingAgents = 50;
var startingRadius = 100;
var agents = []

function setup() {
  createCanvas(windowHeight, windowWidth);
  background(220); 
  blendMode(MULTIPLY);
  
  // place starting nodes
  var center = createVector(
    windowWidth/2 - startingRadius/2, 
    windowHeight/2 - startingRadius/2
  );
  var angle = radians(360 / startingAgents);

  for (i = 0; i < startingAgents; i++) {
    var x = cos(angle * i) * startingRadius;
    var y = sin(angle * i) * startingRadius;
    var offset = createVector(x, y);
    var agent = new Agent(offset, center);
    agents.push(agent);
  }
  
}

function draw() {
  //noLoop();
  
  // move Agents
  agents.forEach( e => e.move() );
    
  // draw agents
  agents.forEach( e => e.draw() );
  
  // draw connections
  noFill();
  stroke(11, 11, 11, 90);
  beginShape();
  agents.forEach(e => vertex(e.x, e.y));
  endShape(CLOSE);
}

class Agent {
  constructor(offset, center) {
    this.center = center;
    this.offset = offset;
    this.radius = 1;
    this.updatePosition();
  }
  
  updatePosition() {
    var position = this.center.copy().add(this.offset);
    this.x = position.x;
    this.y = position.y;
  }
  
  move() {
    var wiggle = 1.1
    this.offset.mult(wiggle).rotate(radians(random(-5, 5)));
    this.updatePosition();
  }
  
  draw() {
    noStroke();
    fill(100, 100, 100, 200);
    ellipse(this.x, this.y, this.radius);
  }

}