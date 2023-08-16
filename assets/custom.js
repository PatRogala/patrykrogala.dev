var mouseX = 0, mouseY = 0;
var xp = 0, yp = 0;

document.addEventListener('mousemove', function(e) {
  mouseX = e.pageX - 30;
  mouseY = e.pageY - 30;
});

setInterval(function() {
  xp += ((mouseX - xp) / 6);
  yp += ((mouseY - yp) / 6);
  var circle = document.getElementById("circle");
  circle.style.left = xp + 'px';
  circle.style.top = yp + 'px';
}, 20);