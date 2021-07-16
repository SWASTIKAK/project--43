var bgImg;
var sc1,sc1Img, sc2,sc2Img, sc3,sc3Img, sc4,sc4Img;
var iss,issImg;
var spacecraft;
var hasDocked;
var rect;

function preload(){
  bgImg = loadImage("spacebg.jpg");
  sc1Img = loadAnimation("spacecraft1.png");
  sc2Img = loadAnimation("spacecraft2.png");
  sc3Img = loadAnimation("spacecraft3.png");
  sc4Img = loadAnimation("spacecraft4.png");
  issImg = loadImage("iss.png");
}


function setup() {
  createCanvas(950,600);
 spacecraft =  createSprite(800, 485, 50, 50);
 spacecraft.addAnimation("sc",sc1Img );
 spacecraft.scale = 0.3;
 spacecraft.x =  Math.round(random(330,900));
 spacecraft.setCollider("rectangle",0,0,20,600);

 iss =  createSprite(300, 360, 50, 50);
 iss.addAnimation("iss",issImg );
 iss.scale = 0.8;

 rect = createSprite(230,370,50,50)
 rect.visible = false;

 hasDocked = false;

 rect.depth = iss.depth;
 iss.depth = iss.depth + 1;

 console.log(spacecraft.position.x);
}

function draw() {
  background(bgImg);  
  drawSprites();

  spacecraft.position.x = spacecraft.x;

  if (!hasDocked){
 
  if(keyCode === LEFT_ARROW){
    spacecraft.addAnimation("sc",sc3Img);
    spacecraft.x = spacecraft.x - 5;
  }
  if(keyCode===RIGHT_ARROW){
    spacecraft.addAnimation("sc",sc4Img);
    spacecraft.x = spacecraft.x + 5;
  }
  
  }
  if(spacecraft.isTouching(rect) ){
    hasDocked = true;
    spacecraft.addAnimation("sc",sc2Img);
    textSize(35);
    fill("white");
    text("Docking Successful!!",600,100);
  }
  
}


 
