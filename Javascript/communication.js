function CommunicationManager()
{
  this.text = "";
  this.currentAlpha = 1;

  this.drawText = function()
  {
    if (this.currentAlpha < 0.01)
    {
      return;
    }
    canvasContext.globalAlpha = this.currentAlpha;
    canvasContext.font = "50px VT323";
    canvasContext.fillStyle = "purple";
    canvasContext.fillText(this.text, canvas.width/2, 50);
    canvasContext.globalAlpha = 1;
  }

  this.updateAlpha = function()
  {
    this.currentAlpha -= 0.0025;
  }
}
