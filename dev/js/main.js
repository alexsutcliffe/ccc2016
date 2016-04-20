$(document).ready(function() {
    $('#mobile-nav-toggle').click(function() {
        $('.site-wrapper').toggleClass('blur');
        $('#clio-mobile-menu').toggleClass('visible hidden');
        $('.close').toggleClass('hide show');
        $('.bars').toggleClass('show hide');
    });


    $('.bxslider').bxSlider({
        pager: true,
        pagerType: 'short'
    });


    // var slideQty = slider.getSlideCount();
    // var current = slider.getCurrentSlide();


    $('#open-overlay').click(function(e) {
        e.preventDefault();
        $('.site-wrapper').toggleClass('blur');
        $('#overlay').toggleClass('visible hidden');
        $('#mobile-nav-toggle').css('display','none');
    });
    $('#close-overlay').click(function(e) {
        e.preventDefault();
        $('.site-wrapper').toggleClass('blur');
        $('#overlay').toggleClass('hidden visible');
        $('#mobile-nav-toggle').css('display','block');
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 80) {
            $("header").css({'background-color' : '#004670'});
        } else {
           $("header").css({'background-color' : 'rgba(0,70,112,0.2)'});
        }
    });

	// Footer year
	var d = new Date();
	var y = d.getFullYear();
	$('span.copy-year').html(y);

     $('.bxslider').bxSlider();

});


