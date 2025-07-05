const arr = [1,2,1,3,2];
const duplicates = arr.filter((ele,index,arr)=>arr.indexOf(ele)!==index);
console.log(duplicates);