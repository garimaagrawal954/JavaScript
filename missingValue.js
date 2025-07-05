const array = [0,2,3,5,7,9];
const missArr = [];
const missingValue = (arr)=>{
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    for(let i = minValue; i < maxValue; i++){
        if(arr.indexOf(i) < 0){
            missArr.push(i);
        }
    }
    return(missArr);

}
console.log(missingValue(array));