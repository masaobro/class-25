const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var mWorld, mEngine, mBody;
var box1, box2, box3, box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;
var bg;

function preload(){
 bg = loadImage("sprites/bg.png");

}
function setup() {
  createCanvas(1200,400);

mEngine = Engine.create();
mWorld= mEngine.world;

box1= new Box(700, 320, 70, 70);
box2= new Box(920,320, 70,70);
box3= new Box(700, 240, 70, 70);
box4= new Box(920, 240, 70,70);
box5= new Box(810, 160, 70,70);
log1 = new Log(810,260,300,PI/2);
log2 = new Log(810,200,300,PI/2);
log3 = new Log(760,120,140,PI/7);
log4 = new Log(860,120,140,-PI/7);
pig1 = new Pig(810,350);
pig2 = new Pig(810,240);
bird = new Bird(100,100);
ground = new Ground(600,390,1200,20);

}

function draw() {
  Engine.update(mEngine);
  background(bg);  
  
 

  box1.display();
  box2.display();
  log1.display();
  ground.display();
  box3.display();
  box4.display();
  pig1.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird.display();
}