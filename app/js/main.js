$(function () {

	$('.header__btn').on('click', function() {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	$('.rightside-menu__close').on('click', function() {
		$('.rightside-menu').addClass('rightside-menu--close');
	});



	//меню при адоптации в хедере

	$('.header__btn-menu').on('click', function() {
		$('.menu').toggleClass('menu--open');
	});


//первый слайдер

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
	});
// второй слайдер

	$('.contact-slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		dots: true,
		arrows: false,
	});
//третий слайдер
	$('.article-slider__box').slick({
		prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="img"></button>',
		nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="img"></button>',

	});

	let mixer = mixitup('.gallery__inner');

})