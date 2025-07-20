function test(){
    for(var i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        }, 1000);
    }
    console.log("After for loop", i);
}
test();
//var is function-scoped, not block-scoped.
//The variable i is shared across all iterations of the loop.
//setTimeout() is asynchronous — it runs after the loop finishes.
//So, by the time the timeout functions execute, i is 6 (the loop has completed).




//To fix this, use let to create a block-scoped variable:
function test(){
    for(let i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        }, 1000);
    }
}
test();
//let is block-scoped.
//Each iteration of the loop creates a new copy of i.
//So every setTimeout() captures its own version of i.