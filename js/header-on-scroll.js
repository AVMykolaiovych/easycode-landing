const header = $('.header');
const windowHeight = $(window).height();
const headerHeight = header.outerHeight();

function onScroll(e) {  
    let pos = $(window).scrollTop();

    if (pos > headerHeight + 100) {
        header.css({
            'position': 'fixed',
            'top': -(headerHeight + 50),
            'background-color': '#000'
        });
    }
    if (pos > windowHeight) {
        header.css({
            'top': '0',
            'transition': 'top .3s ease-out'
        });
    }

    if (pos < headerHeight + 100) {
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': 'transparent',
            'transition': 'none'
        });
    }
}

$(window).on('scroll', onScroll);

function scrollTo() {
	// Scroll to element
	const scrollBtn = $('[data-scroll]');

	function onScroll(e) {
		e.preventDefault();

		// Close slick nav
		$('.header-nav').slicknav('close');
		let target = $(this).attr('data-scroll');
		let dist = $(target).offset().top;
		$('html, body').animate({ scrollTop: dist }, 1000, 'swing');
	}

	scrollBtn.on('click', onScroll);
}


$(window).on('load', scrollTo);

	
