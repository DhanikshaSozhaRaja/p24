
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 600);
  engine = Engine.create();
	world = engine.world;
  paper1 = new paper(200,450,40);
    box1 = new dustbin(540,530,15,100,PI/2);
    box2 = new dustbin(680,530,15,100,PI/2);
    box3 = new dustbin(610,580,150,15);
 ground=new Ground(width/2,595,width,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();  
  paper1.display();
  ground.display();
box2.display();
box3.display();
 
 
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-155})
     
     
   }
 }

