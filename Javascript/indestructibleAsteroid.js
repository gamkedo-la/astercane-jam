const INDESTRUCTIBLE_ASTEROID_WIDTH = 70;
const INDESTRUCTIBLE_ASTEROID_HEIGHT = 70;

function IndestructibleAsteroid(startingX,startingY)
{
  this.width = INDESTRUCTIBLE_ASTEROID_WIDTH;
  this.height = INDESTRUCTIBLE_ASTEROID_HEIGHT;

  this.startingX = startingX;
  this.startingY = startingY;

  this.x = startingX;
  this.y = startingY;

  this.destructible = false;
  
  this.Draw = function()
  {
    canvasContext.drawImage(indestructibleAsteroidImage, this.x,this.y, this.width,this.height);
  }

  this.Move = function()
  {
    this.y += WAVE_ASTEROID_SPEED;
  }
}
