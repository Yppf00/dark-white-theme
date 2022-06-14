//lets 

let toggler = document.querySelector('#toggler');
let body = document.querySelector('body');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

//event listener for toggler

toggler.addEventListener('click', function () {
   body.classList.toggle('dark-background');
   h2.classList.toggle('light');
   h3.classList.toggle('light');
   p.classList.toggle('light');
});
