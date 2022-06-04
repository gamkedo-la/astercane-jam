var damageCount = 0;

function DrawDamageCount()
{
  canvasContext.font = "30px VT323";
  canvasContext.fillStyle = "red";
  canvasContext.fillText("Damage Taken: " + damageCount, canvas.width/2 + 150, canvas.height - 125);
}
