const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var myworld, myengine;
var obj;

function setup(){
  var canvas=createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  var options_obj = {
    isStatic:true
  }
  obj = Bodies.rectangle(200,200,20,20,options_obj);
  World.add(myworld,obj);

  console.log(obj);
  

}
function draw()
{
  background(0);
  Engine.update(myengine);
  rectMode(CENTER);
  rect(100,100,50,50);
  rect(obj.position.x,obj.position.y,20,20);
  
}
