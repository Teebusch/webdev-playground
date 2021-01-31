var img;
var colors = [];
var sortMode = null;

function preload() {
  img = loadImage('assets/starry_night.jpg');
}

function setup() {
    console.log(img);
    noStroke();
    createCanvas(600, 600);
}

function draw() {
  //noLoop();
  var tileCount = floor(width / max(mouseX, 5));
  var rectSize = width / tileCount;
 
  img.loadPixels();
  colors = [];
  
  // get pixels from image
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      // pixel colors are saved as one long array of 4 bit.
      // calculate offset...
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4; // pixel index
      
      // extract color...
      var c = color(img.pixels[i], img.pixels[i+1],
                    img.pixels[i+2], img.pixels[i+3]);
      colors.push(c);
    }
  }
  
  // dort pixels
  colors = sortColors(colors, "GRAYSCALE");

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, 
           rectSize, rectSize);
      i++;
    }
  }
}




/**
 * Sorts an array of colors according to the given method
 *
 * @method sortColors
 * @param {Array} colors An array of colors.
 * @param {String} method Either gd.RED, gd.GREEN, gd.BLUE, gd.HUE, gd.SATURATION, gd.BRIGHTNESS, gd.GRAYSCALE or gd.ALPHA.
 * @return {String} formated timestamp as string
 */
var sortColors = function(colors, method) {

    // sort red
   if (method == "RED") colors.sort(function (a, b) {
     if (red(a) < red(b)) return -1;
     if (red(a) > red(b)) return 1;
     return 0;
   });
 
    // sort green
   if (method == "GREEN") colors.sort(function (a, b) {
     if (green(a) < green(b)) return -1;
     if (green(a) > green(b)) return 1;
     return 0;
   });
 
    // sort blue
   if (method == "BLUE") colors.sort(function (a, b) {
     if (blue(a) < blue(b)) return -1;
     if (blue(a) > blue(b)) return 1;
     return 0;
   });
 
   // sort hue
   if (method == "HUE") colors.sort(function (a, b) {
     //convert a and b from RGB to HSV
     var aHue = chroma(red(a), green(a), blue(a)).get('hsv.h');
     var bHue = chroma(red(b), green(b), blue(b)).get('hsv.h');
 
     if (aHue < bHue) return -1;
     if (aHue > bHue) return 1;
     return 0;
   });
 
   // sort saturation
   if (method == "SATURATION") colors.sort(function (a, b) {
     //convert a and b from RGB to HSV
     var aSat = chroma(red(a), green(a), blue(a)).get('hsv.s');
     var bSat = chroma(red(b), green(b), blue(b)).get('hsv.s');
 
     if (aSat < bSat) return -1;
     if (aSat > bSat) return 1;
     return 0;
   });
 
   // sort brightness
   if (method == "BRIGHTNESS") colors.sort(function (a, b) {
     //convert a and b from RGB to HSV
     var aBright = chroma(red(a), green(a), blue(a)).get('hsv.v');
     var bBright = chroma(red(b), green(b), blue(b)).get('hsv.v');
 
     if (aBright < bBright) return -1;
     if (aBright > bBright) return 1;
     return 0;
   });
 
   // sort grayscale
   if (method == "GRAYSCALE") colors.sort(function (a, b) {
     var aGrey = (red(a) * 0.222 + green(a) * 0.707 + blue(a) * 0.071);
     var bGrey = (red(b) * 0.222 + green(b) * 0.707 + blue(b) * 0.071);
 
     if (aGrey < bGrey) return -1;
     if (aGrey > bGrey) return 1;
     return 0;
   });
 
    // sort alpha
   if (method == "ALPHA") colors.sort(function (a, b) {
     if (alpha(a) < alpha(b)) return -1;
     if (alpha(a) > alpha(b)) return 1;
     return 0;
   });
 
   return colors;
 };