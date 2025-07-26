
//In strict mode, the simple plain function call is not bound to any object by default.
'use strict';
function demo(){
    console.log(this);
}
demo();
//It will give undefined but we can change it by using call or apply methods and passing object as the first argument.

function demo2(){
    console.log(this);
}
demo2.call({name: 'Custom Context'}); // Using call to set 'this' to a custom object, we can do same using apply as well


function demo3(a, b){
    console.log(this);
    console.log(a, b);
}
demo3.call({name: 'Custom Context'}, 1, 2); // Using call to set 'this' and pass arguments but can't use apply here as it doesn't accept multiple arguments directly
demo3.apply({name: 'Custom Context'}, [1, 2]); // Using apply to set 'this' and pass arguments as an array







var obj = {    'prop1' : 12, //As it is like sloppy mode, 'this' refers to the object itself
    'print' : function(){
        console.log(this);
    }
}
obj.print();