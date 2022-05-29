let LEFT_ASTERCANE_BOUNDARY_XCOORDINATE;
let RIGHT_ASTERCANE_BOUNDARY_XCOORDINATE;

function Background()
{
  this.width = canvas.width;
  this.height = canvas.height;

  this.fillColor = "black";

  this.arrayOfLeftBoundaryAsteroids = [];
  this.arrayOfRightBoundaryAsteroids = [];

  this.initialize = function()
  {
    LEFT_ASTERCANE_BOUNDARY_XCOORDINATE = canvas.width*0.15; //180
    RIGHT_ASTERCANE_BOUNDARY_XCOORDINATE = canvas.width*0.85; //1020
  }

  this.drawBackfill = function()
  {
    canvasContext.fillStyle = this.fillColor;
    canvasContext.fillRect(0,0, this.width,this.height);
  }

  this.drawLeftBoundaryForDevelopment = function()
  {
    canvasContext.strokeStyle = "red";
    canvasContext.beginPath();
    canvasContext.moveTo(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE,0)
    canvasContext.lineTo(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE,canvas.height);
    canvasContext.stroke();
  }

  this.drawRightBoundaryForDevelopment = function()
  {
    canvasContext.strokeStyle = "red";
    canvasContext.beginPath();
    canvasContext.moveTo(RIGHT_ASTERCANE_BOUNDARY_XCOORDINATE,0)
    canvasContext.lineTo(RIGHT_ASTERCANE_BOUNDARY_XCOORDINATE,canvas.height);
    canvasContext.stroke();
  }

  this.Draw = function()
  {
    this.drawBackfill();
    // this.drawLeftBoundaryForDevelopment();
    // this.drawRightBoundaryForDevelopment();
    this.drawBoundaryAsteroids();
  }

  this.initializePlaceholderBoundarAsteroids = function()
  {
    //initialize left boundary asteroids
    for (let i = 0; i < 100; i++)
    {
      let randomX = getRandomArbitrary(0, LEFT_ASTERCANE_BOUNDARY_XCOORDINATE - ASTEROID_WIDTH);
      let randomY = getRandomArbitrary(0, canvas.height)
      let boundaryAsteroid = new Asteroid(randomX,randomY);
      boundaryAsteroid.initialize();
      this.arrayOfLeftBoundaryAsteroids.push(boundaryAsteroid);
    }

    //initialize right boundary asteroids
    for (let i = 0; i < 100; i++)
    {
      let randomX = getRandomArbitrary(RIGHT_ASTERCANE_BOUNDARY_XCOORDINATE,canvas.width - ASTEROID_WIDTH);
      let randomY = getRandomArbitrary(0, canvas.height)
      let boundaryAsteroid = new Asteroid(randomX,randomY);
      boundaryAsteroid.initialize();
      this.arrayOfRightBoundaryAsteroids.push(boundaryAsteroid);
    }
  }

  this.moveBoundaryAsteroids = function()
  {
    for (let i = 0; i < this.arrayOfLeftBoundaryAsteroids.length; i++)
    {
      this.arrayOfLeftBoundaryAsteroids[i].Move();
    }
    for (let i = 0; i < this.arrayOfRightBoundaryAsteroids.length; i++)
    {
      this.arrayOfRightBoundaryAsteroids[i].Move();
    }
  }

  this.drawBoundaryAsteroids = function()
  {
    for (let i = 0; i < this.arrayOfLeftBoundaryAsteroids.length; i++)
    {
      //console.log("inside left asteroid boundary draw");
      this.arrayOfLeftBoundaryAsteroids[i].Draw();
    }
    for (let i = 0; i < this.arrayOfRightBoundaryAsteroids.length; i++)
    {
      this.arrayOfRightBoundaryAsteroids[i].Draw();
    }
  }
}

function getRandomArbitrary(min, max)
{
  return Math.random() * (max - min) + min;
}
