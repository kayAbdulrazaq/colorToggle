 /* The following Javascript code selects 'button' on html page and attaches an event listener to it, 
which then toggles the classList 'green' that is created in the CSS file. */

var btn = document.querySelector("button"); 

btn.addEventListener('click', function(){
  document.body.classList.toggle("green"); 
});


