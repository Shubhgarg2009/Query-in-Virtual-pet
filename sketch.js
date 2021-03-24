//Create variables here
var dog, happyDog, dogIMG, happyDogIMG, database, foodS, foodStock;

function preload()
{
  //load images here
  dogIMG=loadImage("Dog.png");
  happyDogIMG=loadImage("happydog.png")
}

function setup() {
  createCanvas(500,500);
  
database = firebase.database();
console.log(database);

  dog=createSprite(250,250,10,20);
  dog.addImage(dogIMG );
  dog.scale=0.2;

  var foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  
background(rgb(46, 139, 87));

if (keyWentDown("UP_ARROW")){
  writeStock(foodS)
  dog.addImage(happyDogIMG);
}
stroke('yellow')
text("Note:Press Up arrow key to feed the dog",150,150)
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val;
}


function writeStock(x){
  if(x<=0){
x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
   Food:x
  }
  )
}

