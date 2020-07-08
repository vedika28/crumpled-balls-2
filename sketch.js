var ground, paper;
var dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper();

	ground = new Ground();

	dustbin=new Dustbin;
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background(255);

	Engine.update(engine);

	paper.display();
	ground.display();

	dustbin.display();

	keyPressed();
	drawSprites();

}

function keyPressed() {
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 85, y: -85 });
	}
}