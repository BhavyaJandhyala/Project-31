const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var engine,world; 
var particles = [];
var plinkos=[];
var lines=[];
var ground;
var lines;
var rowsHeight = 150;

function setup() {
  createCanvas(800,600);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,600,800,20);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 10))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,50))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,100))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,200))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,250))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,300))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,350))
  }
  
  for(var k = 0; k <=width; k = k+80){
    lines.push(new Line(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background("black");
  
   Engine.update(engine, 25);
  
  if(frameCount%40 === 0){
    particle = new Particle(random(120, 500), 0, 10, random(0, 360));
    particles.push(particle);
  }
  
 for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
 
 for(var k = 0; k<lines.length;k++){
    lines[k].display();
 }

  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }

ground.display();

}
