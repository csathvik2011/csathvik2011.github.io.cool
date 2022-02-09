var block = "document.getElementbyId"("block");
var hole = "document.getElementbyId"("block");
hole.addEvent('animationiteration', () => {
var random = -((Math.random()*300)+150;
hole.style.top = random + "px";
});
