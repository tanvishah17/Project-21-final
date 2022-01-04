
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

var ground;
var leftSide;
var rightSide;


function setup() {
	createCanvas(1280, 500);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ground =new Ground(width/2, 470, width, 15);
	leftSide =new Ground(1100, 403, 20, 120);
	rightSide = new Ground(900, 403, 20, 120);

	//Create the Bodies Here.
	ball = Bodies.circle(200,5, 30, ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,30);

  ground.display();
  leftSide.display();
  rightSide.display();



  drawSprites();


 
}

function keyPressed()
{
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-60});
	}
}


