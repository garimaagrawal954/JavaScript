var innerDiv = document.getElementById("inner");
var outerDiv = document.getElementById("outer");        
innerDiv.addEventListener("click", function(event) {
    console.log("Inner div clicked");
    event.stopPropagation(); // Prevents the event from bubbling up to the outer div.
});

outerDiv.addEventListener("click", function(event) {
    console.log("Outer div clicked");
}); // Not preventing the event from bubbling up to the document.

document.addEventListener("click", function() {
    console.log("Document clicked");
});