var car, checking;
var weight,speed;
var r1,r2,r3,r4,r5,r6,r7,r8,r9;
var extra;

function setup() {
  createCanvas(1000,400);
  speed = random(55,90);
  weight = random(400,1500);
  r1 = createSprite(100,200,70,20);
  r2 = createSprite(200,200,70,20);
  r3 = createSprite(300,200,70,20);
  r4 = createSprite(400,200,70,20);
  r5 = createSprite(500,200,70,20);
  r6 = createSprite(600,200,70,20);
  r7 = createSprite(700,200,70,20);
  r8 = createSprite(800,200,70,20);
  r9 = createSprite(900,200,70,20);
  r1.shapeColor = "white";
  r2.shapeColor = "white";
  r3.shapeColor = "white";
  r4.shapeColor = "white";
  r5.shapeColor = "white";
  r6.shapeColor = "white";
  r7.shapeColor = "white";
  r8.shapeColor = "white";
  r9.shapeColor = "white";
  car = createSprite(50, 200, 90, 60);
  car.shapeColor = color(random(20,250),random(20,250),random(20,250))
  checking = createSprite(900,200,60,250);
  checking.shapeColor = "blue";
  extra = createSprite(900,200,30,125);
  extra.shapeColor = "white";
  car.velocityX = speed;
}

function draw() {
  background(110,110,110);  

  if(checking.x - car.x <(car.width + checking.width)/2) 
  {car.velocityX =0;
   var deformation=0.5 *weight * speed* speed/22509;
   if(deformation > 180) {
   car.shapecolor =color(285,0,0); 
  }
  if(deformation <180 && deformation>100) 
  {
  car. shapeColor =color(230, 230,0);
   } 
  if(deformation< 100){
  car. shapeColor =color(0,255,0); 
  } 
  extra.shapeColor = car.shapeColor;
}
  
  drawSprites();
}