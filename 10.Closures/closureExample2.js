var i = 10;
function outer(){
    var j = 20;
    var inner = function(){
        var k = 30;
        console.log(i, j, k);
        i++;
        j++;
        k++;
    }
    return inner;
}
var inner = outer();
inner();
inner();



var i = 10;
function outer(){
    var j = 20;
    var inner = function(){
        var k = 30;
        console.log(i, j, k);
        i++;
        j++;
        k++;
    }
    return inner;
}
var inner = outer();
inner();
inner = outer();
inner();
//First block: j increments with each call to inner().
//Second block: j resets to 20 after reassigning inner with a new outer() call.