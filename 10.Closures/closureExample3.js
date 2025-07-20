function Adder(x){
    return function(y){
        return x + y;
    };
}
var add5 = Adder(5);
var add10 = Adder(10);
console.log(add5(2));
console.log(add10(2)); 

//What is the Closure Here?
  //Each time you call Adder(x), you're creating a new closure:
  //add5 is a closure that remembers x = 5

  //add10 is a closure that remembers x = 10

  //They each keep their own copy of x, even after Adder() finishes running.

//Real-world Analogy:
  //Imagine Adder(x) gives you a custom calculator with x pre-filled.

  //add5 is a calculator with 5 already stored inside.

  //add10 is one with 10 stored.

  //Every time you enter a number (y), it adds it to the pre-filled x.