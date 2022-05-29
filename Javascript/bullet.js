const BULLET_SPEED = 10;
const BULLET_WIDTH = 10;
const BULLET_HEIGHT = 10;

function Bullet(startingX,startingY)
{
  this.x = startingX;
  this.y = startingY;

  this.Draw = function()
  {
    canvasContext.drawImage(bulletImage, this.x,this.y, BULLET_WIDTH,BULLET_HEIGHT);
  }

  this.Move = function()
  {
    this.y -= BULLET_SPEED;
  }
}

function BulletManager()
{
  this.arrayOfBullets = [];

  this.MoveBullets = function()
  {
    for (let i = 0; i < this.arrayOfBullets.length; i++)
    {
      this.arrayOfBullets[i].Move();

      for (let j = 0; j < asteroidWaveManager.arrayOfAsteroids.length; j++)
      {
        if (this.arrayOfBullets[i].y < asteroidWaveManager.arrayOfAsteroids[j].y + DESTRUCTIBLE_ASTEROID_HEIGHT &&
            this.arrayOfBullets[i].x > asteroidWaveManager.arrayOfAsteroids[j].x &&
            this.arrayOfBullets[i].x < asteroidWaveManager.arrayOfAsteroids[j].x + DESTRUCTIBLE_ASTEROID_WIDTH)
        {
          this.arrayOfBullets.splice(i,1);
          if (asteroidWaveManager.arrayOfAsteroids[j].destructible)
          {
            asteroidWaveManager.arrayOfAsteroids.splice(j,1);
          }
        }
      }
    }


  }

  this.DrawBullets = function()
  {
    for (let i = 0; i < this.arrayOfBullets.length; i++)
    {
      this.arrayOfBullets[i].Draw();
    }
  }
}
