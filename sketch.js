const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder,th1,th2,th3,th4;
var engine,world;
var drops = [];
var rand;
var maxDrops = 100;
var thunderCreatedFrame;
var umbrella;

function preload(){
    th1 = loadImage("thunderbolt/1.png");
    th2 = loadImage("thunderbolt/2.png");
    th3 = loadImage("thunderbolt/3.png");
    th4 = loadImage("thunderbolt/4.png");
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(400,700);
   umbrella = new Umbrella(200,500);
   if(frameCount % 150 === 0){
       for(var i = 0;i < maxDrops; i++){
           drops.push(new Drop(random(0,400),random(0,400)))
       }
    }
    
}

function draw(){
    Engine.update(engine);
    background("black");
    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1 : thunder.addImage(th1);
            break;
            case 2 : thunder.addImage(th2);
            break;
            case 3 : thunder.addImage(th3);
            break;
            case 4 : thunder.addImage(th4);
            break;
            default:break;
        }
        thunder.scale = 0.4;
    }
    if(thunderCreatedFrame + 10 === frameCount){
        thunder.destroy();
    }
    umbrella.display();
    for(var i = 0; i < maxDrops;i++){
        drops[i].display();
        drops[i].updateHeight();
    }
    drawSprites();
}   

