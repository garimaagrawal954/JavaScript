var add = (function(){
    var counter = 0;
    return function () {counter += 1; return counter;} 
    //The result of the IIFE is the returned function. So add holds a function that closes over counter.
})();
console.log(add()); //Each time you call add(), it executes: returned function remembers counter, even though the outer function has already finished executing.
console.log(add()); //counter is not re-declared or reset inside the add() function. It lives in the closure, which is preserved across calls.
console.log(add());






var add = function() {
    var counter = 0;
    counter += 1;
    return counter;
};
console.log(add()); // 1
console.log(add()); // 1
console.log(add()); // 1
//Because each add() call creates a fresh counter. 