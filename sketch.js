var redcol = 0;
var pos = 230;
var ellipseX = 300;
var ellipseY = 0;
var circleTrans = 100;

var rectTrans = 100;
var ellipse1X = 300;

var ellipseMiddleX = 120;
var ellipseMiddleY = 390; 
var circleTrans2 = 100;

var rowLineTrans = 100;
var a, x, y, m, n;

var b = 491;

var rowLineTrans2 = 100;
var a2, x2, y2, m2, n2;

var t = 1;
var easing = 0.10;
var offset = 0;
var offsety = 0;
var w = 1;

var ellipselastX = 180;
var ellipselastY = 630;
var circleTrans3 = 100;

function setup() {
  createCanvas(700,500);
  background(250);
  frameRate(40);
  loadImage("assets/Living.jpg", function(img) {
    image(img, 650, 120);
  });
}

function draw() {
  push();
  scale(0.7);
  
 noStroke();
  //scroll down
  fill(redcol,0,0,rectTrans);
  ellipse(ellipse1X,pos,40,50);
  
  //automatically draw circle pen
  fill(0,0,0,circleTrans);
  ellipse(ellipseX,ellipseY,20,30);
  ellipseX = ellipseX + random(-3,+3);
  ellipseX = constrain(ellipseX,180,350);
  ellipseY = ellipseY + random(0,2);
  ellipseY = constrain(ellipseY,0,500);
  circleTrans = circleTrans-0.5;
  ellipse1X = ellipse1X + random(-1,1);
  
  //automatically draw pen from the middle
  fill(0,0,0,circleTrans2);
  ellipse (ellipseMiddleX,ellipseMiddleY,35,45);
  ellipseMiddleX = ellipseMiddleX + random(0,3);
  ellipseMiddleY = ellipseMiddleY - random(0,6);
  ellipseMiddleY = constrain(ellipseMiddleY,220,370);
  circleTrans2 = circleTrans2-2;
  
  
  //top row
  rowLineTrans = 100;
  x = 140; 
  y = 330; 
  m = 149;
  n = 328;
  for(a=0;a<150;a++){
  stroke(0,0,0,rowLineTrans);
  strokeWeight(30);
  line(x,y,m,n);
  x=m;
  y=n;
  m=m+random(3,5);
  n=n+random(-1,1);
  rowLineTrans = rowLineTrans-1.3;
  }
  
  //middle row
  x2 = 230; 
  y2 = 510; 
  m2 = 240;
  n2 = 510;
  for(a2=0;a2<30;a2++){
  stroke(0,0,0,rowLineTrans2);
  strokeWeight(45);
  line(x2,y2,m2,n2);
  x2=m2;
  y2=n2;
  m2=m2+random(3,5);
  n2=n2+random(-1,1);
  rowLineTrans2 = rowLineTrans2-0.8;
  }
  if((b>490)&&(b<550)){
  strokeWeight(random(4,7));
  if((b>490)&&(b<495)||(b>540)&&(b<550)){
    stroke(0,0,0,random(0,60));
  }
  if((b>495)&&(b<505)||(b>535)&&(b<540)){
    stroke(0,0,0,random(100,180));
  }
  if((b>505)&&(b<535)){
    stroke(0,0,0,random(200,255));
  }
  var linex=200+random(-5,5);
  line(linex,b,linex+180,b+random(-2,2));
  b = b+4;
  }
  
  fill(0,0,0,circleTrans3);
  ellipse (ellipselastX,ellipselastY,35,45);
  ellipselastX = ellipselastX + random(0,3);
  ellipselastY = ellipselastY + random(-2,2);
  ellipselastX = constrain(ellipselastX,180,450);
  circleTrans3 = circleTrans3-0.5;
  
  
  //random dot
  strokeWeight(w);
  stroke(0,0,0,t);
  var dx = mouseX-offset;
  var dy = mouseY-offsety
  offset = offset + dx*easing;
  offsety= offsety + dy*easing;
  line(offset,offsety,offset+4,offsety+2);
  t = t+1;
  w = w+1;
  if(t==255){
   t=1;
  }
  if(w>30){
    w=1;
  }
  
  pop();
 }


function mouseWheel(event){
  print(event.delta);
  redcol += event.delta;
  redcol = constrain(redcol,0,100);
  pos += event.delta;
  pos = constrain(pos,230,630);
  rectTrans -= event.delta;
  rectTrans = constrain(rectTrans,10,100); //prevent the middle pan from being dissappeared
}