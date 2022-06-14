const WAVE_ROW_WIDTH = 70;
const WAVE_COLUMN_HEIGHT = 70;
const NUMBER_OF_WAVE_COLUMNS = 12;
const TOTAL_NUMBER_OF_WAVES = 50;

function Wave()
{
  this.arrayOfAsteroids = [];
  this.shouldBeMoving = false;
  this.communicationText = undefined;
  this.currentNumberOfIndestructibleAsteroidsOnDifficultSide = 0;
  this.currentNumberOfDestructibleAsteroidsOnEasySide = 0;

  this.Initialize = function()
  {
    //construct easy side
    let easySideArrayOfAsteroids = [];

    while (this.currentNumberOfDestructibleAsteroidsOnEasySide < 3)
    {
      for (let i = 0; i < 6; i++)
      {
        let coinFlipResult = Math.random();
        {
          if (coinFlipResult < 0.5)
          {
            let newDestructibleAsteroid = new DestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            easySideArrayOfAsteroids.push(newDestructibleAsteroid);
            this.currentNumberOfDestructibleAsteroidsOnEasySide++;
          }
          else
          {
            let newIndestructibleAsteroid = new IndestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            easySideArrayOfAsteroids.push(newIndestructibleAsteroid);
          }
        }
      }

      console.log("this.currentNumberOfDestructibleAsteroidsOnEasySide, before finalizing: " +
                  this.currentNumberOfDestructibleAsteroidsOnEasySide);

      if (this.currentNumberOfDestructibleAsteroidsOnEasySide < 3)
      {
        this.currentNumberOfDestructibleAsteroidsOnEasySide = 0;
      }
    }//end of easy side while loop
    console.log("this.currentNumberOfDestructibleAsteroidsOnEasySide, after finalizing: " +
                this.currentNumberOfDestructibleAsteroidsOnEasySide);
    //construct difficult side
    let difficultSideArrayOfAsteroids = [];

    while (this.currentNumberOfIndestructibleAsteroidsOnDifficultSide <
           asteroidWaveManager.minimumNumberOfIndestructibleAsteroidsOnDifficultSide)
    {
      for (let i = 0; i < 6; i++)
      {
        let coinFlipResult = Math.random();
        {
          if (coinFlipResult < 0.5)
          {
            let newDestructibleAsteroid = new DestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            difficultSideArrayOfAsteroids.push(newDestructibleAsteroid);
          }
          else
          {
            let newIndestructibleAsteroid = new IndestructibleAsteroid(LEFT_ASTERCANE_BOUNDARY_XCOORDINATE + (DESTRUCTIBLE_ASTEROID_WIDTH * i),-DESTRUCTIBLE_ASTEROID_HEIGHT);
            difficultSideArrayOfAsteroids.push(newIndestructibleAsteroid);
            this.currentNumberOfIndestructibleAsteroidsOnDifficultSide++;
          }
        }
      }

      console.log("this.currentNumberOfIndestructibleAsteroidsOnDifficultSide, before finalizing: " +
                  this.currentNumberOfIndestructibleAsteroidsOnDifficultSide);

      if (this.currentNumberOfIndestructibleAsteroidsOnDifficultSide <
          asteroidWaveManager.minimumNumberOfIndestructibleAsteroidsOnDifficultSide)
      {
        this.currentNumberOfIndestructibleAsteroidsOnDifficultSide = 0;
      }
      console.log("this.currentNumberOfIndestructibleAsteroidsOnDifficultSide, after finalizing: " +
                  this.currentNumberOfIndestructibleAsteroidsOnDifficultSide);
    }//end of difficult side while loop

    //combine easier and more difficult arrays
    let coinFlipResult = Math.random();
    //left side will be easier
    if (coinFlipResult < 0.5)
    {
      this.communicationText = 'left';
      for (let i = 0; i < easySideArrayOfAsteroids.length; i++)
      {
        this.arrayOfAsteroids.push(easySideArrayOfAsteroids[i]);
      }
      for (let i = 0; i < difficultSideArrayOfAsteroids.length; i++)
      {
        difficultSideArrayOfAsteroids[i].x += WAVE_ROW_WIDTH * 6;
        this.arrayOfAsteroids.push(difficultSideArrayOfAsteroids[i]);
      }
    }
    else //right side will be easier
    {
      this.communicationText = 'right';
      for (let i = 0; i < difficultSideArrayOfAsteroids.length; i++)
      {
        this.arrayOfAsteroids.push(difficultSideArrayOfAsteroids[i]);
      }
      for (let i = 0; i < easySideArrayOfAsteroids.length; i++)
      {
        easySideArrayOfAsteroids[i].x += WAVE_ROW_WIDTH * 6;
        this.arrayOfAsteroids.push(easySideArrayOfAsteroids[i]);
      }
    }
  }//end of Initialize


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
  this.endWaveCount = 30;

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
        gameOverAudioTag.play();
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
      WAVE_ASTEROID_SPEED += 0.5;
      communicationManager.text = this.arrayOfWaves[0].communicationText;
    }
  }
}
