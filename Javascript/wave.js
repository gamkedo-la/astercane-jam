const WAVE_ROW_WIDTH = 70;
const WAVE_COLUMN_HEIGHT = 70;
const NUMBER_OF_WAVE_COLUMNS = 12;
const TOTAL_NUMBER_OF_WAVES = 50;

function Wave()
{
  this.arrayOfAsteroids = [];
  this.shouldBeMoving = false;
  this.communicationText = undefined;

  this.Initialize = function()
  {
    // while (asteroidWaveManager.currentNumberOfIndestructibleAsteroidsOnDifficultSide <
    //   asteroidWaveManager.minimumNumberOfIndestructibleAsteroidsOnDifficultSide)
    // {
      for (let i = 0; i < NUMBER_OF_WAVE_COLUMNS; i++)
      {
        //choose which side is more passable
        let coinFlipResult = Math.random();
        //left side more passable
        if (coinFlipResult < 0.5)
        {
          coinFlipResult = Math.random();
          this.communicationText = "left";

          if (i < NUMBER_OF_WAVE_COLUMNS/2)
          {
            //higher chance of destructible asteroids, easier side
            if (coinFlipResult < asteroidWaveManager.currentEasySideProbability)
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
          else //higher chance of indestructible asteroids, difficult side
          {
            if (coinFlipResult < asteroidWaveManager.currentDifficultSideProbability)
            {
              let newDestructibleAsteroid = new DestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
              this.arrayOfAsteroids.push(newDestructibleAsteroid);
            }
            else
            {
              let newIndestructibleAsteroid = new IndestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
              this.arrayOfAsteroids.push(newIndestructibleAsteroid);
              asteroidWaveManager.currentNumberOfIndestructibleAsteroidsOnDifficultSide++;
            }
          }

        }
        else
        //right side more passable
        {
          coinFlipResult = Math.random();
          this.communicationText = "right";

          if (i < NUMBER_OF_WAVE_COLUMNS/2)
          {
            //higher chance of indestructible asteroid, difficult side
            if (coinFlipResult < asteroidWaveManager.currentDifficultSideProbability)
            {
              let newDestructibleAsteroid = new DestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
              this.arrayOfAsteroids.push(newDestructibleAsteroid);
            }
            else
            {
              let newIndestructibleAsteroid = new IndestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
              this.arrayOfAsteroids.push(newIndestructibleAsteroid);
              this.currentNumberOfIndestructibleAsteroidsOnDifficultSide++;
            }
          }
          else
          {
            //higher chance of destructible asteroid, easier side
            if (coinFlipResult < this.currentEasySideProbability)
            {
              let newDestructibleAsteroid = new DestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
              this.arrayOfAsteroids.push(newDestructibleAsteroid);
            }
            else
            {
              let newIndestructibleAsteroid = new IndestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
              this.arrayOfAsteroids.push(newIndestructibleAsteroid);
            }//end of else of coin flip
          }
        }//end of right side easier
      }//end of wave construction for loop
    //}//end of while loop checking for minimum number of indestructible asteroids
  }

  this.Draw = function()
  {
    for (let i = 0; i < this.arrayOfAsteroids.length; i++)
    {
      this.arrayOfAsteroids[i].Draw();
    }
  }

  this.Move = function()
  {
    for (let i = 0; i < this.arrayOfAsteroids.length; i++)
    {
      this.arrayOfAsteroids[i].Move();
    }//end of for loop through array of asteroids
  }//end of move
}//end of wave

function AsteroidWaveManager()
{
  this.difficultyAdjustment = 0.05;
  this.currentEasySideProbability = 0.75;
  this.currentDifficultSideProbability = 0.25;

  this.waveCount = 0;
  this.endWaveCount = 50;

  this.arrayOfWaves = [];

  this.currentNumberOfIndestructibleAsteroidsOnDifficultSide = 0;
  this.minimumNumberOfIndestructibleAsteroidsOnDifficultSide = 2;

  this.defineMinimumNumberOfIndestructibleAsteroidsOnDifficultSide = function()
  {
    if (this.waveCount < 10)
    {
      this.minimumNumberOfIndestructibleAsteroidsOnDifficultSide = 2;
    }
    else if (this.waveCount < 20)
    {
      this.minimumNumberOfIndestructibleAsteroidsOnDifficultSide = 3;
    }
    else if (this.waveCount < 30)
    {
      this.minimumNumberOfIndestructibleAsteroidsOnDifficultSide = 4;
    }
    else if (this.waveCount < 40)
    {
      this.minimumNumberOfIndestructibleAsteroidsOnDifficultSide = 5;
    }
    else if (this.waveCount < 50)
    {
      this.minimumNumberOfIndestructibleAsteroidsOnDifficultSide = 6;
    }
  }

  this.checkForEndOfGame = function()
  {
      if (this.waveCount == this.endWaveCount)
      {
        playingGame = false;
        gameOver = true;
        this.waveCount = 0;
      }
  }

  this.SpawnWave = function()
  {
    this.defineMinimumNumberOfIndestructibleAsteroidsOnDifficultSide();
    let newWave = new Wave();
    newWave.Initialize();
    newWave.shouldBeMoving = false;
    this.arrayOfWaves.push(newWave);

    asteroidWaveManager.waveCount++;

    //this.currentEasySideProbability += this.difficultyAdjustment;
    this.currentDifficultSideProbability -= this.difficultyAdjustment;
    WAVE_ASTEROID_SPEED += 0.5;
    this.currentNumberOfIndestructibleAsteroidsOnDifficultSide = 0;
  }

  this.Initialize = function()
  {
      let firstWave = new Wave();
      firstWave.Initialize();
      firstWave.shouldBeMoving = true;
      this.arrayOfWaves.push(firstWave);

      let secondWave = new Wave();
      secondWave.Initialize();
      secondWave.shouldBeMoving = false;
      this.arrayOfWaves.push(secondWave);

      asteroidWaveManager.waveCount = 1;

      communicationManager.text = this.arrayOfWaves[0].communicationText;
  }

  this.drawWavesOfAsteroids = function()
  {
    for (let i = 0; i < this.arrayOfWaves[0].arrayOfAsteroids.length; i++)
    {
      this.arrayOfWaves[0].arrayOfAsteroids[i].Draw();
    }
  }

  this.moveWavesOfAsteroids = function()
  {
    for (let i = 0; i < this.arrayOfWaves[0].arrayOfAsteroids.length; i++)
    {
      this.arrayOfWaves[0].arrayOfAsteroids[i].Move();
    }

    //remove waves which have moved off bottom of screen and spawn/push new wave to end of array

    if (this.arrayOfWaves[0].arrayOfAsteroids[0].y + this.arrayOfWaves[0].arrayOfAsteroids[0].height
        > canvas.height)
    {
      this.arrayOfWaves[1].shouldBeMoving = true;
      this.arrayOfWaves.splice(0,1);

      let newWave = new Wave();
      newWave.Initialize();
      newWave.shouldBeMoving = false;
      this.arrayOfWaves.push(newWave);
      asteroidWaveManager.waveCount++;
      communicationManager.text = this.arrayOfWaves[0].communicationText;
      // console.log("this.arrayOfWaves: " + this.arrayOfWaves[0]);
      // console.log("this.arrayOfWaves: " + this.arrayOfWaves[1]);
    }
  }
}
