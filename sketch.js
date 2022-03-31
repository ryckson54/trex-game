var monkey ;
var animacao_monkey ;
var mata ;
var anima_mata;



function preload(){
  animacao_monkey=loadAnimation("trex1.png","trex3.png","trex4.png")
  anima_mata=loadImage("ground2.png")
}
function movimento(){
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY+=0.8
}

function setup() {
  createCanvas(600, 200);
  monkey=createSprite ( 25,100,10,10 )
  monkey.addAnimation("macaquiando",animacao_monkey);
  monkey.scale=0.45;
  mata=createSprite(300,180,600,20)
mata.addImage(anima_mata)
mata.velocityX=-10

}

function draw() {
  background(220);
  drawSprites();
  movimento()
  monkey.collide(mata);
  if(mata.x<-200){
    mata.x=300
  
  }
}
















































































