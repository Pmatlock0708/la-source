var $grid = $('.grid').isotope({
	itemSelector: '.element-item',
	layoutMode: 'fitRows',
});
// filter functions
var filterFns = {
	// show if number is greater than 50
	numberGreaterThan50: function() {
		var number = $(this).find('.number').text();
		return parseInt( number, 10 ) > 50;
	},
	// show if name ends with -ium
	ium: function() {
		var name = $(this).find('.name').text();
		return name.match( /ium$/ );
	}
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
	var filterValue = $( this ).attr('data-filter');
	// use filterFn if matches value
	filterValue = filterFns[ filterValue ] || filterValue;
	$grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
	var $buttonGroup = $( buttonGroup );
	$buttonGroup.on( 'click', 'button', function() {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		$( this ).addClass('is-checked');
	});
});
$('.sliderBanner').slick({
	slidesToShow: 1,
	dots: true,
	arrows: false,
	responsive: [
    {
      breakpoint: 1028,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
})
$('.sliderInnnerInsta').slick({
  slidesToShow: 5,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1028,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow:5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    ]
})
$('.slideContainerRightSlider').slick({
	slidesToShow: 4,
	dots: false,
	centerMode: false,
	autoPlay: false,
	infinite: false,
	arrows: true,
	responsive: [
    {
      breakpoint: 1028,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
})
$(window).on('load', function(e) {
	$('.button-group.filters-button-group li:nth-child(1) button').trigger('click')	
})
$('.hamburger').click( function(e) {
	$(this).toggleClass('active');
	$('body').toggleClass('active');
	$('.mobileMenu').toggleClass('active');
})