$(document).ready(function() {
    $('#mobile-nav-toggle').click(function() {
        $('.site-wrapper').toggleClass('blur');
        $('#clio-mobile-menu').toggleClass('visible hidden');
        $('.close').toggleClass('hide show');
        $('.bars').toggleClass('show hide');
    });

    // If we're asking for bx-slider on a page, load it
    if ($('ul.bxslider').length) {

        $('.bxslider').bxSlider({
            pager: true,
            pagerType: 'short'
        });
        //Open and close the bx-slider overlay
        $('#open-overlay').click(function(e) {
            e.preventDefault();
            $('.site-wrapper').toggleClass('blur');
            $('#overlay').toggleClass('visible hidden');
        });
        $('#close-overlay').click(function(e) {
            e.preventDefault();
            $('.site-wrapper').toggleClass('blur');
            $('#overlay').toggleClass('hidden visible');
        });

    }

    // This will be used globally so no harm declaring it as global
    var isMobile;
    if ($(window).width() > 1010) {
        isMobile = false;
    } else {
        isMobile = true;
    }

    $(window).on("scroll", function() {
        if (isMobile === true) {
            if ($(window).scrollTop() > 80) {
                $("header").css({ 'background-color': 'rgba(16,50,72,1)' });
            } else {
                $("header").css({ 'background-color': 'rgba(0,70,112,0.2)' });
            }
        }
    });

    if ((".speakers-template .speakers").length) {
        $('.speakers-template .speakers').masonry({
            itemSelector: '.speakers-template .speakers .column'
        });
    }

    // Footer year
    var d = new Date();
    var y = d.getFullYear();
    $('span.copy-year').html(y);

    $('.bxslider').bxSlider();

});
