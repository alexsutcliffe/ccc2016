$(document).ready(function() {
    $('#mobile-nav-toggle').click(function() {
        $('.site-wrapper').toggleClass('blur');
        $('#clio-mobile-menu').toggleClass('visible hidden');
        $('.close').toggleClass('hide show');
        $('.bars').toggleClass('show hide');
    });

    // This will be used globally so no harm declaring it as global
    var isMobile;       
    if ($(window).width() > 1010) {
        isMobile = false;
    }else{
        isMobile = true;
    }
    
    $(window).on("scroll", function() {
        if (isMobile === true) {
            if($(window).scrollTop() > 80) {
                $("header").css({'background-color' : '#004670'});
            } else {
                $("header").css({'background-color' : 'rgba(0,70,112,0.2)'});
            }
        }
    });
    

	// Footer year
	var d = new Date();
	var y = d.getFullYear();
	$('span.copy-year').html(y);

});
