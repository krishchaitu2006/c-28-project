
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;


/*function preload()
{
	
}*/

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,590,800,20);

	
	rod1 = new Rod(155,200,65,20);

	ball1 = new Ball(155,800);

	string1 = new Chain(ball1.body,rod1.body);

	
	rod2 = new Rod(215,200,65,20);

	ball2 = new Ball(215,200);

	string2 = new Chain(ball2.body,rod2.body);


	rod3 = new Rod(275,200,65,20);

	ball3 = new Ball(275,200);

	string3 = new Chain(ball3.body,rod3.body);


	rod4 = new Rod(335,200,65,20);

	ball4 = new Ball(335,200);

	string4 = new Chain(ball4.body,rod4.body);


	rod5 = new Rod(395,200,65,20);

	ball5 = new Ball(395,200);

	string5 = new Chain(ball5.body,rod5.body);

	Engine.run(engine);

	

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  string1.display();
  rod1.display();
  ball1.display();

  string2.display();
  rod2.display();
  ball2.display();

  string3.display();
  rod3.display();
  ball3.display();

  string4.display();
  rod4.display();
  ball4.display();

  string5.display();
  rod5.display();
  ball5.display();

  if(keyCode === UP_ARROW) {

	Matter.Body.applyForce(ball5.body,ball5.body.position,{x:5,y:-15});

  }else{

	//Matter.Body.applyForce(ball5.body,ball5.body.position,{x:10,y:100});


  }

 
}



