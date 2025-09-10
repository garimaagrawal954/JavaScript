
//how jquery make code easy

//with js
var para1 = document.getElementById("para1");
para1.innerHTML = "Welcome";

//with jQuery
$('#para1').html("Welcome");
$('#para2').hide();
$('#para1').css("color","red");
$('div').css({
    width: "100px",
    height: "100px",
    backgroundColor: "blue"
    });


//diffeernce between jquery object and dom object

//jquery object
var paras = $('p'); 
console.log(paras); //jquery object
var p1 = paras.eq(0); 
console.log(p1); //jquery object
p1.html("Hello"); //p1 is jquery object so we can use jquery methods on it

//dom object
var p2 = paras[0]; 
console.log(p2); //dom object
// p2.html("Hello"); //p2 is dom object so we cannot use jquery methods on it
p2.innerHTML = "Hello"; //we can use dom methods on it

//converting between jquery object and dom object
var p3 = $(p2); //converting dom object to jquery object
console.log(p3); //jquery object
p3.css({"color":"green", "fontSize":"30px"}); //p3 is jquery object so we can use jquery methods on it



//jQuery event handling
// $('div').click(function(){
//     alert("Div clicked");
// });

$('div').on('click', function(){
    var element = $(this);
    element.width(element.width() + 10 + "px");
});

$('a').on('click', function(event){
    event.preventDefault(); //to prevent default action of anchor tag as we set href = "google.com" in html and we are changing it to alert but without this line it will go to google.com after alert popup
    alert("Anchor tag CLicked");
});

