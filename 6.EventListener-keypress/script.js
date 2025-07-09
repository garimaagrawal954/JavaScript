var userInput = document.getElementById("input");
var keyCode = document.getElementById("key");

userInput.addEventListener("keypress", function(){
    console.log("Key pressed in input field");
});
userInput.addEventListener("keydown", function(){ 
    console.log("Key pressed in input field");
});
userInput.addEventListener("keyup", function(){
    console.log("Key pressed in input field");
});

document.addEventListener("keydown", function(event){
    keyCode.innerText = "Key Down: " + event.key;
});