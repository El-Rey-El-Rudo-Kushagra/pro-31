var engine, world;
var particles=[]
var pinklos=[]
var divisions=[]
var divisionHeight=300;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
  var canvas=createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;                 

    ground=new Ground(240,0,480,200)
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display()  
  drawSprites();
}
for(var k=0; k<width;k=k+80){
divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}
for (var j=40; j<width; j=j+50)
{
  pinklos.push(new Pinklo(j,75))
}
for (var j=15; j<width-10; j=j+50)
{
  pinklos.push(new Pinklo(j,175))
}

if (frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}

for (var j=0; j<particles.length;j++){
  particles[j].display();
}
for (var k=0; k<divisions.length; k++){
  divisions[k].display();
}