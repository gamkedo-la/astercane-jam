var laserShotAudioTag = new Audio("Audio/Laser_Shoot.wav");
var laserShotAudioTag2 = new Audio("Audio/Laser_Shoot.wav");
var guiNavigaeAudioTag = new Audio("Audio/GUI_Navigate.wav");
var guiSelectAudioTag = new Audio("Audio/GUI_Select.wav");
var explosionAudioTag = new Audio("Audio/Explosion.wav");
var signalBoosterAudioTag = new Audio("Audio/Signal_Booster_Powerup.wav");
var indestructibleAsteroidWithBulletAudioTag = new Audio("Audio/Indestructible_Asteroid_With_Bullet.wav");
var gameplayStartSoundAudioTag = new Audio("Audio/GameplayStartSound.wav");
var respawnSoundAudioTag = new Audio("Audio/Respawn.wav");
var moveSoundAudioTag = new Audio("Audio/MoveSound.wav");
var moveSoundAudioTag2 = new Audio("Audio/MoveSound.wav");
var gameOverAudioTag = new Audio("Audio/game-over.wav");
var othersongAudioTag = new Audio("Audio/songithink.wav");

var backgroundMusicAudioTag = new Audio("Audio/Astercane.wav");
backgroundMusicAudioTag.loop = true;
backgroundMusicAudioTag.playbackRate = 1;
backgroundMusicAudioTag.volume = 0.66;

laserShotAudioTag.volume = 0.30;
laserShotAudioTag2.volume = 0.40;
respawnSoundAudioTag.volume = 0.60;

var audioFormat;

function setAudioFormat()
{
  var audio = new Audio();
  if (audio.canPlayType("audio/mp3"))
  {
    console.log("can play mp3");
  }
  if (audio.canPlayType("audio/ogg"))
  {
    console.log("can play ogg");
  }
  if (audio.canPlayType("audio/wav"))
  {
    console.log("can play wav");
  }
}
