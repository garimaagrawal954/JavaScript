function fetchRandomDogImage(){


    // Using XMLHttpRequest (Vanilla JS):

    // var xhrRequest = new XMLHttpRequest();
    // xhrRequest.onload = function(){
    //     console.log(xhrRequest.response);
    //     var responseJSON = JSON.parse(xhrRequest.response);
    //     var imageUrl = responseJSON.message;
    //     $('#dog_image').attr('src', imageUrl);
    // };
    // xhrRequest.onerror = function(){
    // console.log("Request Failed");
    // };
    // xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random');
    // xhrRequest.send();


    //Using jQuery AJAX methods:

    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     success: function(data){
    //     var imageUrl = data.message;
    //     $('#dog_image').attr('src', imageUrl);
    //     },
    // }).fail(function(){
    //     console.log("Request Failed");
    // });


    //Using jQuery GET method:
    
    // $.get('https://dog.ceo/api/breeds/image/random', function(data){
    //     var imageUrl = data.message;
    //     $('#dog_image').attr('src', imageUrl);
    // }).fail(function(xhr, textStatus, errorThrown){
    //     console.log("Request Failed");
    // });
}



$('#dog_image_fetch_button').click(fetchRandomDogImage);