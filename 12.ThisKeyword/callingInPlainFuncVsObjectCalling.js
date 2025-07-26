//In sloppy mode




console.log(this); //in the global context, 'this' refers to the global object



function demo(){  // In a plain function call, 'this' refers to the global object
    console.log(this);
}
demo();



var demo2 = function(){ // In a plain function call, 'this' refers to the global object
    console.log(this);
}
demo2(); 



var obj = {'prop1' : 12,
    'print' : function(){
        console.log(this);
    }
}
obj.print(); // In an object method call, 'this' refers to the object itself