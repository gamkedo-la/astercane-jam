let canvas;
let canvasContext;

let isPaused = false;

let splashScreen;
let splashScreenActive = true;
let titleScene;
let titleSceneActive = false;
let storylineScene;
let storylineSceneActive = false;
let controlsScene;
let controlsSceneActive = false;

let playingGame = false;
let gameOver = false;
let gameOverScene;

let background;
let player;
let asteroid;
let bulletManager;
let asteroidWaveManager;
let communicationManager;
let testSignalBoosterPowerup;
let gameplayHUD;

let galaxianStarManager;

let explosionManager;

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

  titleScene = new TitleScene();
  storylineScene = new StorylineScene();
  controlsScene = new ControlsScene();

  player = new Player();
  initInput();
  bulletManager = new BulletManager();

  communicationManager = new CommunicationManager();

  asteroid = new Asteroid();
  asteroidWaveManager = new AsteroidWaveManager();
  asteroidWaveManager.SpawnWave();

  testSignalBoosterPowerup = new SignalBoosterPowerup();
  testSignalBoosterPowerup.defineStartingPosition();
  testSignalBoosterPowerup.SetStraightLinePathThroughVelocity();

  gameplayHUD = new GameplayHUD();

  galaxianStarManager = new GalaxianStarManager();
  galaxianStarManager.initialize();

  explosionManager = new ExplosionManager();

  gameOverScene = new GameOverScene();

  setAudioFormat();
}

function DrawEverything()
{
  if (splashScreenActive)
  {
    splashScreen.Draw();
    return;
  }
  if (titleSceneActive)
  {
    titleScene.Draw();
    return;
  }
  if (storylineSceneActive)
  {
    storylineScene.Draw();
    return;
  }
  if (controlsSceneActive)
  {
    controlsScene.Draw();
    return;
  }
  if (gameOver)
  {
    gameOverScene.Draw();
    return;
  }

  if (isPaused)
  {
    canvasContext.fillStyle = "red";
    canvasContext.font = "100px VT323";
    canvasContext.fillText("Paused", canvas.width/2 - 50,canvas.height/2 - 50);
  }
  else
  {
    background.Draw();
    galaxianStarManager.DrawGalaxianStars();
    player.Draw();
    bulletManager.DrawBullets();
    asteroidWaveManager.drawWaveOfAsteroids();
    communicationManager.drawText();
    testSignalBoosterPowerup.Draw();
    DrawDamageCount();
    gameplayHUD.displayWaveCount();
    gameplayHUD.displayElapsedTime();
    explosionManager.drawExplosions();
    //canvasContext.drawImage(explosionImage1, canvas.width/2,canvas.height/2, 100,100);
  }
}

function MoveEverything()
{
  if (!playingGame || isPaused)
  {
    return;
  }
  background.moveBoundaryAsteroids();
  galaxianStarManager.UpdateGalaxianStarAlphas();
  galaxianStarManager.MoveGalaxianStars();
  player.Move();
  bulletManager.MoveBullets();
  asteroidWaveManager.checkForEndOfGame();
  asteroidWaveManager.moveWaveOfAsteroids();
  communicationManager.updateAlpha();
  testSignalBoosterPowerup.Move();
  testSignalBoosterPowerup.checkForReset();
  explosionManager.updateExplosions();
}
