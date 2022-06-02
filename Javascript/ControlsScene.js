function ControlsScene()
{
  this.Draw = function()
  {
    this.drawBackfill();
    this.drawControlsText();
    this.drawSpacebarTip();
  }

  this.drawBackfill = function()
  {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, canvas.width,canvas.height);
  }

  this.drawControlsText = function()
  {
    canvasContext.fillStyle = 'grey';
    canvasContext.font = '30px chalkduster';
    canvasContext.fillText("W = move up", canvas.width/2,canvas.height/2);
    canvasContext.fillText("A = move left", canvas.width/2,canvas.height/2 + 30);
    canvasContext.fillText("S = move down", canvas.width/2,canvas.height/2 + 60);
    canvasContext.fillText("D = move right", canvas.width/2,canvas.height/2 + 90);
    canvasContext.fillText("Spacebar = shoot", canvas.width/2,canvas.height/2 + 120);
  }

  this.drawSpacebarTip = function()
  {
    canvasContext.fillStyle = 'grey';
    canvasContext.font = '30px chalkduster';
    canvasContext.fillText("Press spacebar to return to title scene.", canvas.width/2,canvas.height - 100);
  }
}
