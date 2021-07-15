var weight=[35,58,45,12];
var ship1 ,ship1_running;
function weight_add(){
  var sum= weight[0]+weight[1]+weight[2]+weight[3];
  console.log(sum)
}
function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  weight_add();
 sea=createSprite(400,200)
  sea.addImage("moving",seaImg)
  sea.scale=0.5
  sea.velocityX=-5
 ship1=createSprite(130,200,30,30);
  ship1.addAnimation("moving copy",shipImg1)
  ship1.scale=0.2; 
 
}
                      
function draw() {
  background(seaImg);
  sea.velocityX=-5;
  if (sea.x< 0){
        sea.x = sea.width/8;
       }
        
drawSprites();
}