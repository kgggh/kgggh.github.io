const toggleBtn = document.querySelector('.nav_toggleBtn');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');

toggleBtn.addEventListener('click', function (){
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });


function winOpen1(){
    window.open("https://www.youtube.com/watch?v=sOAcjzd0gas","new"); 
}

function openGithub1(){
    window.open("https://github.com/kgggh/Spring_Delivery","new"); 
}
function openGithub2(){
    window.open("https://github.com/kgggh/bugny","new"); 
}

function winOpen2(){
    window.open("http://18.188.2.133:8080/bugny/","new"); 
}

