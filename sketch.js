
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball;

var btn1;
var btn2;
var con
function setup() {
  createCanvas(700,700);
  fill("red")

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  ground =new Ground(350,600,700,20);
  
  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  con = Matter.Constraint.create({
    pointA: {x:350,y:150},
    bodyB : ball,
    pointB: {x:0, y:0},
    length:300,
    stifness:0
  })
  World.add(world, con)
  

  rectMode();
  ellipseMode(RADIUS);
}


function draw() 
{
  background("lightpink")
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
  fill("silver")
  strokeWeight(4)
  stroke(310)
  line(con.pointB.x,con.pointB.y)
  strokeWeight(4)
  stroke(310)

  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0});
}
  


