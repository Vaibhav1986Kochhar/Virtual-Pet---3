//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dog1Img.png");
}

function setup() {
	createCanvas(500, 500);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  if(KeyWentDown(Up_Arrow)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
}

//Fuction to read values from DB
function readStock(data){
  foodS=data.val()
}

//Fuction to write values in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function draw() {  

  drawSprites();
  //add styles here

}



