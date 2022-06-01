const WAVE_ROW_WIDTH = 70;
const WAVE_COLUMN_HEIGHT = 70;
const NUMBER_OF_WAVE_COLUMNS = 12;
const TOTAL_NUMBER_OF_WAVES = 50;

function Wave()
{

}

function AsteroidWaveManager()
{
  this.difficultyAdjustment = 0.05;
  this.currentEasySideProbability = 0.75;
  this.currentDifficultSideProbability = 0.25;

  this.arrayOfAsteroids = [];

  this.waveCount = 0;

  this.SpawnWave = function()
  {
    this.waveCount++;
    
    for (let i = 0; i < NUMBER_OF_WAVE_COLUMNS; i++)
    {
      //choose which side is more passable
      let coinFlipResult = Math.random();
      //left side more passable
      if (coinFlipResult < 0.5)
      {
        coinFlipResult = Math.random();
        communicationManager.text = "left";

        if (i < NUMBER_OF_WAVE_COLUMNS/2)
        {
          //higher chance of destructible asteroids
          if (coinFlipResult < this.currentEasySideProbability)
          {
            let newDestructibleAsteroid = new DestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            this.arrayOfAsteroids.push(newDestructibleAsteroid);
          }
          else
          {
            let newIndestructibleAsteroid = new IndestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            this.arrayOfAsteroids.push(newIndestructibleAsteroid);
          }
        }
        else
        {
          if (coinFlipResult < this.currentDifficultSideProbability)
          {
            let newDestructibleAsteroid = new DestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            this.arrayOfAsteroids.push(newDestructibleAsteroid);
          }
          else
          {
            let newIndestructibleAsteroid = new IndestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            this.arrayOfAsteroids.push(newIndestructibleAsteroid);
          }
        }

      }
      else
      //right side more passable
      {
        coinFlipResult = Math.random();
        communicationManager.text = "right";

        if (i < NUMBER_OF_WAVE_COLUMNS/2)
        {
          //higher chance of indestructible asteroid
          if (coinFlipResult < this.currentDifficultSideProbability)
          {
            let newDestructibleAsteroid = new DestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            this.arrayOfAsteroids.push(newDestructibleAsteroid);
          }
          else
          {
            let newIndestructibleAsteroid = new IndestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            this.arrayOfAsteroids.push(newIndestructibleAsteroid);
          }
        }
        else
        {
          //higher chance of destructible asteroid
          if (coinFlipResult < this.currentEasySideProbability)
          {
            let newDestructibleAsteroid = new DestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            this.arrayOfAsteroids.push(newDestructibleAsteroid);
          }
          else
          {
            let newIndestructibleAsteroid = new IndestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            this.arrayOfAsteroids.push(newIndestructibleAsteroid);
          }
        }
      }
    }

    //this.currentEasySideProbability += this.difficultyAdjustment;
    this.currentDifficultSideProbability -= this.difficultyAdjustment;
    WAVE_ASTEROID_SPEED += 0.5;
  }

  this.drawWaveOfAsteroids = function()
  {
    for (let i = 0; i < this.arrayOfAsteroids.length; i++)
    {
      this.arrayOfAsteroids[i].Draw();
    }
  }

  this.moveWaveOfAsteroids = function()
  {
    for (let i = 0; i < this.arrayOfAsteroids.length; i++)
    {
      this.arrayOfAsteroids[i].Move();
      if (this.arrayOfAsteroids[i].y > canvas.height)
      {
        this.arrayOfAsteroids = [];
        this.SpawnWave();

        boundaryAsteroidSpeedAdjustment += 0.05;

        backgroundMusicAudioTag.playbackRate += 0.01;

        if (backgroundMusicAudioTag.volume < 1)
        {
        backgroundMusicAudioTag.volume += 0.01;
        }
      }
    }
  }
}
