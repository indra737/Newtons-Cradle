
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var bob1
var bob2
var bob3
var bob4
var bob5
var rope1,rope2,rope3,rope4
var holder1,holder2,holder3,holder4
var f


function setup() {
	createCanvas(800, 700);
	f=true

	engine = Engine.create();
	world = engine.world;

	bob1= new Bob(200,500,false)
	bob2= new Bob(240,500,false)
	bob3= new Bob(280,500,false)
	bob4= new Bob(320,500,false)
	bob5= new Bob(360,500,false)
	holder1= new Holder(200,100,100,20)
	holder2= new Holder(240,100,100,20)
	holder3= new Holder(280,100,100,20)
	holder4= new Holder(320,100,100,20)
	holder5= new Holder(360,100,100,20)
  rope1= new Rope(bob1.body,holder1.body,70,0)
  rope2= new Rope(bob2.body,holder2.body,0,0)
  rope3= new Rope(bob3.body,holder3.body,0,0)
  rope4= new Rope(bob4.body,holder4.body,0,0)
  rope5= new Rope(bob5.body,holder5.body,0,0)
 // holder= new Holder(width/2,100,400,20)
	Engine.run(engine);
	world.gravity.y=20;

}


function draw() {
  rectMode(CENTER);
  background(0);
 
  if(keyDown(UP_ARROW)){
	  bob1.update();
  }
  bob1.display();
  bob3.display()
  bob4.display()
 bob2.display()
 holder1.show()
 holder2.show()
 holder3.show()
 holder4.show()
 holder5.show()
 rope1.show()
 rope2.show()
 rope3.show()
 rope4.show()
 rope5.show()
 bob5.display()
}



