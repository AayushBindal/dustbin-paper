const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var box1 , box2 , box3;
var paper;
var paper1;

function setup() {
	createCanvas(1520,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(760,350,1520,20);
	box1 = new Box(800,300,20,70);
	box2 = new Box(849,330,70,20);
	box3 = new Box(894,300,20,70);
	paper = new Paper(300,300,30,30);
	Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();

 if(keyDown("UP_ARROW")){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:0.01, y:-0.032});
  }
}