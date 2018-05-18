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
	});
});