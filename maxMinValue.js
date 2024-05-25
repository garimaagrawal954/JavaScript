const array = [4,56,1,2,67,99,0];
const maxFuction = (arr)=>{
    return arr.reduce(function(pre, cur){
        return pre>cur?pre:cur //pre<cur for minimum value
    });
};
console.log(maxFuction(array));