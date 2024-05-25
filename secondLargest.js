//find largest value
//find index of largest value
//delete index from array using splice method
//then find largest


const array = [45,3,2,76,9];
const largest = (arr)=>{
    Lar = Math.max(...arr);
    index = arr.indexOf(Lar);
    arr.splice(index,1);
    Lar = Math.max(...arr);
    return(Lar);
}
console.log(largest(array));