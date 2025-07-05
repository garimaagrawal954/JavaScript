const radius = [1,2,3,4];
const calculateArea = function(radius){
    const answer = [];
    for(let i = 0; i < radius.length; i++){
        answer.push(Math.PI * radius[i] * radius[i]);
    }
    return answer;
};
console.log(calculateArea(radius));