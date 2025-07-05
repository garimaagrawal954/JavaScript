const arr = [3,5,7,9];

const add = function(arr){
    return arr + 1;
}

//making own map funtion using prototype and this keyword
Array.prototype.find = function(add){
    const answer = [];
    for(let i = 0; i < this.length; i++){
        answer.push(add(this[i]));
    }
    return answer;
};

console.log(arr.map(add)); //using map()
console.log(arr.find(add)); //using user made find()
