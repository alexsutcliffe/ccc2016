$(document).ready(function() {
    function toggleNav() {
        if ($('.site-wrapper').hasClass('show-nav')) {
            // Do things on Nav Close
            $('.site-wrapper').removeClass('show-nav');
        } else {
            // Do things on Nav Open
            $('.site-wrapper').addClass('show-nav');
        }
    }

    $('.toggle-nav').click(function(e) {
        e.preventDefault();
        toggleNav();
    });

	// Footer year
	var d = new Date();
	var y = d.getFullYear();
	$('span.copy-year').html(y);

});
