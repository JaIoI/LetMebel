document.addEventListener("DOMContentLoaded", function () {

	const debounced = [];
	const cancelFunc = (timeout) => () => {
		clearTimeout(timeout);
	};
	let debounce = (fn, wait, ...args) => {
		let d = debounced.find(({ funcString }) => funcString === fn.toString());

		if (d) {
			d.cancel();
		} else {
			d = {};
			debounced.push(d);
		}

		d.func = fn;
		d.funcString = fn.toString();
		d.timeout = setTimeout(fn, wait, ...args);
		d.cancel = cancelFunc(d.timeout);
	};

	$('.click_btn').click(function () {
		$(this).toggleClass('active');
	});

	$('.tel').mask('+7(999) 999-99-99');
	$(".mail").inputmask("email");

	VanillaTilt.init(document.querySelectorAll(".your-element"), {
		max: 20,
		speed: 2000
	});

	if ($(window).width() >= 769) {
		$('.dropdown').mouseenter(function () {
			$(this).find('.dropdown-content').addClass('active');
			$(this).find('.dropdown-content2').addClass('active');
		});

		$('.dropdown').mouseleave(function () {
			$('.dropdown-content').removeClass('active');
			$('.dropdown-content2').removeClass('active');
		});
	}
	if ($(window).width() <= 768) {
		$('.dropdown').click(function (event) {
			$(this).toggleClass('active').children('.dropdown-content').slideToggle(300);
			$(this).toggleClass('active').children('.dropdown-content2').toggleClass('active');
		});
	}


	if ($(window).width() >= 769) {
		$('.dropdown-open-n').click(function () {
			$('.dropdown-content-n').removeClass('active');
			$('html').addClass('no__scroll');

			$(this).next('.dropdown-content-n').addClass('active').slideDown(300);
		});

		$('.dropdown-close-n').click(function () {
			$('.header__add-wrap2').removeClass('active');
			$('html').removeClass('no__scroll');
			$('.dropdown-content-n').removeClass('active').slideUp(300);
		});

		$('.dropdown-back-n').click(function () {
			$('.dropdown-content-n').removeClass('active').slideUp(300);
		});
	}

	// if ($(window).width() <= 768) {
	//   $('.dropdown-n').click(function (event) {
	//     $(this).toggleClass('active').children('.dropdown-content-n').slideToggle(300);
	//     $(this).toggleClass('active').children('.dropdown-content-n2').toggleClass('active');
	//   });
	// }

//   $('.dropdown-click3').on('click',function () {
//     $('.dropdown__content3').fadeToggle(300);
//  });
//  let dropdownClick3 = $('.dropdown-click3');
//  let dropdownContent3 = $('.dropdown__content3');

//  $(document).mouseup(function(e) {
//     if (! dropdownClick3.is(e.target) && dropdownClick3.has(e.target).length=== 0 &&
//     ! dropdownContent3.is(e.target) && dropdownContent3.has(e.target).length=== 0
//     ) {
//     dropdownContent3.fadeOut();
//     }
//  });


	$('.toggle-class-activ').click(function () {
		$(this).closest('.toggle-class-parent').find('.toggle-class-activ').removeClass('active');
		$(this).toggleClass('active');
	});

	$('.dropdown-click').on('click', function () {
		$('.dropdown__content').fadeToggle(200);
	});
	let dropdownClick = $('.dropdown-click');
	let dropdownContent = $('.dropdown__content');

	$(document).mouseup(function (e) {
		if (!dropdownClick.is(e.target) && dropdownClick.has(e.target).length === 0 &&
			!dropdownContent.is(e.target) && dropdownContent.has(e.target).length === 0
		) {
			dropdownContent.fadeOut();
		}
	});
	$('.hclose').click(function (e) {
		dropdownContent.fadeOut();
	});

	// БУРГЕР

	$('.header__burger').click(function (evt) {
		evt.preventDefault();
		$('html').toggleClass('mob_menu_active');
		$('.header__burger').toggleClass('cross');
	});

	$(".add_c").click(function (event) {
		$(".add_c").removeClass("active");
	});

	$(".header__category1").click(function (event) {
		$(".header__category1,.header__add-wrap1").toggleClass("active");
		$('html').toggleClass('no__scroll');
	});

	$(".header__category2").click(function (event) {
		$(".header__category2,.header__add-wrap2").addClass("active");
		$('html').addClass('no__scroll');

		$('.dropdown-n').removeClass('active');
		$('.dropdown-content-n').removeClass('active').slideUp(300);

	});


	$(".header__add-close").click(function (event) {
		$(".header__category2, .header__add-wrap2").removeClass("active").scrollTop(0);
		$('html').removeClass('no__scroll');

		$('.dropdown-n').removeClass('active');
		$('.dropdown-content-n').removeClass('active').slideUp(300);

	});
	

	$(document).mouseup( function(evt) {
		let header__add = $('.header__add-items');
		if ( !header__add.is(evt.target)
			&& header__add.has(evt.target).length === 0 ) {
			$(".header__category1,.header__add-wrap1,.header__category2,.header__add-wrap2").removeClass("active");
			$('html').removeClass('no__scroll');
		}
	});

	$(".checkout__forms-a").click(function (event) {
		$(".checkout__forms-a,.checkout__forms-u-info").toggleClass("active");
	});

	// Аккордеон
	$('.accordion').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(700);
		$(this).parent().toggleClass('active');
	});

	// Селект
	$('.filter__item').click(function () {
		$('.filter__item').removeClass('active');
		$(this).addClass('active');
	});
	$('.select_checked').click(function () {
		$(this).closest('.select_parent').find('.select_checked').next().slideUp();
		$(this).next().slideDown();

	});
	$('.filter__item').click(function () {
		var value = $(this).attr('data-value');
		var text = $(this).html();
		$(this).closest('.checkout__forms-select').find('.filter__select').val(value);
		$(this).closest('.select').find('.select_checked').find('.select-text').val(text).trigger("change");
		$(this).closest('.select').find('.select_checked').find('.select-text-del').html(text).trigger("change");
		$(this).parent().slideUp();
	});


	// Слайдеры

	const rem = function (rem) {
		if ($(window).width() > 1920) {
			return 10 * rem;
		} else if ($(window).width() > 768) {
			return 0.005208335 * $(window).width() * rem;
		} else {
			return (100/375) * (0.1 * $(window).width()) * rem;
		}
	}

	let bigBanerSlidesImages = $('.baner__swiper-big .swiper-slide img');
	let smallBaner = $('.baner__swiper-small');
	let smallBanerWrapper = smallBaner.find('.swiper-wrapper');

	bigBanerSlidesImages.each((index, elem) => {
		let imgSrc = $(elem).attr('src');
		let newSlide = $(`<div class="swiper-slide"><img src="${imgSrc}"></div>`);
		smallBanerWrapper.append(newSlide);
	});

	const banerSwiperSmall = new Swiper(".baner__swiper-small", {
		speed: 1200,
		spaceBetween: rem(1),
		loop: true,
		effect: 'fade',
		allowTouchMove: false,
		fadeEffect: {
			crossFade: true
		},
		on: {
			init: function (swiper) {
				swiper.currentSlide = document.querySelector('.baner__swiper-small-bottom-num');
				if(swiper.currentSlide) {
					swiper.currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : `${swiper.realIndex + 1}`;
				}
				swiper.slideNext(0);
			},
			slideChange: function (swiper) {
				if(swiper.currentSlide) {
					swiper.currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : `${swiper.realIndex + 1}`;
				}
			}
		},
	});

	const banerSwiperBig = new Swiper(".baner__swiper-big", {
		navigation: {
			nextEl: ".baner__btn-next",
			prevEl: ".baner__btn-prev",
		},
		pagination: {
			el: ".baner__swiper-bullet",
			type: 'bullets',
			clickable: true
		},
		on: {
			slideNextTransitionStart: function (swiper) {
				banerSwiperSmall.slideNext(500);
			},
			slidePrevTransitionStart: function (swiper) {
				banerSwiperSmall.slidePrev(500);
			},
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current');
				currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : `${swiper.realIndex + 1}`;
			}
		},
		spaceBetween: rem(1),
		speed: 1500,
		loop: true,
		// allowTouchMove: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		breakpoints: {
			769: {
				spaceBetween: rem(1),
				speed: 1500,
				loop: true,
				// allowTouchMove: false,
			}
		},
	});

	smallBaner.on('click', function(evt) {
		evt.preventDefault();
		banerSwiperBig.slideNext(500);
	})

	const slider2 = new Swiper(".category__swiper", {
		navigation: {
			nextEl: ".category__btn-next",
			prevEl: ".category__btn-prev",
		},
		pagination: {
			el: ".category__swiper-bullet",
			type: 'bullets',
			clickable: true
		},
		on: {
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current2');
				currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
			}
		},
		slidesPerView: 1,
		spaceBetween: rem(8),
		speed: 1500,
		breakpoints: {
			769: {
				slidesPerView: 3,
				spaceBetween: rem(5.4),
				speed: 1500,
			}
		},
	});

	const slider3 = new Swiper(".projects__swiper", {
		navigation: {
			nextEl: ".projects__btn-next",
			prevEl: ".projects__btn-prev",
		},
		pagination: {
			el: ".projects__swiper-bullet",
			type: 'bullets',
			clickable: true
		},
		on: {
			afterInit: function (swiper) {
				if (swiper.slides.length < 5) {
					$(swiper.el).closest('.projects').addClass('hide_control');
				}
			},
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current3');
				currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
			}
		},
		slidesPerView: 1,
		spaceBetween: rem(4),
		speed: 1500,
		breakpoints: {
			769: {
				slidesPerView: 4,
				spaceBetween: rem(9.3),
				speed: 1500,
			}
		},
	});

	const slider4 = new Swiper(".certificates__swiper", {
		navigation: {
			nextEl: ".certificates__btn-next",
			prevEl: ".certificates__btn-prev",
		},
		pagination: {
			el: ".certificates__swiper-bullet",
			type: 'bullets',
			clickable: true
		},
		on: {
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current4');
				currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
			}
		},
		slidesPerView: 1,
		spaceBetween: rem(5),
		speed: 1500,
		breakpoints: {
			769: {
				slidesPerView: 4,
				spaceBetween: rem(6),
				speed: 1500,
			}
		},
	});

	const reviews__swiper = new Swiper(".reviews__swiper", {
		modules: [EffectCarousel],
		loop: true,
		grabCursor: true,
		loopedSlides: 4,
		slidesPerView: 2.5,
		speed: 1500,
		centeredSlides: true,
		effect: 'carousel',
		navigation: {
			nextEl: ".reviews__btn-next",
			prevEl: ".reviews__btn-prev",
		},
		pagination: {
			el: ".reviews__swiper-bullet",
			type: 'bullets',
			clickable: true
		},
		breakpoints: {
			769: {
				slidesPerView: 5.472972972972973,
				// allowTouchMove: false,
			}
		},
		on: {
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current_reviews');
				currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : `${swiper.realIndex + 1}`;
			},
		},
	});

	const slider5 = new Swiper(".steps__swiper", {
		navigation: {
			nextEl: ".steps__btn-next",
			prevEl: ".steps__btn-prev",
		},
		pagination: {
			el: ".steps__swiper-pagination .total",
			type: "custom",
			renderCustom: function (swiper, current, total) {
				let totalRes5 = total >= 10 ? total : `0${total}`;
				return totalRes5;
			},
		},
		slidesPerView: 1,
		spaceBetween: rem(1),
		speed: 1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});
	let curnum5 = document.querySelector(".steps__swiper-pagination .current");
	slider5.on("slideChange", function () {
		let ind5 = slider5.realIndex + 1,
			indRes5 = ind5 >= 10 ? ind5 : `0${ind5}`;
		curnum5.innerHTML = indRes5;
	});

	const slider6 = new Swiper(".catalog__swiper", {
		navigation: {
			nextEl: ".catalog__btn-next",
			prevEl: ".catalog__btn-prev",
		},
		on: {
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current5');
				currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
			}
		},
		slidesPerView: 1,
		spaceBetween: rem(1),
		speed: 1500,
		breakpoints: {
			769: {
				slidesPerView: 4,
				spaceBetween: rem(5.2),
				speed: 1500,
			}
		},
	});

	const slider7 = new Swiper(".hang__swiper", {
		navigation: {
			nextEl: ".hang__btn-next",
			prevEl: ".hang__btn-prev",
		},
		on: {
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current6');
				currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
			}
		},
		slidesPerView: 1,
		spaceBetween: rem(4),
		speed: 1500,
		breakpoints: {
			769: {
				slidesPerView: 4,
				spaceBetween: rem(6),
				speed: 1500,
			}
		},
	});


	const slider8 = new Swiper(".card__big-swiper", {
		navigation: {
			nextEl: ".card__btn-next",
			prevEl: ".card__btn-prev",
		},
		slidesPerView: 1,
		spaceBetween: rem(1),
		speed: 1500,

		thumbs: {
			swiper: {
				el: '.card__small-swiper',
				slidesPerView: 3,
				speed: 1200,
				spaceBetween: rem(1.6),
				watchSlidesProgress: true,
				allowTouchMove: false,
				breakpoints: {
					769: {
						slidesPerView: 3,
						speed: 1200,
						spaceBetween: rem(1.9),
						watchSlidesProgress: true,
						allowTouchMove: false,
					}
				},
			},
		},
	});

	const slider9 = new Swiper(".articles__swiper", {
		navigation: {
			nextEl: ".articles__btn-next",
			prevEl: ".articles__btn-prev",
		},
		on: {
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current7');
				currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
			}
		},
		slidesPerView: 1,
		spaceBetween: rem(1),
		speed: 1500,
		breakpoints: {
			769: {
				slidesPerView: 3,
				spaceBetween: rem(7.4),
				speed: 1500,
			}
		},
	});

	const slider10 = new Swiper(".news__swiper", {
		navigation: {
			nextEl: ".news__btn-next",
			prevEl: ".news__btn-prev",
		},
		on: {
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current8');
				currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
			}
		},
		slidesPerView: 1,
		spaceBetween: rem(1),
		speed: 1500,
		breakpoints: {
			769: {
				slidesPerView: 3,
				spaceBetween: rem(7.4),
				speed: 1500,
			}
		},
	});

	const articleSmallSwiper = new Swiper(".article__small-swiper", {
		slidesPerView: 3,
		speed: 1200,
		spaceBetween: rem(1),
		mousewheel: false,
		breakpoints: {
			769: {
				slidesPerView: 6,
				spaceBetween: rem(2.7),
			}
		},
	});

	const slider12 = new Swiper(".article__big-swiper", {
		navigation: {
			nextEl: ".article__btn-next",
			prevEl: ".article__btn-prev",
		},
		slidesPerView: 1,
		spaceBetween: rem(1),
		speed: 1500,

		on: {
			slideChange: function (swiper) {
				articleSmallSwiper.slideToLoop(swiper.activeIndex);
			},
		}
	});

	setTimeout((() => {
		if ($('.article__small-slide').length > 6) {
			$('.article__more').css('display', 'block');
		}
		}
	), 400)

	$(document).on('click', '.article__more.display_swiper', function () {
		let $this = $(this);
		let $parent = $this.closest('.article__img');
		let $swiper = $parent.find('.article__small-swiper');
		articleSmallSwiper.slideHeight = 11.5;
		let slidesGap = 2.6;
		let slidesPerView = 3;
		if ($(window).width() >= 769) {
			slidesPerView = 6;
		}
		let slidesRows = Math.ceil(articleSmallSwiper.slides.length / slidesPerView);
		let swiperHeight = (articleSmallSwiper.slideHeight * slidesRows) + ((slidesRows - 1) * slidesGap);

		$this.addClass('display_grid').removeClass('display_swiper');
		$parent.addClass('show_all');

		$swiper.animate({
			height: swiperHeight + 'rem'
		}, 0);
	});

	$(document).on('click', '.article__more.display_grid', function () {
		let $this = $(this);
		let $parent = $this.closest('.article__img');
		let $swiper = $parent.find('.article__small-swiper');

		$this.addClass('display_swiper').removeClass('display_grid');

		$swiper.animate({
			height: articleSmallSwiper.slideHeight + 'rem'
		}, 0);

		setTimeout(()=>{
			$parent.removeClass('show_all');
		}, 500)

	});


	$('.article__small-slide').click(function () {
		slider12.slideToLoop($(this).index());
	});

	const slider13 = new Swiper(".work__swiper", {
		navigation: {
			nextEl: ".work__btn-next",
			prevEl: ".work__btn-prev",
		},
		on: {
			afterInit: function (swiper) {
				if (swiper.slides.length < 4) {
					$(swiper.el).closest('.work').addClass('hide_control');
				}
			},
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current9');
				currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
			}
		},
		slidesPerView: 1,
		spaceBetween: rem(1),
		speed: 1500,
		breakpoints: {
			769: {
				slidesPerView: 3,
				spaceBetween: rem(5.5),
				speed: 1500,
			}
		},
	});

	const slider14 = new Swiper(".products__swiper", {
		navigation: {
			nextEl: ".products__btn-next",
			prevEl: ".products__btn-prev",
		},
		pagination: {
			el: ".products__swiper-bullet",
			type: 'bullets',
			clickable: true
		},
		slidesPerView: 1,
		spaceBetween: rem(1),
		speed: 1500,
	});

	const slider15 = new Swiper(".hang__swiper-i", {
		navigation: {
			nextEl: $('.hang__swiper-i').siblings('.hang__btn-next')[0],
			prevEl: $('.hang__swiper-i').siblings('.hang__btn-prev')[0],
		},
		on: {
			slideChange: function (swiper) {
				let currentSlide = document.querySelector('.current10');
				currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
			}
		},
		slidesPerView: 1,
		spaceBetween: rem(4),
		speed: 1500,
	});

	function resize() {
		if ($(window).width() >= 769) {
			slider15.destroy();
		}
	}

	if ($(".hang__swiper-i").length > 0) {
		resize();
	} else {
	}

	const slider16 = new Swiper(".header__add-content-swiper", {
		pagination: {
			el: ".header__add-content-swiper-bullet",
			type: 'bullets',
			clickable: true
		},
		slidesPerView: 1,
		spaceBetween: rem(1),
		speed: 1500,
		observer: true,
		observeParents: true,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});

	// Модалка
	class Modal {
		constructor(name) {
			this.name = name;
			this.modal = document.querySelector(`[data-modal="${name}"]`)
			this.triggers = document.querySelectorAll(`[data-class="${name}"]`)
			this.body = document.querySelector(`body`)
			this.openHendler()
		}

		open() {
			this.modal.classList.remove('success', 'error')
			this.modal.classList.add('active')
			this.body.classList.add('hidden')
			this.modal.addEventListener('click', this.closeHendler)
		}

		close() {
			this.modal.classList.remove('active')
			this.body.classList.remove('hidden')
			this.modal.removeEventListener('click', this.closeHendler)
		}

		success() {
			this.modal.classList.remove('error')
			this.modal.classList.add('success')
		}

		error() {
			this.modal.classList.remove('success')
			this.modal.classList.add('error')
		}

		update() {
			this.modal = document.querySelector(`[data-modal="${this.name}"]`)
			this.triggers = document.querySelectorAll(`[data-class="${this.name}"]`)
			this.openHendler()
		}

		openHendler = (e) => {
			this.triggers.forEach(item => {
				item.addEventListener('click', (e) => {
					e.preventDefault()
					this.open()
				})
			})
		}
		closeHendler = (e) => {
			if (e.target.classList.contains('close-x')) {
				this.close()
			}
		}
	}

	let filter = document.querySelector('[data-modal="filter"]') ? new Modal('filter') : null;
	let video = document.querySelector('[data-modal="video"]') ? new Modal('video') : null;
	let down = document.querySelector('[data-modal="down"]') ? new Modal('down') : null;
	let ok = document.querySelector('[data-modal="ok"]') ? new Modal('ok') : null;
	let box = document.querySelector('[data-modal="box"]') ? new Modal('box') : null;
	let question = document.querySelector('[data-modal="question"]') ? new Modal('question') : null;
	let request = document.querySelector('[data-modal="request"]') ? new Modal('request') : null;
	let order = document.querySelector('[data-modal="order"]') ? new Modal('order') : null;
	let cookie = document.querySelector('[data-modal="cookie"]') ? new Modal('cookie') : null;

	$('[data-modal=cookie] .close-x').click(function (e) {
		$('body').removeClass('hidden');
		$('[data-modal=cookie]').removeClass('active');
	});

	$('[data-modal=cookie].close-x').click(function (e) {
		if (e.target.classList.contains('close-x')) {
			$('body').removeClass('hidden');
			$('[data-modal=cookie]').removeClass('active');
		}
	});

	if ($('[data-modal=cookie]').length && $('[data-modal=cookie]').attr('data-complete') === undefined) {
		setTimeout(function () {
			$('[data-modal=cookie]').addClass('active');
			$('body').addClass('hidden');
		}, 3000);
	}


	const rangeSlider = document.getElementsByClassName('range-slider');
	const clearBtn = document.getElementsByClassName('modal__content-header-clear');

	for (var i = 0; i < rangeSlider.length; i++) {

		const slid = noUiSlider.create(rangeSlider[i], {
			start: ['0', '100000'],
			connect: true,
			step: 100,
			tooltips: true,
			range: {
				'min': [0],
				'max': [100000],
			},
			format: wNumb({
				decimals: 0,
				thousand: ' ',
			})
		});

		slid.on('change', function (values) {

			$('.modal__content-form-item').find('[name="min"]').val(values[0])
				.siblings('[name="max"]').val(values[1]);
			let colors = [];
			$("input:checkbox[name=color]:checked").each(function () {
				colors.push($(this).val());
			});
			if ($('.uf_filter').hasClass('active')) {
				var uf_filter = $('.uf_filter.active').text()
			}
			var data = $('.product-filter').serialize() + '&uf_filter=' + uf_filter + '&sort=' + $('input[name=sort]').val() + '&sort-count=' + $('input[name=sort-count]').val()+'&colors='+colors;

			$.ajax({
				type: 'POST',
				url: '/ajax/filters/filter.php',
				data: data,
				success: function (d) {
					$('.filter-ajax').html(d)
					$.ajax({
						type: 'POST',
						url: '/ajax/filters/count.php',
						data: data,
						success: function (data) {
							$('#filter-count').html(data)
							$('.catalog__header h1 span').html(data)
							$('.catalog__quantity').html(data)
						},
						error: function (data) {
							console.log(data)
							console.log(false)
						}
					})

				},
				error: function (data) {
					console.log(data)
					console.log(false)
				}
			})

		})
	}
	$('.modal__content-header-clear').on('click', function () {
		rangeSlider[0].noUiSlider.reset()
		$('.product-filter')[0].reset();
		let colors = [];
		$("input:checkbox[name=color]:checked").each(function () {
			colors.push($(this).val());
		});
		if ($('.uf_filter').hasClass('active')) {
			var uf_filter = $('.uf_filter.active').text()
		}
		var data = $('.product-filter').serialize() + '&uf_filter=' + uf_filter+'&sort='+$('input[name=sort]').val()+'&sort-count='+$('input[name=sort-count]').val()+'&colors='+colors;

		$.ajax({
			type: 'POST',
			url: '/ajax/filters/filter.php',
			data: data,
			success: function (d) {
				$('.filter-ajax').html(d)
				$.ajax({
					type: 'POST',
					url: '/ajax/filters/count.php',
					data: data,
					success: function (data) {

						$('#filter-count').html(data)
						$('.catalog__header h1 span').html(data)
						$('.catalog__quantity').html(data)
					},
					error: function (data) {
						console.log(data)
						console.log(false)
					}
				})

			},
			error: function (data) {
				console.log(data)
				console.log(false)
			}
		})
	})
	// Табы
	$('.tabs__btn').click(function () {
		$('.tabs__btn').removeClass('active');
		$(this).toggleClass('active');
		var data = $(this).data('question');
		$('.tabs__content').removeClass('active');
		$('.tabs__content[data-question=' + data + ']').toggleClass('active');
		$('.products__btn-bg svg').removeClass('active');
		$('.products__btn-bg svg[data-question=' + data + ']').toggleClass('active');
	});

	// ЯНДЕКС КАРТА
	if ($('#contloc').length) {
		ymaps.ready(init);

		function init() {
			let breakpoint = window.matchMedia("(max-width: 48em)");
			let descOptions = {
				iconLayout: "default#image",
				iconImageHref: "/local/templates/letmebel/img/icon/map_logo.svg",
				iconImageSize: [20, 20],
				iconImageOffset: [-10, -20],
			};
			if (breakpoint) {
				descOptions.iconImageSize = [70, 96];
				descOptions.iconImageOffset = [-35, -96];
			}

			var myMap = new ymaps.Map("contloc", {
					center: [55.876152, 37.588808],
					zoom: 10,
					controls: ["zoomControl"],
					behaviors: ["drag"],
				}),
				myPlacemark = new ymaps.Placemark(
					[55.876152, 37.588808],
					{
						hintContent: "Россия, Москва, Алтуфьевское шоссе, 48 к. 2, офис 603",
						//  balloonContent: "SmartFood",
					},
					descOptions
				);

			myMap.behaviors.disable('scrollZoom');
			myMap.geoObjects.add(myPlacemark);
		}
	}


	// ЯКОРЬ
	// const anchors = document.querySelectorAll('a[href*="#"]')
	// for (let anchor of anchors) {
	//     anchor.addEventListener("click", function (event) {
	//         event.preventDefault();
	//         const blockID = anchor.getAttribute('href')
	//         document.querySelector('' + blockID).scrollIntoView({
	//             behavior: "smooth",
	//             block: "start"
	//         })
	//     })
	// }

	$('a[href*="#"]').on("click", function (evt) {
		evt.preventDefault();
		let href = $(this).attr("href");
	
		$("html, body").animate({
			scrollTop: $(href).offset().top - 100
		}, {
			duration: 1500,   // по умолчанию «400»
			easing: "swing" // по умолчанию «swing»
		});
	
		return false;
	});

	// Загрузка файлов
	/* вывод файлов */
	function Output(msg) {
		const m = document.querySelector('.modal__content-file-items');
		m.innerHTML = m.innerHTML + msg;
	}

	/* проверка поддержки API */
	if (window.File && window.FileList && window.FileReader && document.querySelector("#upload-file")) {
		Init();
	}

	/* инициализация */
	function Init() {
		const fileSelect = document.querySelector("#upload-file"),
			fileDrag = document.querySelector(".modal__content-download");
		let deleteBtn = document.querySelectorAll('.modal__content-file-item-close'),
			fileSelectDt = new DataTransfer();

		/* выбор файла */
		fileSelect.addEventListener("change", fileSelectHandler, false);

		/* проверка поддержки XHR2 */
		const xhr = new XMLHttpRequest();
		if (xhr.upload) {
			fileDrag.addEventListener("dragover", fileDragHover, false);
			fileDrag.addEventListener("dragleave", fileDragHover, false);
			fileDrag.addEventListener("drop", fileSelectHandler, false);
		} else {
			document.querySelector('.modal__content-download-rec').style.display = 'none';
			document.querySelector('.modal__content-download-info').style.display = 'none';
		}

		// Файл над нужной областью
		function fileDragHover(e) {
			e.stopPropagation();
			e.preventDefault();
			fileDrag.className = e.type == "dragover" ? "modal__content-download hover" : "modal__content-download";
		}

		// выбор файла
		function fileSelectHandler(e) {
			fileDragHover(e);

			let files = e.target.files || e.dataTransfer.files;

			for (let i of files) {
				parseFile(i);
				fileSelectDt.items.add(i);
			}

			fileSelect.files = fileSelectDt.files;
			createDelBtn();
		}

		function parseFile(file) {
			let imgURL = function () {
				if (file.type.includes('image')) {
					return '/local/templates/letmebel/img/icon/modal-d2.svg';
				}
				return '/local/templates/letmebel/img/icon/modal-d1.svg';
			}

			Output(
				'<div class="modal__content-file-item">\n' +
				'   <div class="modal__content-file-item-img">\n' +
				'      <img src="' + imgURL() + '" alt="">\n' +
				'   </div>\n' +
				'   <div class="modal__content-file-item-name">' + file.name + '</div>\n' +
				'   <div class="modal__content-file-item-close">\n' +
				'      <img src="/local/templates/letmebel/img/icon/close-grey.svg" alt="">\n' +
				'   </div>\n' +
				'</div>'
			);
		}

		const deleteFile = (element) => {
			let dt = new DataTransfer();
			const index = Array.prototype.indexOf.call(element.parentNode.children, element);

			for (let i = 0; i <= fileSelect.files.length - 1; i++) {
				if (i !== index) {
					dt.items.add(fileSelect.files[i])
				}
			}

			fileSelectDt = dt;
			fileSelect.files = fileSelectDt.files;
		}

		function createDelBtn() {
			deleteBtn = document.querySelectorAll('.modal__content-file-item-close');

			for (let i of deleteBtn) {
				i.addEventListener('click', function () {
					let el = this.parentNode;
					deleteFile(el);
					el.remove();
					console.log(fileSelect.files);
				});
			}
		}
	}

	$('.catalog__btns-link').click(function () {
		$(this).addClass('active');
	});

	$('.modal__content-form-item-colors-more').click(function () {
		$(this).addClass('active');
	});


// 01-05-2023

const state = {
	rotate: 0,
};

function transformImage({rotate}, target) {
	state.rotate += rotate || 0;
	target.style.transform = `rotate(${state.rotate}deg)`;
}


const swiper_block_thumbs = new Swiper('.swiper_block_thumbs', {
	slidesPerView: 1,
	spaceBetween: '5%',
	watchSlidesProgress: true,
	speed: 1500,
	on: {
		init: function () {
			this.polygon = document.querySelector('.polygon');
			// this.activeSlideWidth = this.slides[this.realIndex].querySelector('span').offsetWidth;
			// this.el.style.maxWidth = this.activeSlideWidth / 10 + 'rem';
		},
		slideChange: function () {
			// this.activeSlideWidth = this.slides[this.realIndex].querySelector('span').offsetWidth;
			// this.el.style.maxWidth = this.activeSlideWidth / 10 + 'rem';
		},
		slideNextTransitionStart: function () {
			transformImage({ rotate: 72 }, this.polygon)
		},
		slidePrevTransitionStart: function () {
			transformImage({ rotate: -72 }, this.polygon)
		}
	},
});



function centeredBlock(speed) {
	$('html, body').animate({
		scrollTop: $('.block').offset().top - 80
	}, speed);
}

const swiper_block = new Swiper('.swiper_block', {
	// loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	thumbs: {
		swiper: swiper_block_thumbs,
	},
	effect: 'fade',
	mousewheel: {
		eventsTarget: '.block',
		releaseOnEdges: true,
		thresholdTime: 500,
	},
	
	on: {
		init: function () {
			this.DUPLICATE_SLIDES = 0;
			this.main_wrapper = document.querySelector('.block_wrap');
			this.main_wrapper.classList.add(`position_${this.realIndex + 1}`);
			this.paginationEl = document.querySelector('.swiper_block .pagination');
			this.slidesNumber = this.slides.length - this.DUPLICATE_SLIDES;

			this.bullet = document.createElement('span');
			this.bullet.classList.add('active');
			this.paginationEl.append(this.bullet);
			this.BULLET_WIDTH = this.bullet.offsetWidth;
			this.bullet.style.left = this.BULLET_WIDTH * i / 10 + `rem`;
			this.paginationEl.style.width = (this.BULLET_WIDTH * this.slidesNumber) / 10 + `rem`;
			this.paginationEl.style.height = this.BULLET_WIDTH / 10 + `rem`;
			this.paginationEl.append(this.bullet);
			this.bulletsPos = [];
			for(i = 0; i < this.slidesNumber; i++) {
				if (i == 0) {
					this.bulletsPos.push(this.BULLET_WIDTH * i / 10 + `rem`);
					continue;
				}
				const bullet = document.createElement('span');
				bullet.style.left = this.BULLET_WIDTH * i / 10 + `rem`;
				this.bulletsPos.push(this.BULLET_WIDTH * i / 10 + `rem`);
				this.paginationEl.append(bullet);
			}

		},
		slideChange: function () {
			let currentSlide = document.querySelector('.swiper_block .current');
			currentSlide.innerHTML = this.realIndex + 1 < 10 ? `0${this.realIndex + 1}` : `${this.realIndex + 1}`;
			if (this.main_wrapper) {
				this.main_wrapper.className = 'block_wrap';
				this.main_wrapper.classList.add(`position_${this.realIndex + 1}`);
			}
		},
		slideChangeTransitionStart: function (swiper) {
			if ((swiper.activeIndex == 0) || (swiper.activeIndex == swiper.slides.length - 1)) {
				centeredBlock(0);
			} else {
				centeredBlock(500);
			}

		}
	},
	slidesPerView: 1,
});


// function addOnWheel(elem, handler) {
//     if (elem.addEventListener) {
//         if ('onwheel' in document) {
//         // IE9+, FF17+
//         elem.addEventListener('wheel', handler);
//         } else if ('onmousewheel' in document) {
//             // устаревший вариант события
//             elem.addEventListener('mousewheel', handler);
//         } else {
//             // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
//             elem.addEventListener('MozMousePixelScroll', handler);
//         }
//     }
// }

// addOnWheel($('.block')[0], function(e) {

//     let delta = e.deltaY || e.detail || e.wheelDelta;

//     if (delta > 0) {
//         if (swiper_block.realIndex + 1 != swiper_block.slides.length) { 
//             e.preventDefault();
//         }
//         swiper_block.slideNext();
//     } else {
//         if (swiper_block.realIndex > 0) { 
//             e.preventDefault();
//         }
//         swiper_block.slidePrev();
//     }
//     // отменим прокрутку
// });



	$('.catalog__item-content-basket').on('click', function(evt) {
		let cart = $('.header__btns-btn--basket');

		let imgtodrag = $(this).parent().parent().find('.catalog__item-img img').eq(0);

		if (imgtodrag) {
			let imgclone = imgtodrag.clone()
				.offset({
				top: imgtodrag.offset().top + 100,
				left: imgtodrag.offset().left + 100
			})
				.css({
				'opacity': '0.7',
					'position': 'absolute',
					'height': '15rem',
					'width': '15rem',
					'z-index': '100' 
			})
				.appendTo($('body'))
				.animate({
				'top': cart.offset().top + 20,
					'left': cart.offset().left + 20,
					'width': 75,
					'height': 75
			}, 800, 'easeInOutExpo');


			imgclone.animate({
				'width': 0,
					'height': 0
			}, function () {
				$(this).detach()
			});
		}
	});

	let article_images = $('.article__text img');

	if (article_images) {
		article_images.each((index, elem) => {
			let $img = $(elem);
			let img_width = $img.attr('width');
			let img_height = $img.attr('height');
			if (img_width) {
				$img.width(img_width);
			}
			if (img_height) {
				$img.height(img_height);
			}
		});
	}


	$('.modal-search__search-box input').on('input', function(evt) {
		let val = $(this).val().toUpperCase();

		function findText() {
			
			$('.modal-search__item span:last-child').filter(function() {
				$(this).text().toUpperCase().indexOf(val);
				newText = $(this).text();
				$(this).html(newText.replace(val, `<font class="textHighlight">${val}</font>`));
			});
		}

		setTimeout(findText, 500);
	});

	// открыть галерею по нажатию на большую картинку
	$('.article__big-slide').on('click', function(evt){
		evt.preventDefault();
		$('.article__small-slide.swiper-slide-active img').trigger('click');
	});

function wordAnimation() {
	var words = document.getElementsByClassName('word');
	var wordArray = [];
	var currentWord = 0;
	
	words[currentWord].style.opacity = 1;
	for (var i = 0; i < words.length; i++) {
		splitLetters(words[i]);
	}
	
	function changeWord() {
		var cw = wordArray[currentWord];
		var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
		for (var i = 0; i < cw.length; i++) {
			animateLetterOut(cw, i);
		}

		for (var i = 0; i < nw.length; i++) {
			nw[i].className = 'letter behind';
			nw[0].parentElement.style.opacity = 1;
			animateLetterIn(nw, i);
		}

		currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
	}

	function animateLetterOut(cw, i) {
		setTimeout(function() {
			cw[i].className = 'letter out';
		}, i*80);
	}

	function animateLetterIn(nw, i) {
		setTimeout(function() {
			nw[i].className = 'letter in';
		}, 340+(i*80));
	}

	function splitLetters(word) {
		var content = word.innerHTML;
		word.innerHTML = '';
		var letters = [];
		for (var i = 0; i < content.length; i++) {
			var letter = document.createElement('span');
			letter.className = 'letter';
			letter.innerHTML = content.charAt(i);
			word.appendChild(letter);
			letters.push(letter);
		}

		wordArray.push(letters);
	}

	changeWord();
	setInterval(changeWord, 4000);
}
wordAnimation();

$(document).on('input', 'textarea', function () {
	debounce(() => {
		this.style.height = 'auto';
		$(this).outerHeight((this.scrollHeight) + 'px');
	}, 100);
});


var dt = new DataTransfer();

$('.file input[type=file]').on('change', function() {
	let $files_list = $(this).closest('.files_wrap').find('.files_list');
	// $files_list.empty();

	const pdf_icon = `<svg width="46" height="55" viewBox="0 0 46 55" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_164_28767)">
	<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8V47C0 51.4183 3.58172 55 8 55H38C42.4183 55 46 51.4183 46 47V13.75L31.8025 0H8Z" fill="#7AC361"/>
	<path d="M32.2235 37.0407C30.3072 36.9028 28.4622 36.2136 26.9718 34.973C24.0621 35.5932 21.2939 36.489 18.5261 37.5921C16.3262 41.3826 14.2679 43.3124 12.4936 43.3124C12.1386 43.3124 11.713 43.2437 11.4291 43.0367C10.6482 42.6923 10.2227 41.934 10.2227 41.176C10.2227 40.5555 10.3646 38.8327 17.1067 36.0067C18.6684 33.2498 19.8745 30.4242 20.8683 27.4607C20.0165 25.8066 18.1715 21.74 19.4486 19.6727C19.8745 18.9144 20.7263 18.5009 21.6492 18.57C22.3587 18.57 23.0682 18.9144 23.4942 19.4658C24.417 20.7064 24.346 23.3254 23.1392 27.185C24.275 29.2497 25.7627 31.1138 27.5394 32.6988C29.0301 32.4227 30.5202 32.2162 32.0105 32.2162C35.3462 32.2849 35.8432 33.8012 35.7722 34.6973C35.7722 37.0407 33.4299 37.0407 32.2235 37.0407ZM12.3519 41.3135L12.5649 41.2448C13.5584 40.9003 14.3389 40.2111 14.9068 39.3149C13.842 39.7285 12.9905 40.4177 12.3519 41.3138V41.3135ZM21.7908 20.6376H21.5778C21.5069 20.6376 21.3649 20.6376 21.2939 20.7064C21.0099 21.8779 21.2229 23.1185 21.7198 24.2212C22.1457 23.0497 22.1457 21.8091 21.7908 20.6376ZM22.2877 30.6311L22.2167 30.7686L22.1457 30.6999C21.5069 32.2853 20.797 33.8703 20.0165 35.3866L20.1584 35.3178V35.4553C21.7367 34.9011 23.3484 34.4408 24.9845 34.0769L24.9135 34.0081H25.1265C24.0617 32.9741 23.0682 31.8026 22.2877 30.6311ZM31.9396 34.2838C31.3007 34.2838 30.7331 34.2838 30.0942 34.4213C30.8041 34.7661 31.514 34.9039 32.2235 34.973C32.7204 35.0418 33.2173 34.973 33.6429 34.8352C33.6429 34.6283 33.3589 34.2838 31.9396 34.2838Z" fill="white"/>
	<path d="M35.8025 13.75L46 13.75L31.8025 -1.20206e-06L31.8025 9.75C31.8025 11.9591 33.5933 13.75 35.8025 13.75Z" fill="#A7EA90"/>
	</g>
	<defs>
	<clipPath id="clip0_164_28767">
	<rect width="46" height="55" fill="white"/>
	</clipPath>
	</defs>
	</svg>
	`;

	const image_icon = `<svg width="46" height="55" viewBox="0 0 46 55" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_2101_58785)">
	<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8V47C0 51.4183 3.58172 55 8 55H38C42.4183 55 46 51.4183 46 47V13.75L31.8025 0H8Z" fill="#7AC361"/>
	<path d="M35.8025 13.75L46 13.75L31.8025 -1.20206e-06L31.8025 9.75C31.8025 11.9591 33.5933 13.75 35.8025 13.75Z" fill="#A7EA90"/>
	</g>
	<path d="M11.1192 35.9395L15.5116 29.5271C15.5678 29.4449 15.6415 29.376 15.7276 29.3253C15.8136 29.2745 15.9098 29.2432 16.0093 29.2334C16.1089 29.2237 16.2094 29.2358 16.3037 29.2689C16.3981 29.3021 16.4839 29.3554 16.5552 29.4251L19.458 32.25L25.8271 22.3343C25.8901 22.2359 25.9777 22.1553 26.0812 22.1004C26.1848 22.0454 26.3009 22.0179 26.4183 22.0205C26.5357 22.0231 26.6505 22.0558 26.7515 22.1153C26.8524 22.1749 26.9363 22.2593 26.9948 22.3604L34.9082 35.9823C34.9683 36.0854 34.9999 36.2024 35 36.3216C35.0001 36.4407 34.9685 36.5578 34.9085 36.661C34.8485 36.7642 34.7622 36.8499 34.6583 36.9094C34.5543 36.9689 34.4364 37.0001 34.3165 37H11.6841C11.5598 37.0003 11.4377 36.9668 11.3312 36.9032C11.2246 36.8396 11.1375 36.7483 11.0793 36.6391C11.0211 36.53 10.9941 36.4071 11.0011 36.2838C11.0081 36.1605 11.0488 36.0414 11.1189 35.9395H11.1192Z" fill="white"/>
	<path d="M12.4346 21.4201C12.4346 22.3272 12.7974 23.1971 13.4431 23.8385C14.0889 24.4799 14.9647 24.8403 15.8779 24.8403C16.7912 24.8403 17.667 24.4799 18.3127 23.8385C18.9585 23.1971 19.3212 22.3272 19.3212 21.4201C19.3212 20.5131 18.9585 19.6431 18.3127 19.0017C17.667 18.3603 16.7912 18 15.8779 18C14.9647 18 14.0889 18.3603 13.4431 19.0017C12.7974 19.6431 12.4346 20.5131 12.4346 21.4201Z" fill="white"/>
	<defs>
	<clipPath id="clip0_2101_58785">
	<rect width="46" height="55" fill="white"/>
	</clipPath>
	</defs>
	</svg>
	`;

	const default_icon = `<svg width="46" height="55" viewBox="0 0 46 55" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_164_28767)">
	<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8V47C0 51.4183 3.58172 55 8 55H38C42.4183 55 46 51.4183 46 47V13.75L31.8025 0H8Z" fill="#7AC361"/>
	<path d="M35.8025 13.75L46 13.75L31.8025 -1.20206e-06L31.8025 9.75C31.8025 11.9591 33.5933 13.75 35.8025 13.75Z" fill="#A7EA90"/>
	</g>
	<defs>
	<clipPath id="clip0_164_28767">
	<rect width="46" height="55" fill="white"/>
	</clipPath>
	</defs>
	</svg>
	`;

	const type_png = 'image/png';
	const type_jpeg = 'image/jpeg';
	const type_pdf = 'application/pdf';

	for(var i = 0; i < this.files.length; i++){
		let new_file_input = '<div class="files_item">' +
		'<div class="files_item_icon">' + 
			(this.files.item(i).type == type_pdf ? pdf_icon : (this.files.item(i).type == type_png || this.files.item(i).type == type_jpeg) ? image_icon : default_icon) + 
		
		'</div>' +

		'<div class="files_item_name">' + this.files.item(i).name + '</div>' +
		'<button type="button" class="files_item_remove"></button>' +
		'</div>';
		$files_list.append(new_file_input);
		dt.items.add(this.files.item(i));
	};
	this.files = dt.files;
});

function removeFilesItem(target){
	let name = $(target).prev().text();
	let input = $(target).closest('.files_wrap').find('input[type=file]');	
	$(target).closest('.files_item').remove();
	for(let i = 0; i < dt.items.length; i++){
			if(name === dt.items[i].getAsFile().name){
			dt.items.remove(i);
		}
	}
	input[0].files = dt.files;
}

$(document).on('click', '.files_item_remove', function (evt) {
	evt.preventDefault();
	removeFilesItem($(this));
});

})