// let user = {
//     fisrtname: "John",
//     lastname: "Doe",
//     getFullName: function(){
//         return function(){
//             console.log('the name of the user is $(this.firstname) $(this.lastname)');
//         }
//     }
// }
// user.getFullName()(); // the name of the user is undefined undefined

// The above code does not work as expected because the inner function does not have access to the `this` context of the outer function.
// To fix this, we can use an arrow function which captures the `this` context.



let user = {
    firstname: "John",
    lastname: "Doe",
    getFullName: function() {
        return () => {
            console.log(`the name of the user is ${this.firstname} ${this.lastname}`);
        }
    }
}
user.getFullName()(); // the name of the user is John Doe

// Now the arrow function correctly accesses the `this` context of the `user` object, allowing us to retrieve the `firstname` and `lastname` properties.            