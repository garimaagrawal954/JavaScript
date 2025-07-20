// function Person(name){
//     this.name = name;
//     console.log(this);
//     setTimeout(function(){
//         console.log(this); 
//     },1000);
// }
// var p = new Person("Garima");



function Person(name){
    this.name = name;
    console.log(this);
    setTimeout (() => console.log(this) ,1000);
}
var p = new Person("Garima");
//allow function do not have its own binding to this variable, it uses the this value of the enclosing lexical context.