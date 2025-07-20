(function(){
    var name = "File1";
    setTimeout(function(){
        console.log(name);
    }, 1000)
})();

(function(){
    var name = "File2";
    console.log(name);    
})();

//Don't make global variables or call functions in the global scope. It will create confusion/ wrong output if we have multiple files.
//IIFE (Immediately Invoked Function Expression) is a good way to avoid polluting the global scope.
//It allows you to create a private scope for your variables and functions, preventing them from being accessible globally.