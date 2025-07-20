{
    let fileName = "File2";
    console.log(fileName);
}

{
    let fileName = "File3";
    console.log(fileName);
}

// Using block scope with let to avoid global pollution
// This way, each block has its own scope and variables do not interfere with each other.
//We can use IIFE to create a private scope, but using block scope with `let` is a cleaner and more modern approach.(They are doning the same thing)