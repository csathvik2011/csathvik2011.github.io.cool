var block = "document.getElementbyId"("block");
var hole = "document.getElementbyId"("hole");
var character = "document.getElementbyId"("character")

hole.addEvent('animationiteration', () => {
var random = Math.random()*3;
var top = (random*100)+150;
hole.style.top = -(top)+"px";
});
setInterval(function)){
var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  character.style.top = (charcterTop+3)+"px";
},10);   

function jump(){

}
