var damageCount = 0;

function DrawDamageCount()
{
  console.log("inside draw damage count");
  canvasContext.font = "30px Helvetica";
  canvasContext.fillStyle = "red";
  canvasContext.fillText("Damage Taken: " + damageCount, canvas.width/2 + 150, canvas.height - 40);
}
