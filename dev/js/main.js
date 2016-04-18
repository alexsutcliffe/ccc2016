$(document).ready(function() {
    $('#mobile-nav-toggle').click(function() {
        $('.site-wrapper').toggleClass('blur');
        $('#clio-mobile-menu').toggleClass('visible hidden');
        $('.close').toggleClass('hide show');
        $('.bars').toggleClass('show hide');
    });

	// Footer year
	var d = new Date();
	var y = d.getFullYear();
	$('span.copy-year').html(y);

});
