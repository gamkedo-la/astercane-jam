function GameOverScene()
{
  this.Draw = function()
  {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0,0, canvas.width,canvas.height);

    canvasContext.fillStyle = "white";
    canvasContext.font = "30px VT323";
    canvasContext.fillText("You made it through the wave!", canvas.width/2, canvas.height/2);
    canvasContext.fillText("Your total damage was: " + damageCount, canvas.width/2,canvas.height/2 + 35);
    canvasContext.fillText("Lower scores are better scores, like golf.", canvas.width/2, canvas.height/2 + 70);
    canvasContext.fillText("Press spacebar to play again.", canvas.width/2, canvas.height/2 + 105);
  }
}
