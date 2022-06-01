const KEY_LETTER_W = 87;
const KEY_LETTER_A = 65;
const KEY_LETTER_S = 83;
const KEY_LETTER_D = 68;
const KEY_SPACEBAR = 32;

const KEY_LETTER_P = 80;

function initInput()
{
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);

  player.setupControls(KEY_LETTER_W,KEY_LETTER_A,KEY_LETTER_S,KEY_LETTER_D,KEY_SPACEBAR);
}

function setKeyHoldState(thisKey, setTo)
{
  if(thisKey == player.controlKeyToMoveUp)
  {
    player.keyHeld_MoveUp = setTo;
  }

  if(thisKey == player.controlKeyToMoveLeft)
  {
    player.keyHeld_MoveLeft = setTo;
  }
  if(thisKey == player.controlKeyToMoveDown)
  {
    player.keyHeld_MoveDown = setTo;
  }
  if(thisKey == player.controlKeyToMoveRight)
  {
    player.keyHeld_MoveRight = setTo;
  }
  if(thisKey == player.controlKeyToShoot)
  {
    if (splashScreenActive)
    {
      splashScreenActive = false;
      playingGame = true;
      backgroundMusicAudioTag.play();
      gameplayHUD.startClock();
    }
    player.keyHeld_Shoot = setTo;
    if (setTo == false)
    {
      player.shot_Fired_This_Keypress = false;
    }
  }


}

function keyPressed(evt)
{
  setKeyHoldState(evt.keyCode, true);

  evt.preventDefault(); // without this, arrow keys scroll the browser!
}

function keyReleased(evt)
{
  setKeyHoldState(evt.keyCode, false);

  if(evt.keyCode == KEY_LETTER_P)
  {
    isPaused = !isPaused;
  }
}
