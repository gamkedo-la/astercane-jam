const SIGNAL_BOOSTER_POWERUP_WIDTH = 50;
const SIGNAL_BOOSTER_POWERUP_HEIGHT = 50;

function SignalBoosterPowerup()
{
  this.x = undefined;
  this.y = undefined;

  this.offScreen = true;

  this.xVelocity = undefined;
  this.yVelocity = undefined;

  this.speed = 5;

  this.Draw = function()
  {
    canvasContext.drawImage(signalBoosterPowerupImage, this.x,this.y, SIGNAL_BOOSTER_POWERUP_WIDTH,SIGNAL_BOOSTER_POWERUP_HEIGHT);
  }

  this.Move = function()
  {
    this.x += this.xVelocity;
    this.y += this.yVelocity;

    console.log("this.x: " + this.x);
  }

  this.defineStartingPosition = function()
  {
    let fourSidedDieResult = Math.random();
    {
      //position just off the top of the screen
      if (fourSidedDieResult > 0.75)
      {
        this.x = getRandomArbitrary(0, canvas.width - SIGNAL_BOOSTER_POWERUP_WIDTH)
        this.y = getRandomArbitrary(-SIGNAL_BOOSTER_POWERUP_HEIGHT, 0);
      }
      //position just off the left of the screen
      else if (fourSidedDieResult > 0.5)
      {
        this.x = getRandomArbitrary(-SIGNAL_BOOSTER_POWERUP_WIDTH*2, SIGNAL_BOOSTER_POWERUP_WIDTH)
        this.y = getRandomArbitrary(0, canvas.height);
      }
      //position just off the bottom of the screen
      else if (fourSidedDieResult > 0.25)
      {
        this.x = getRandomArbitrary(0, canvas.width - SIGNAL_BOOSTER_POWERUP_WIDTH)
        this.y = getRandomArbitrary(canvas.height + SIGNAL_BOOSTER_POWERUP_HEIGHT, canvas.height + SIGNAL_BOOSTER_POWERUP_HEIGHT*2);
      }
      //position just off the right of the screen
      else
      {
        this.x = getRandomArbitrary(canvas.width, canvas.width + SIGNAL_BOOSTER_POWERUP_WIDTH)
        this.y = getRandomArbitrary(0, canvas.height);
      }
    }
  }

  this.SetStraightLinePathThroughVelocity = function()
  {
    var targetX = player.x;
    var targetY = player.y;
    console.log("player.x: " + player.x);
    console.log("this.x: " + this.x);
    var deltaX = targetX - this.x;
    var deltaY = targetY - this.y;
    console.log("deltaX: " + deltaX);
    console.log("deltaY: " + deltaY);
    var pathAngle = Math.atan2(deltaX,deltaY);
    console.log("pathAngle: " + pathAngle);
    this.xVelocity = this.speed * Math.cos(pathAngle);
    this.yVelocity = this.speed * Math.sin(pathAngle);
  }
}