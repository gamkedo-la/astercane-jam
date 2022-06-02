function SplashScreen()
{
  this.Draw = function()
  {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0,0, canvas.width,canvas.height);

    canvasContext.fillStyle = "white";
    canvasContext.font = "30px helvetica";
    canvasContext.fillText("press spacebar to start", canvas.width/2, canvas.height/2);
  }
}
