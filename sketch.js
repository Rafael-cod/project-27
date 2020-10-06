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
	bobObject1 = new Ball(320,340);
	bobObject2 = new Ball(360,340);
	bobObject3 = new Ball(400,340);
	bobObject4 = new Ball(440,340);
	bobObject5 = new Ball(480,340);

	roof = new Roof(400,300,180,20);
	console.log(roof.body);
	
	rope1 = new Rope(bobObject1.body,roof.body, -80,10)
	rope2 = new Rope(bobObject2.body,roof.body, -40,10)
	rope3 = new Rope(bobObject3.body,roof.body, 0,10)
	rope4 = new Rope(bobObject4.body,roof.body, 40,10)
	rope5 = new Rope(bobObject5.body,roof.body, 80,10)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	Engine.update(engine);

	background(25);

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-75,y:-150});
	}
}


