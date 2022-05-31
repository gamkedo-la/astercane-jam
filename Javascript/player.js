const PLAYER_Y_SPEED = 15;
const PLAYER_X_SPEED = 15;

function Player()
{
  this.width = 35;
  this.height = 35;

  this.image = shipImage;

  this.startingX = gameCanvas.width/2 - this.width/2;
  this.startingY = gameCanvas.height - (this.height*2);

  this.x = this.startingX;
  this.y = this.startingY;

  this.destroyed = false;

  this.keyHeld_MoveUp = false;
  this.keyHeld_MoveLeft = false;
  this.keyHeld_MoveDown = false;
  this.keyHeld_MoveRight = false;
  this.keyHeld_Shoot = false;

  this.shot_Fired_This_Keypress = false;
  this.shouldPlaySecondLaserAudioTag = false;

  this.setupControls = function(moveUpKey,moveLeftKey,moveDownKey,moveRightKey,shootKey)
  {
    this.controlKeyToMoveUp = moveUpKey;
    this.controlKeyToMoveLeft = moveLeftKey;
    this.controlKeyToMoveDown = moveDownKey;
    this.controlKeyToMoveRight = moveRightKey;
    this.controlKeyToShoot = shootKey;
  }

  this.Move = function()
  {
    if(this.keyHeld_MoveUp)
    {
      this.y -= PLAYER_Y_SPEED;
    }

    if(this.keyHeld_MoveLeft)
    {
      this.x -= PLAYER_X_SPEED;
    }

    if(this.keyHeld_MoveDown)
    {
      this.y += PLAYER_Y_SPEED;
      if (this.y + this.height > canvas.height)
      {
        this.y = canvas.height - this.height;
      }
    }

    if(this.keyHeld_MoveRight)
    {
      this.x += PLAYER_X_SPEED;
    }

    if(this.keyHeld_Shoot)
    {
      if (this.shot_Fired_This_Keypress)
      {
        return;
      }
      this.ShootBullet();
    }

    //collision check asteroids
    for (let i = 0; i < asteroidWaveManager.arrayOfAsteroids.length; i++)
    {
      if (
        //if colliding with a main asteroid
        (this.x < asteroidWaveManager.arrayOfAsteroids[i].x + DESTRUCTIBLE_ASTEROID_WIDTH &&
          this.x + this.width > asteroidWaveManager.arrayOfAsteroids[i].x &&
          this.y < asteroidWaveManager.arrayOfAsteroids[i].y + DESTRUCTIBLE_ASTEROID_HEIGHT &&
          this.y + this.height > asteroidWaveManager.arrayOfAsteroids[i].y )
        ||
        //if colliding with astercane boundaries
        (this.x < LEFT_ASTERCANE_BOUNDARY_XCOORDINATE - this.width/2 || this.x + this.width > RIGHT_ASTERCANE_BOUNDARY_XCOORDINATE + this.width/2)
      )
          {
            this.x = this.startingX;
            this.y = this.startingY;
            damageCount++;
            explosionAudioTag.play();
          }
    }

    //collision check signal booster powerup
    if (this.x < testSignalBoosterPowerup.x + SIGNAL_BOOSTER_POWERUP_WIDTH &&
      this.x + this.width > testSignalBoosterPowerup.x &&
      this.y < testSignalBoosterPowerup.y + SIGNAL_BOOSTER_POWERUP_HEIGHT &&
      this.y + this.height > testSignalBoosterPowerup.y)
      {
        testSignalBoosterPowerup.defineStartingPosition();
        testSignalBoosterPowerup.SetStraightLinePathThroughVelocity();
        communicationManager.currentAlpha = 1;
      }
  }

  this.ShootBullet = function()
  {
      let newBullet = new Bullet(this.x + this.width/2 - BULLET_WIDTH/2, this.y - BULLET_HEIGHT);
      bulletManager.arrayOfBullets.push(newBullet);

      if (this.shouldPlaySecondLaserAudioTag)
      {
        laserShotAudioTag2.currentTime = 0;
        laserShotAudioTag2.play();
      }
      else
      {
        laserShotAudioTag.currentTime = 0;
        laserShotAudioTag.play();
      }
      this.shouldPlaySecondLaserAudioTag = !this.shouldPlaySecondLaserAudioTag;

      this.shot_Fired_This_Keypress = true;
  }

  this.Draw = function()
  {
    if (!this.destroyed)
    {
      canvasContext.drawImage(shipImage, this.x,this.y, this.width,this.height);
    }
  }
}
