var road
var car
var car2
var car3
var car4
var wall
var score
var sound
 
function preload() {
  
  road = loadImage("road.jpg")
  car1 = loadImage("car.png")
  car21 = loadImage("car2.png")
  car31 = loadImage("car3.png")
  car41 = loadImage("car4.png")
  wall1 = loadImage("wall.jpg")
  score = loadImage("score.png")
  sound = loadSound("Recording.m4a")

}

function setup() {
  createCanvas(1350, 610);
  
  car = createSprite(100, 100, 10, 10)
  car2 = createSprite(100, 230, 10, 10)
  car3 = createSprite(100, 390, 10, 10)
  car4 = createSprite(100, 530, 10, 10)
  wall = createSprite(1500, 350)
  
}

function draw() {
  background(0);  
  
  //image adding
  image(road, 1, 1, 1350, 610)
  image(score,200,100,900,500)

  car.addImage(car1)
  car2.addImage(car21)  
  car3.addImage(car31)
  car4.addImage(car41)
  wall.addImage(wall1)
 
  //image scale
  wall.scale = 0.9
  
  //rotating image
  car.rotation = 90;
  car2.rotation = 90;
  car3.rotation = 90;
  car4.rotation = 90;
    
  drawSprites();

 //if
  if (car.isTouching(wall)) {
    car.velocity = 0

    sound.play()

  }

  //

  if (mousePressedOver(wall)) {
    
    //velocity
    car.velocityX = 50
    car2.velocityX = 30
    car3.velocityX = 10
    car4.velocityX = 40

  }
}
