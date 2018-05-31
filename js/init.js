$(function() {    
	// init tabs
	$(".services-tabs").tabs();  

	// init portfolio tabs
	$(".portfolio-tabs").tabs();  
	
	// init reviews carousel
	$(".reviews-carousel").slick({
		dots: true,
		autoplay: false,
		autoplaySpeed: 5000,
		prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>',        
		nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div>',
	});

	// init slicknav
	$('.header-nav-menu').slicknav({
		appendTo: ".header .container-fluid",
		label: "",
	});

	// wow init
	new WOW().init();

	//Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn().css('display', 'inline-block');  
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0}, 1000, 'swing');
        return false;
    });
});