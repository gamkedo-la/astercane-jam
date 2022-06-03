var laserShotAudioTag = new Audio("Audio/Laser_Shoot.wav");
var laserShotAudioTag2 = new Audio("Audio/Laser_Shoot.wav");
var guiNavigaeAudioTag = new Audio("Audio/GUI_Navigate.wav");
var guiSelectAudioTag = new Audio("Audio/GUI_Select.wav");
var explosionAudioTag = new Audio("Audio/Explosion.wav");
var signalBoosterAudioTag = new Audio("Audio/Signal_Booster_Powerup.wav");
var indestructibleAsteroidWithBulletAudioTag = new Audio("Audio/Indestructible_Asteroid_With_Bullet.wav");
var gameplayStartSoundAudioTag = new Audio("Audio/GameplayStartSound.wav");
var respawnSoundAudioTag = new Audio("Audio/Respawn.wav");

var backgroundMusicAudioTag = new Audio("Audio/583555__noisytoons__nt-super-cosmic.mp3");
backgroundMusicAudioTag.loop = true;
backgroundMusicAudioTag.playbackRate = 0.66;
backgroundMusicAudioTag.volume = 0.66;

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
