const ASTEROID_WIDTH = 25;
const ASTEROID_HEIGHT = 25;

function Asteroid(startingX,startingY)
{
  this.width = ASTEROID_WIDTH;
  this.height = ASTEROID_HEIGHT;

  this.startingX = startingX;
  this.startingY = startingY;

  this.x = startingX;
  this.y = startingY;

  this.xDirection = undefined;

  this.xSpeed = undefined;
  this.ySpeed = undefined;

  this.Draw = function()
  {
    canvasContext.drawImage(asteroidImage, this.x,this.y, this.width,this.height);
  }

  this.Move = function()
  {
    this.x += this.xSpeed*this.xDirection;
    this.y += this.ySpeed;

    //handle left side of astercane
    if (this.x < canvas.width/2)
    {
      
      if (this.x < 0)
      {
        this.x = 0;
        this.xDirection *= -1;
      }
      else if (this.x + this.width > LEFT_ASTERCANE_BOUNDARY_XCOORDINATE)
      {
        this.x = LEFT_ASTERCANE_BOUNDARY_XCOORDINATE - this.width;
        this.xDirection *= -1;
      }
    }
    //handle right side of astercane
    else if (this.x > canvas.width/2)
    {
      if (this.x + this.width > canvas.width)
      {
        this.x = canvas.width - this.width;
        this.xDirection *= -1;
      }
      else if (this.x < RIGHT_ASTERCANE_BOUNDARY_XCOORDINATE)
      {
        this.x = RIGHT_ASTERCANE_BOUNDARY_XCOORDINATE;
        this.xDirection *= -1;
      }
    }

    if (this.y > canvas.height)
    {
      this.y = -this.height;
    }
  }

  this.initialize = function()
  {
    this.xSpeed = getRandomArbitrary(1, 5);
    this.ySpeed = getRandomArbitrary(1, 5);

    let coinFlipResult = Math.random();
    if (coinFlipResult < 0.5)
    {
      this.xDirection = 1;
    }
    else
    {
      this.xDirection = -1;
    }
  }
}
