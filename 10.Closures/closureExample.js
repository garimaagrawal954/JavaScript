var i = 10;
function outer(){
    var j = 20;
    console.log(i, j);
    var inner = function(){ //Here, inner is a closure function.
        var k = 30;
        console.log(j, k);
    }
    return inner;
}
var inn = outer(); //it returns inner function that remember j and stored here in a new different inner variable.
inn(); //now if we call inner() it is calling above line that's why it has access of j even after outer() execution context is destroyed.
//Closure is a function that remembers its lexical scope even when the function is executed outside that scope.