var fr;
var mr;
function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor="#FFEBCD"
  mr = createSprite(80, 150, 100, 100);
  mr.shapeColor="#FFEBCD"
}

function draw() {
  background("#A9A9A9"); 
  mr.x = World.mouseX;
  mr.y = World.mouseY; 
  if(mr.x-fr.x < fr.width/2+mr.width/2&&fr.x-mr.x<fr.width/2+mr.width/2&&
    mr.y-fr.y<fr.height/2+mr.height/2&&fr.y-mr.y<fr.height/2+mr.height/2){
    mr.shapeColor = "red";
    fr.shapeColor = "red"
  }else{
    mr.shapeColor = "green";
    fr.shapeColor = "green"
  }

  drawSprites();
}