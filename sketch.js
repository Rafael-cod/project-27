const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Ball(320,300);
	bobObject2 = new Ball(360,300);
	bobObject3 = new Ball(400,300);
	bobObject4 = new Ball(440,300);
	bobObject5 = new Ball(480,300);

	roof = new Roof(400,300,180,20);
	
	rope1 = new Rope(bobObject1.body,roof.body, 320,300)
	rope2 = new Rope(bobObject2.body,roof.body, 360,300)
	rope3 = new Rope(bobObject3.body,roof.body, 400,300)
	rope4 = new Rope(bobObject4.body,roof.body, 440,300)
	rope5 = new Rope(bobObject5.body,roof.body, 480,300)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();

	roof.display();
 
}



