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

      for (let j = 0; j < asteroidWaveManager.arrayOfWaves[0].arrayOfAsteroids.length; j++)
      {
        if (this.arrayOfBullets[i].y < asteroidWaveManager.arrayOfWaves[0].arrayOfAsteroids[j].y + DESTRUCTIBLE_ASTEROID_HEIGHT &&
            this.arrayOfBullets[i].x > asteroidWaveManager.arrayOfWaves[0].arrayOfAsteroids[j].x &&
            this.arrayOfBullets[i].x < asteroidWaveManager.arrayOfWaves[0].arrayOfAsteroids[j].x + DESTRUCTIBLE_ASTEROID_WIDTH)
        {
          this.arrayOfBullets.splice(i,1);
          if (asteroidWaveManager.arrayOfWaves[0].arrayOfAsteroids[j].destructible)
          {
            asteroidWaveManager.arrayOfWaves[0].arrayOfAsteroids.splice(j,1);
            let newExplosion = new Explosion(asteroidWaveManager.arrayOfAsteroids[j].x - 50,asteroidWaveManager.arrayOfAsteroids[j].y + 30);
            explosionManager.arrayOfExplosions.push(newExplosion);
            explosionAudioTag.play();
          }
          else
          {
            indestructibleAsteroidWithBulletAudioTag.play();
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
