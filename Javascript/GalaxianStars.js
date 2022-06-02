function GalaxianStar()
{
  this.Image = galaxianStarImage;
  this.width = getRandomArbitrary(5,10);
  this.height = getRandomArbitrary(5,10);
  this.x = getRandomArbitrary(0,canvas.width - this.width);
  this.y = getRandomArbitrary(0,canvas.height - this.height);

  this.currentAlpha = getRandomArbitrary(1,2)/10;
  this.alphaChangeRate = getRandomArbitrary(1,9)/1000;
  this.alphaChangeDirection = undefined;

  this.ySpeed = getRandomArbitrary(5,10)/10;

  this.initialize = function()
  {
      let coinFlip = Math.random();
      if (coinFlip < 0.5)
      {
        this.alphaChangeDirection = -1;
      }
      else
      {
        this.alphaChangeDirection = 1;
      }
  }

  this.Draw = function()
  {
    canvasContext.globalAlpha = this.currentAlpha;
    canvasContext.drawImage(this.Image, this.x,this.y, this.width,this.height);
    canvasContext.globalAlpha = 1;
  }

  this.UpdateAlpha = function()
  {
    this.currentAlpha += this.alphaChangeRate * this.alphaChangeDirection;
    if (this.currentAlpha < 0.1)
    {
      this.currentAlpha = 0.1;
      this.alphaChangeDirection *= -1;
    }
    else if (this.currentAlpha > 0.2)
    {
      this.currentAlpha = 0.2;
      this.alphaChangeDirection *= -1;
    }
  }

  this.Move = function()
  {
    this.y += this.ySpeed;
    if (this.y + this.height > canvas.height)
    {
      this.y = 0 - this.height;
      this.x = getRandomArbitrary(0,canvas.width - this.width);
    }
  }
}

function GalaxianStarManager()
{
  this.arrayOfGalaxianStars = [];

  this.initialize = function()
  {
    for (let i = 0; i < 100; i++)
    {
      let newGalaxianStar = new GalaxianStar();
      newGalaxianStar.initialize();
      this.arrayOfGalaxianStars.push(newGalaxianStar);
    }
  }

  this.UpdateGalaxianStarAlphas = function()
  {
    //console.log("inside update galaxian star alphas");
    for (let i = 0; i < this.arrayOfGalaxianStars.length; i++)
    {
      //console.log("inside for loop");
      this.arrayOfGalaxianStars[i].UpdateAlpha();
    }
  }

  this.DrawGalaxianStars = function()
  {
    for (let i = 0; i < this.arrayOfGalaxianStars.length; i++)
    {
      this.arrayOfGalaxianStars[i].Draw();
    }
  }

  this.MoveGalaxianStars = function()
  {
    for (let i = 0; i < this.arrayOfGalaxianStars.length; i++)
    {
      this.arrayOfGalaxianStars[i].Move();
    }
  }
}
