
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1, line2, line3;
var paper;
var ground;
function preload()
{
	paper = loadImage("paper.png");
}

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground=createSprite(width/2, height, width,10);
  ground.shapeColor=("White");
 
  ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
	 World.add(world, ground);
   
   var paper_options = {
    restitution : 0.5,
    friction : 1.5,
    density :0.3
}
paper = Bodies.circle(200,100,20,paper_options);
    World.add(world,paper);

	 line1 = new line(650,650,200,20);
	 line2 = new line(550,610,20,100);
   line3 = new line(750,610,20,100);
   
	Engine.run(engine);
  
}

function draw(){
  background(0);
  Engine.update(engine);
 
  line1.display();
  line2.display();
  line3.display();

  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,20,20);
   
  keyPressed();

  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_Arrow){
      Matter.Body.applyForce(paper.body,paper.body.position )
  }
}


