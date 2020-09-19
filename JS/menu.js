var toggleBtn = document.querySelector('.menu_toggleBtn');
var hamIcon = document.querySelector('.hamIcon');
var menu = document.querySelector('.menu_list');
var icons = document.querySelector('.menu_icons');

function toggleMenu(){
    hamIcon.classList.toggle('icon_color');
    menu.classList.toggle('active');
    icons.classList.toggle('active');

}
toggleBtn.addEventListener("click", toggleMenu);