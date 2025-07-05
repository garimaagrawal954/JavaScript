fetch("https://api.chucknorris.io/jokes/random")
.then(response=>{
    if(!response.ok){
        throw new Error("Failed to retrieve Chunk Norris joke");
    }
    return response.json();
})
.then(data=>{
    const joke=data.value;
    console.log(joke);
})  
.catch(error=>{
    console.error(error);
});