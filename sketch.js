var dog,sadDog,happyDog;
var foodImg,foodObj, feedBut, addFoodBut;

function preload()
{
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
  foodImg= loadImage("Milk.png")
}

function setup()
{
  createCanvas(1000,400);

  feedBut= createButton("Feed the dog");
  feedBut.position((700,95));
  feedBut.mousePressed(updateFoodStock);

  addFoodBut = createButton("Add Food");
  addFoodBut.position(800,95);
  addFoodBut.mousePressed(deductFood);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food(10,10);
}

function draw()
  {
  background(46,139,87);

  foodObj.display();
  drawSprites();
}

//function to read food Stock
function getFoodStock()
{

}

//function to update food stock and last fed time
function updateFoodStock()
{
  dog.addImage(happyDog);

  if(foodObj.getFoodStock() <= 0)
  {
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }

  else
  {
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}

//function to add food in stock

function deductFood()
{
  foods++;
  database.ref('/').update(
    {
      Food:foods
    }
  )
}