let canvas;
let canvasContext;

let splashScreen;
let splashScreenActive = true;

let playingGame = false;

let background;
let player;
let asteroid;
let bulletManager;
let asteroidWaveManager;
let communicationManager;
let testSignalBoosterPowerup;

window.onload = function()
{
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0,0, canvas.width,canvas.height);

  loadImages();
  InitializeGame();
}

function loadingDoneSoStartGame() {
  console.log("anything");
  var framesPerSecond = 30;
  setInterval(function() {
      MoveEverything();
      DrawEverything();
    }, 1000/framesPerSecond);
}

function InitializeGame()
{
  splashScreen = new SplashScreen();

  background = new Background();
  background.initialize();
  background.initializePlaceholderBoundarAsteroids();

  player = new Player();
  initInput();
  bulletManager = new BulletManager();

  communicationManager = new CommunicationManager();

  asteroid = new Asteroid();
  asteroidWaveManager = new AsteroidWaveManager();
  asteroidWaveManager.SpawnWave();

  testSignalBoosterPowerup = new SignalBoosterPowerup();
  console.log("testSignalBoosterPowerup: " + testSignalBoosterPowerup);
  testSignalBoosterPowerup.defineStartingPosition();
  testSignalBoosterPowerup.SetStraightLinePathThroughVelocity();
  setAudioFormat();
}

function DrawEverything()
{
  if (splashScreenActive)
  {
    splashScreen.Draw();
    return;
  }
  background.Draw();
  player.Draw();
  bulletManager.DrawBullets();
  asteroidWaveManager.drawWaveOfAsteroids();
  communicationManager.drawText();
  testSignalBoosterPowerup.Draw();
}

function MoveEverything()
{
  if (!playingGame)
  {
    return;
  }
  background.moveBoundaryAsteroids();
  player.Move();
  bulletManager.MoveBullets();
  asteroidWaveManager.moveWaveOfAsteroids();
  communicationManager.updateAlpha();
  testSignalBoosterPowerup.Move();
  testSignalBoosterPowerup.checkForReset();
}
