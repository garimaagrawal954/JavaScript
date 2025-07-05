var heading = document.getElementById('one');
heading.style.color = 'red';
heading.style.fontSize = '24px';
heading.style.fontWeight = 'bold';
heading.style.textAlign = 'center'; 
heading.style.backgroundColor = 'cyan';

var headings = document.getElementsByTagName('h1');
headings[1].innerText = "Second Heading - updated";

var paragraph = document.getElementsByClassName('para');
paragraph[0].style.color = 'green';

for(var i = 0; i < paragraph.length; i++){
    paragraph[i].style.fontSize = '10px';
}

var h = document.querySelector('#one');
h.style.color = 'purple';

var p = document.querySelector('.para');
p.style.color = 'yellow'

var allHeadings = document.querySelectorAll('h1');
allHeadings[0].style.color = 'blue';
allHeadings[1].style.color = 'orange';