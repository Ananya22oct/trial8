//https://console.firebase.google.com/u/0/project/air-balloon-92d62/database/air-balloon-92d62-default-rtdb/data

var balloon,bgimage,balloonImage2,balloonImage3,balloonImage4;
var database,balloonPosition;

function preload(){
bgimage=loadImage("_MACOSX/Hot Air Ballon-01.png");
balloonImage2=loadAnimation("_MACOSX/Hot Air Ballon-02.png")
balloonImage3=loadAnimation("_MACOSX/Hot Air Ballon-03.png")
balloonImage4=loadAnimation("_MACOSX/Hot Air Ballon-04.png")
}

function setup() {
  createCanvas(500,500);

  
 database=firebase.database();

 balloonPosition=database.ref('balloon/height');
 balloonPosition.on("value",readPosition,showError);
 
 balloon=createSprite(400, 200, 50, 50);

  

}

function draw() {
  background("bgimage");
  
  if(keyDown(LEFT_ARROW)){
     balloon.x=balloon.x-10; 
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10; 
 }
 else if(keyDown(UP_ARROW)){
  balloon.y=balloon.y-10;
  balloon.addAnimation("hotAirBalloon",balloonImage2)
  balloon.scale =balloon.scale+0.01
  }
else if(keyDown(DOWN_ARROW)){
  balloon.y=balloon.y+10; 
  balloon.addAnimation("hotAirBalloon",balloonImage3)
  balloon.scale =balloon.scale-0.01
}

textSize(20);
fill("black");
text("Use Arrow Keys To Move The Hot Air Balloon",100,100);

 drawSprites();
}

function readPosition(){
 database.ref("balloon/position").set({
   'x': height.x + x,
   'y': height.y + y
 })
}

function showError(){
  console.log("Erroe is writting to the database")
}