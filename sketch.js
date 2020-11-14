var thickness, wall
var bullet, weight, damage

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,10,10);
  bullet.shapeColor = "white";

  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,canvas.height/2);
  wall.shapeColor = (80,80,80);

  bullet.velocityX = speed;


}

function draw() {
  background(255,255,255);
  if (wall.x - bullet.x <= bullet.width/2 + wall.width/2)  {
    bullet.velocityX = 0;
    //bullet.x = thickness - (-50);
    damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
    if (damage <= 10){
      bullet.shapeColor = "green";
    }
    else if (damage > 10){
      bullet.shapeColor = "red";
    }
  }
  drawSprites();
  console.log(bullet.velocityX);
}