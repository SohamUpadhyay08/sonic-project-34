const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var hero,ground;

var flag = 0




function preload() {
//preload the images here
bg= loadImage("sonicBack.png");
}

function setup() {
  createCanvas(1250, 700);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(500,600,1200,10)
  ground2 = new Ground(1100,450,1,10)
  hero = new Hero(200,405,150,150)
  
  
  block14 = new Box(500,260,75,75)
  block15 = new Box(500,320,75,75)
  block16 = new Box(500,400,75,75)
  block17 = new Box(500,480,75,75)
  block18 = new Box(500,560,75,75)
  block1 = new Box(600,260,75,75)
  block2 = new Box(600,320,75,75)
  block3 = new Box(600,400,75,75)
  block4 = new Box(600,480,75,75)
  block5 = new Box(600,560,75,75)
  block6 = new Box(600,380,75,75)
  tower = new Tower(730,590,180,500)
  pisa = new Pisa(855,590,100,500)
  
  
  monster = new Monster(1100,400,150,150)
  
  sling = new Fly(hero.body,{x:150,y:100});


}

function draw() {
  
  Engine.update(engine);

  background("cyan");

  strokeWeight(5)

  ground.display();
  //ground2.display();
  hero.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  monster.display();
  tower.display();
  pisa.display();

  var collision = Matter.SAT.collides(pisa.body,monster.body)
  if(collision.collided){
    flag = 1
  }
  if(flag === 1){
    textSize(50)
    fill("red")
    strokeWeight(10)
    text("Won The Battle !!",500,100)
    
  }
  

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
  sound.play();
}




