const DESTRUCTIBLE_ASTEROID_WIDTH = 70;
const DESTRUCTIBLE_ASTEROID_HEIGHT = 70;
let WAVE_ASTEROID_SPEED = 5;

function DestructibleAsteroid(startingX,startingY)
{
  this.width = DESTRUCTIBLE_ASTEROID_WIDTH;
  this.height = DESTRUCTIBLE_ASTEROID_HEIGHT;

  this.startingX = startingX;
  this.startingY = startingY;

  this.x = startingX;
  this.y = startingY;

  this.destructible = true;
  
  this.Draw = function()
  {
    canvasContext.drawImage(destructibleAsteroidImage, this.x,this.y, this.width,this.height);
  }

  this.Move = function()
  {
    this.y += WAVE_ASTEROID_SPEED;
  }
}
