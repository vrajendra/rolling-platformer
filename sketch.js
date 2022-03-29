var ball
var button
var button2
var button3
var ground
var ground2
var ground3
var ground4
var ground5
var ground6
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
  
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  ball = new Player(100, 300, 20)
  ground = new Ground(200, 400, 400, 30)
  ground2 = new Ground(10, 280, 20, 400)
  ground3 = new Ground(390, 200, 20, 400)
  ground4 = new Ground(180, 175, 100, 20)
  ground5 = new Ground(300, 350, 200, 200)
  ground6 = new Ground(300, 350, 20, 100)
  ground6 = new Ground(300, 0, 200, 20)
  
  


  button = createImg('imgforproject.png')
  button.position(100, 90)
  button.size(50,50)
  button.mouseClicked(blowL)

  button2 = createImg('imgforproject3.png')
  button2.position(150, 90)
  button2.size(50,50)
  button2.mouseClicked(blowR)

  button3 = createImg('imgforproject2.png')
  button3.position(125, 40)
  button3.size(50,50)
  button3.mouseClicked(blowU)


}

function draw() 
{
  background(64, 50, 50);
  Engine.update(engine);
  ball.show()
  ground.show()
  ground2.show()
  ground3.show()
  ground4.show()
  ground5.show()
  ground6.show()
  

  
}

function blowL(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:-0.01,y:0})
}
function blowR(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.01,y:0})
}

function blowU(){
  Matter.Body.applyForce(ball.body,{x:0,y:0.01},{x:0,y:-0.01})
}