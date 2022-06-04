let startTime;

function GameplayHUD()
{
  this.displayWaveCount = function()
  {
    canvasContext.fillStyle = 'red';
    canvasContext.font = '30px VT323';
    canvasContext.fillText(asteroidWaveManager.waveCount, 50,canvas.height - 125);
  }

  this.startClock = function()
  {
    startTime = new Date();
  }

  this.displayElapsedTime = function()
  {
    let newMomentInTime = new Date();
    let elapsedTime = newMomentInTime - startTime;
    let convertToSeconds = elapsedTime/1000;
    let roundedSeconds = Math.round(convertToSeconds);
    canvasContext.fillStyle = 'red';
    canvasContext.font = '30px VT323';
    canvasContext.fillText(roundedSeconds, 100,canvas.height - 125);
  }
}
