var dustbin1,dustbin2,dustbin3,paper1,ground1;
var world;
 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
  createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1=new dustbin(1200,600,20,100,0);
	dustbin3=new dustbin(1070,595,20,90,0);
	dustbin2=new dustbin(1135,650,150,20,0);
	
	paper1=new ball(200,450,40);
	ground1=new ground(width/2,670,width,20);

 
}


function draw() {
 
  background(0);
  Engine.update(engine) 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  ground1.display();
 
}



function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
    
  	}
}