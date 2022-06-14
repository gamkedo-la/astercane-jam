function GameOverScene()
{
  this.Draw = function()
  {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0,0, canvas.width,canvas.height);

    canvasContext.fillStyle = "white";
    canvasContext.font = "70px VT323";
    canvasContext.fillText("You made it through the wave!", 194, 165);
    canvasContext.font = "30px VT323";
    canvasContext.fillText("Your total damage was: " + damageCount, 453, 328);
    canvasContext.font = "20px VT323";
    canvasContext.fillText("Lower scores are better scores, like golf.", 432, 380);
    canvasContext.font = "30px VT323";
    canvasContext.fillText("Press spacebar to play again.", 426, 610);
  }
}
