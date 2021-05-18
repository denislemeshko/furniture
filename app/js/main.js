$(function () {

	$('.header__btn').on('click', function() {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	$('.rightside-menu__close').on('click', function() {
		$('.rightside-menu').addClass('rightside-menu--close');
	});

//первый слайдер

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true
	});
// второй слайдер

	$('.contact-slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		dots: true,
		arrows: false
	});
//

	let mixer = mixitup('.gallery__inner');

})