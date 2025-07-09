var mouse = document.getElementById('box');
var overOut = document.getElementById('over-out');

mouse.addEventListener("mouseover", function(){
    overOut.innerText = "Mouse is over the box";
});
mouse.addEventListener("mouseout", function(){
    overOut.innerText = "Mouse is out of the box";
});