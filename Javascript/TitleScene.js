function TitleScene()
{
  this.titleText = "Astercane";
  this.currentButtonIndex = 0;

  this.drawBackfill = function()
  {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, canvas.width,canvas.height);
  }

  this.drawTitleText = function()
  {
    canvasContext.fillStyle = 'grey';
    canvasContext.font = 'chalkduster 30px';
    canvasContext.fillText(this.titleText, canvas.width/2 - 100, 100);
  }

  this.Draw = function()
  {
    this.drawBackfill();
    this.drawTitleText();

    this.drawButtonHighlight(this.currentButtonIndex);
    this.drawPlayButtonText();
    this.drawStorylineButtonText();
    this.drawControlsButtonText();
  }

  this.drawPlayButtonText = function()
  {
    canvasContext.fillStyle = 'grey';
    canvasContext.font = 'chalkduster 50px';
    canvasContext.fillText("Play", canvas.width/2 - 100, 300);
  }

  this.drawStorylineButtonText = function()
  {
    canvasContext.fillStyle = 'grey';
    canvasContext.font = 'chalkduster 50px';
    canvasContext.fillText("Storyline", canvas.width/2 - 100, 400);
  }

  this.drawControlsButtonText = function()
  {
    canvasContext.fillStyle = 'grey';
    canvasContext.font = 'chalkduster 50px';
    canvasContext.fillText("Controls", canvas.width/2 - 100, 500);
  }

  this.drawButtonHighlight = function(currentButtonIndex)
  {
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(canvas.width/2 - 150,250 + currentButtonIndex*100, 200,100);
  }
}
