const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball4life
var ground;
var left;
var right;
var top_wall;
var bts1,bts2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;                                                                                                                     
  var ball4life_options = {
  restitution:0.9095
   } 
  bts1 = createImg("right.png")
  bts1.position(52,50)
  bts1.size(50,50)
  bts1.mouseClicked(hForce)
  bts2 = createImg("up.png")
  bts2.position(100,50)
  bts2.size(50,50)
  bts2.mouseClicked(vForce)

  ball4life = Bodies.circle(200,50,8,ball4life_options);
  World.add(world,ball4life)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball4life.position.x,ball4life.position.y,20.999999999995)
  Engine.update(engine);
}

function hForce() {
Matter.Body.applyForce(ball4life,{x:0,y:0},{x:0.05,y:0})
}

function vForce() {
  Matter.Body.applyForce(ball4life,{x:0,y:0},{x:0,y:-0.05})
  }
  
