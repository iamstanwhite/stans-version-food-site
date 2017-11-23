$(document).ready(function () {


    $('.js--section-features').waypoint(function(direction) {
       if (direction == 'down') {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
    }, {
        offset: '160px;'
    });
   
    
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 2000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    
    
    
});

