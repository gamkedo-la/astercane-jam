var shipImage=document.createElement("img");
var bulletImage=document.createElement("img");

var asteroidImage=document.createElement("img");
var indestructibleAsteroidImage=document.createElement("img");
var destructibleAsteroidImage=document.createElement("img");

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
    {varName:bulletImage, theFile:"bulletImage.png"},
    {varName:indestructibleAsteroidImage, theFile:"IndestructibleAsteroidImage.png"},
    {varName:destructibleAsteroidImage, theFile:"DestructibleAsteroidImage.png"}
    ];

  picsToLoad = imageList.length;

  for(var i=0;i<imageList.length;i++) {
    beginLoadingImage(imageList[i].varName, imageList[i].theFile);
  } // end of for imageList

} // end of function loadImages
