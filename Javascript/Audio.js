var laserShotAudioTag = new Audio("Audio/Laser_Shoot.wav");
var guiNavigaeAudioTag = new Audio("Audio/GUI_Navigate.wav");
var guiSelectAudioTag = new Audio("Audio/GUI_Select.wav");

var backgroundMusicAudioTag = new Audio("Audio/583555__noisytoons__nt-super-cosmic.mp3");

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
