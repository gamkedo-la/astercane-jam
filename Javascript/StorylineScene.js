function StorylineScene()
{
  this.Draw = function()
  {
    this.drawBackfill();
    this.drawStorylineText();
    this.drawSpacebarTip();
  }

  this.drawBackfill = function()
  {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, canvas.width,canvas.height);
  }

  this.drawStorylineText = function()
  {
    canvasContext.fillStyle = 'grey';
    canvasContext.font = '30px chalkduster';
    canvasContext.fillText("This is the story of the game.", canvas.width/2,canvas.height/2);
  }

  this.drawSpacebarTip = function()
  {
    canvasContext.fillStyle = 'grey';
    canvasContext.font = '30px chalkduster';
    canvasContext.fillText("Press spacebar to return to title scene.", canvas.width/2,canvas.height - 100);
  }
}
