$("button:first").on("click", function(){
    $(".GameFace").hide();
    $(".header").hide();
    $(".start").show();
  });
  $(".start").hide();
  $(document).ready(function() {
var position = { left: 850, top: 47};
$(document).keydown(function(event) {
var  step = 6; 
var icon = $('#rocket-icon')
var parent=icon.parent()
var newPosition = { left: position.left, top: position.top };
switch(event.key) {
case 'ArrowUp':
newPosition.top -= step;
break;
case 'ArrowDown':
newPosition.top += step;
break
case 'ArrowLeft':
newPosition.left -= step
break
case 'ArrowRight':
newPosition.left += step
break;}
if (newPosition.left >= 0 && newPosition.left <= parent.width() - icon.width() &&
newPosition.top >= 0 && newPosition.top <= parent.height() - icon.height()) {
position = newPosition
icon.css({
    left: position.left,
    top: position.top
})
}
})
})
$(document).ready(function() {
var spotCount = 0;
function addSpot() {
spotCount++;
var leftPosition = (spotCount % 7) * (100 / 6);
var newSpot = $('<div></div>')
.addClass('spot')
.css('left', `${leftPosition}%`)
.css('animation-delay', `${Math.random() * 3}s`); 
$('.spots').append(newSpot);
newSpot.css('top', '0');
setTimeout(function() {
    newSpot.css('top', '100%');
}, 10);
var icon = $('#rocket-icon')
var spots=$('span')
if(icon.width()===newSpot.width()|| icon.height()===newSpot.height()||icon.width()===spots.width()|| icon.height()===spots.height() ){
  alert('You lost The Game')
}
}
setInterval(addSpot, 30000);
addSpot();

});

function scorecounter(){
    var count = 0;
 setInterval(function() {
  count+=10;

}, 2000);
return count
}

$("#btn1").on("click", function(){
    $(".GameFace").hide();
    $(".header").hide();
    $(".socre").append("<h1></h1>");
  });