function Explosion(destroyedObjectX,destroyedObjectY)
{
  this.currentImage = explosionImage1;
  this.currentImageIndex = 0;

  this.x = destroyedObjectX;
  this.y = destroyedObjectY;

  this.initialize = function()
  {
    console.log(this.x, this.y);
  }

  this.width = 35;
  this.height = 35;

  this.arrayOfImages =
  [
    explosionImage1,explosionImage2,explosionImage3,explosionImage4,explosionImage5,explosionImage6,explosionImage7
  ]

  this.Draw = function()
  {
    canvasContext.drawImage(this.currentImage, this.x,this.y, this.width,this.height);
  }

  this.Update = function()
  {
    this.currentImageIndex++;
    this.currentImage = this.arrayOfImages[this.currentImageIndex];
  }
}

function ExplosionManager()
{
  this.arrayOfExplosions = [];

  this.updateExplosions = function()
  {
    for (let i = 0; i < this.arrayOfExplosions.length; i++)
    {
      this.arrayOfExplosions[i].Update();

      if (this.arrayOfExplosions[i].currentImageIndex > 6)
      {
        this.arrayOfExplosions.splice(i,1);
      }
    }
  }

  this.drawExplosions = function()
  {
    for (let i = 0; i < this.arrayOfExplosions.length; i++)
    {
      this.arrayOfExplosions[i].Draw();
    }
  }
}
