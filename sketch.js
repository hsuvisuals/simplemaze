function setup() {
  createCanvas(600, 400);
   //background
  background(250, 250, 250);
}

function draw() {
 
  
  //ellipse
  noStroke();
   fill(random(255), random(255), 0);
  ellipse(mouseX, mouseY, 50, 50);
  
  //rect
  fill(34, 143, 200);
  rect(0,50,100,100);
  fill(56, 23, 190);
  rect(50, 50, 100, 100);
  fill(200,78,154);
  rect(200, 200, 100, 100);
  fill(23,234,193);
  rect(300,0, 100,300);
  fill(176,0,86);
  rect(500,200, 200,300);
  fill(54,78,54);
  rect(500, 0, 100,100);

}

function mousePressed() {
   background(250, 250, 250);
}