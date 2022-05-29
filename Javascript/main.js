let canvas;
let canvasContext;

let background;
let player;
let asteroid;
let bulletManager;
let asteroidWaveManager;
let communicationManager;

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
  // these next few lines set up our game logic and render to happen 30 times per second
  var framesPerSecond = 30;
  setInterval(function() {
      MoveEverything();
      DrawEverything();
    }, 1000/framesPerSecond);
}

function InitializeGame()
{
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
}

function DrawEverything()
{
  background.Draw();
  player.Draw();
  bulletManager.DrawBullets();
  asteroidWaveManager.drawWaveOfAsteroids();
  communicationManager.drawText();
}

function MoveEverything()
{
  background.moveBoundaryAsteroids();
  player.Move();
  bulletManager.MoveBullets();
  asteroidWaveManager.moveWaveOfAsteroids();
  communicationManager.updateAlpha();
}
