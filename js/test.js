
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 705) {
            $('.nav').addClass('nav-scrolled');
        }
        else {
            $('.nav').removeClass('nav-scrolled');
        }
    });
});


