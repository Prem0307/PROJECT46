const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var bg;
var ground;
var tank;
var turret;
var rotatedDegrees;
 var ball1,ball2,ball3,ball4,ball5;
 var bullets=[];

function preload(){
bg=loadImage("background.png")

}
function setup(){
    createCanvas(800,400);
myEngine=Engine.create();
myWorld=myEngine.world;


ground=new Ground(600,390,1200,30)
tank=new Tank(600,340,200,75)
turret=new Turret(550,320,100,20)
ball1=new Ball(50,100,25)
ball2=new Ball(100,50,25)
ball3=new Ball(100,0,25)
ball4=new Ball(50,50,25)
ball5=new Ball(150,80,25)
rotatedDegrees=0;
}
function draw(){
background(bg);
tank.display();
ground.display();
turret.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
 if(keyDown(UP_ARROW) && rotatedDegrees<45){
    
     turret.rotateUp();
     rotatedDegrees++;
 }  
   if(keyDown(DOWN_ARROW)&& rotatedDegrees >-25)
    {
    console.log(rotatedDegrees);
     turret.rotateDown();
     rotatedDegrees--;
   }
for(var x=0;x<bullets.length;x++){
  bullets[x].display();
}

//text(mouseX+" "+mouseY,mouseX,mouseY);

}
function keyPressed(){
  if(keyCode===32){
    //console.log("pressed")
    bullet=new Bullet(0,0,30,10,rotatedDegrees,4);
    Matter.Body.setPosition(bullet.body,{x:turret.body.position.x-50,y:turret.body.position.y-rotatedDegrees/3})
    
    bullets.push(bullet)
  }
}