function abc(event) {
    console.log("Input element contains text -", event.target.value);
}
// Get the first input element and attach the 'input' event
document.getElementsByTagName("input")[0].addEventListener("input", abc);
// When something is typed in the input box, the abc() function is called. 
// It logs the current value of the input in the console.
