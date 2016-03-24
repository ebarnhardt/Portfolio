
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 169) {
            $('.top').addClass('top-scrolled');
        }
        else {
            $('.top').removeClass('top-scrolled');
        }
    });
});


