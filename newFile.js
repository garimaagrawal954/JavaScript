fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const modifiedData = data.map(item => {
            return {
                UserId: item.userId,
                Id: item.id,
                Title: item.title.toUpperCase(),
                Body: item.body.toLowerCase(),
                done: true
            };
        });
        console.log(modifiedData);
    })

