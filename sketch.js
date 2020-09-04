var dustbin1,dustbin2,dustbin3,ground1,ball1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
function preload() {
	img = loadImage('dustbin.png');
  }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;             
	//Create the Bodies Here.
  dustbin1 = new dustbin(700,680,160,20);
  dustbin2 = new dustbin(630,620,20,210);
  dustbin3 = new dustbin(770,620,20,210);
  
   
   
   ground1 = new ground();

   dust = createSprite(700,595,50,50);
   dust.scale=0.5;
   dust.addImage(img);

   ball1 = new ball();
   if(keyCode === LEFT_ARROW){
   ball1.x=660;
   ball1.x=660;
   }
 
   Engine.run(engine);
}
function keyPressed (){
  if(keyCode===UP_ARROW){
   Body.applyForce(ball1.body,ball1.body.position,{x:370,y:-85});
  }
}

function draw() {
  rectMode(CENTER);
  background("grey");
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  ball1.display();
  drawSprites();
}
