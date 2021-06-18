
var num1,num2;
var n1,n2;
var b1,b2;
function setup() {
  createCanvas(400, 400);
  num1=createInput();
  num1.position(5,60);

  num2=createInput();
  num2.position(200,60);

  b1=createButton("ADD");
  b1.position(10,200);
  b1.mousePressed(add);

}

function draw() {
  background("lightblue");
  textAlign(CENTER);
  textSize(15);
  fill("black");

  text("Number1",70,50);
  text("Number2",270,50);
  n1=parseInt(num1.value());
  n2=parseInt(num2.value());
}

function add()
{
  console.log(n1+n2);
}