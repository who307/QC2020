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

// 스크롤
$(function(){
  var header = $('header');
  var page = $('.article2');
  var menu =$('.menu');
    
  var pageOffsetTop = page.offset().top;
  $(window).resize(function(){ 
    pageOffsetTop = page.offset().top;
  });
    
  $(window).on('scroll', function(){
    if($(window).scrollTop() >= pageOffsetTop) {
      header.addClass('down');
      menu.addClass('black');

    } else { 
      header.removeClass('down');
      menu.removeClass('black');
    }
  });
});

jQuery(document).ready(function ($) {

  $(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 800);
  });
});
