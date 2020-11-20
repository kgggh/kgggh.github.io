const toggleBtn = document.querySelector('.nav_toggleBtn');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');

toggleBtn.addEventListener('click', function (){
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });


function winOpen(){
    window.open("https://www.youtube.com/watch?v=sOAcjzd0gas","new"); 
}

function openGithub(){
    window.open("https://github.com/kgggh/Spring_Delivery","new"); 
}
