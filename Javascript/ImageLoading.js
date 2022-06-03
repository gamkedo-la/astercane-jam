var shipImage=document.createElement("img");
var bulletImage=document.createElement("img");

var asteroidImage=document.createElement("img");
var asteroidImage2=document.createElement("img");
var asteroidImage3=document.createElement("img");

var indestructibleAsteroidImage=document.createElement("img");
var destructibleAsteroidImage=document.createElement("img");

var signalBoosterPowerupImage=document.createElement("img");

var galaxianStarImage=document.createElement("img");

var explosionImage1=document.createElement("img");
var explosionImage2=document.createElement("img");
var explosionImage3=document.createElement("img");
var explosionImage4=document.createElement("img");
var explosionImage5=document.createElement("img");
var explosionImage6=document.createElement("img");
var explosionImage7=document.createElement("img");

var picsToLoad = 0;

function countLoadedImageAndLaunchIfReady() {
  picsToLoad--;
  if(picsToLoad == 0) { // last image loaded?
    loadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload=countLoadedImageAndLaunchIfReady;
  imgVar.src="Images/"+fileName;
}

function loadImages() {
  var imageList = [
    {varName:shipImage, theFile:"ShipImage.png"},
    {varName:asteroidImage, theFile:"AsteroidImage.png"},
    {varName:asteroidImage2, theFile:"AsteroidImage2.png"},
    {varName:asteroidImage3, theFile:"AsteroidImage3.png"},
    {varName:bulletImage, theFile:"bulletImage.png"},
    {varName:indestructibleAsteroidImage, theFile:"IndestructibleAsteroidImage.png"},
    {varName:destructibleAsteroidImage, theFile:"DestructibleAsteroidImage.png"},
    {varName:signalBoosterPowerupImage, theFile:"SignalBoosterPowerupImage.png"},
    {varName:galaxianStarImage, theFile:"GalaxianStarImage.png"},

    {varName:explosionImage1, theFile:"explosionAnimation/explosion1.png"},
    {varName:explosionImage2, theFile:"explosionAnimation/explosion2.png"},
    {varName:explosionImage3, theFile:"explosionAnimation/explosion3.png"},
    {varName:explosionImage4, theFile:"explosionAnimation/explosion4.png"},
    {varName:explosionImage5, theFile:"explosionAnimation/explosion5.png"},
    {varName:explosionImage6, theFile:"explosionAnimation/explosion6.png"},
    {varName:explosionImage7, theFile:"explosionAnimation/explosion7.png"}
    ];

  picsToLoad = imageList.length;

  for(var i=0;i<imageList.length;i++) {
    beginLoadingImage(imageList[i].varName, imageList[i].theFile);
  } // end of for imageList

} // end of function loadImages
