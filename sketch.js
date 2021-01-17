const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var bg;

function preload() {
//preload the
bg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
 engine = Engine.create();
 world = engine.world

 ground1 = new Ground(400,500,900,20);

 hero1 = new Hero(150,400,200);
monster1 = new Monster(700,200,100);

 box1 = new Block(450,470)
 box2 = new Block(450,420)
 box3 = new Block(450,370)
 box4 = new Block(450,320)
 box5 = new Block(450,270)

 box6 = new Block(550,470)
 box7 = new Block(550,420)
 box8 = new Block(550,370)
 box9 = new Block(550,320)

 rope1 =new Rope(hero1.body,{x:150,y:100})

}

function draw() {
  background(bg);
  Engine.update(engine);

  ground1.display();
  hero1.display();
  rope1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();
  box9.display();

  monster1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY});
}