
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	bobObject1 = new Bob(250,200)
	bobObject2 = new Bob(300,200)
	bobObject3 = new Bob(350,200)
	bobObject4 = new Bob(400,200)
	bobObject5 = new Bob(450,200)

	rope1 = new Rope(bobObject1.body,Roof.body,-BobDiameter*2,0);
	World.add(world,rope1)

	rope2 = new Rope(bobObject2.body,Roof.body,-BobDiameter*2,0);
	World.add(world,rope2)

	rope3 = new Rope(bobObject3.body,Roof.body,-BobDiameter*2,0);
	World.add(world,rope3)

	rope4 = new Rope(bobObject4.body,Roof.body,-BobDiameter*2,0);
	World.add(world,rope4)

	rope5 = new Rope(bobObject5.body,Roof.body,-BobDiameter*2,0);
	World.add(world,rope5)

	roof = new Roof(350,50,35,35);
	world.add(world,roof);


	Engine.run(engine);
  
}


function draw() {
	background("black");
	Engine.update(engine);

  rectMode(CENTER);
  
  	bob0bject1.display();
  	bob0bject2.display();
  	bob0bject3.display();
  	bob0bject4.display();
  	bob0bject5.display();

	rope1.display();  
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
	
		//Matter.Body.

	}


}


