document.addEventListener("DOMContentLoaded", function () {

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
      $('.dropdown-n').click(function () {
        $('.dropdown-n').removeClass('active');
        $('.dropdown-content-n').removeClass('active');
  
      });
          
      $('.dropdown-n').click(function () {
        $(this).addClass('active');
        $(this).next('.dropdown-content-n').addClass('active');
      });
    }
  
    if ($(window).width() <= 768) {
      $('.dropdown-n').click(function (event) {
        $(this).toggleClass('active').next('.dropdown-content-n').slideToggle(300);
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

  $('.dropdown-click').on('click',function () {
    $('.dropdown__content').fadeToggle(200);
 });
 let dropdownClick = $('.dropdown-click');
 let dropdownContent = $('.dropdown__content');
 
 $(document).mouseup(function(e) {
    if (! dropdownClick.is(e.target) && dropdownClick.has(e.target).length=== 0 &&
    ! dropdownContent.is(e.target) && dropdownContent.has(e.target).length=== 0
    ) {
    dropdownContent.fadeOut();
    }
 });
 $('.hclose').click(function(e) {
    dropdownContent.fadeOut();
});

       // БУРГЕР 

  $(".header__burger").click(function (event) {
    $(".header__burger,.header__bm").toggleClass("active");
    $('html').toggleClass('no__scroll');
  });

  $(".add_c").click(function (event) {
    $(".add_c").removeClass("active");
  });

  $(".header__category1").click(function (event) {
    $(".header__category1,.header__add-wrap1").toggleClass("active");
    $('html').toggleClass('no__scroll');
  });

  $(".header__category2").click(function (event) {
    $(".header__category2,.header__add-wrap2").toggleClass("active");
    $('html').toggleClass('no__scroll');
  });

  $(".checkout__forms-a").click(function (event) {
    $(".checkout__forms-a,.checkout__forms-u-info").toggleClass("active");
  });

  // Аккордеон
  $('.accordion').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
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
    $(this).closest('.select').find('.select_checked').find('.select-text').text(text);
    $(this).parent().slideUp();
  });


  // Слайдеры

  const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.05 * $(window).width()) * rem;
    }
  }

  const slider1 = new Swiper(".baner__swiper-big", {
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
      
      thumbs: {
        swiper: {
        el: '.baner__swiper-small',
          speed: 1200,
          spaceBetween: rem(1),
          watchSlidesProgress: true,
          loop: true,
          breakpoints: {
            769: {
              spaceBetween: rem(1), 
              speed: 1200,
              allowTouchMove: false,
              watchSlidesProgress: true,
              loop: true,
              effect: 'fade',
                fadeEffect: {
                  crossFade: true
                },
            }
          },
        }
      },
  });

  

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

  const slider11 = new Swiper(".article__small-swiper", {
    slidesPerView: 1.7,
    speed: 1200,
    spaceBetween: rem(4.8),
    watchSlidesProgress: true,
    breakpoints: {
      769: {
        slidesPerView: 6,
        speed: 1200,
        spaceBetween: rem(2.7),
        watchSlidesProgress: true,
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
        slider11.slideToLoop(swiper.activeIndex);
    },
  }
});

$('.article__more').click(function () {
  slider11.destroy(false);
  $('.article__small-swiper').addClass('slider-active');
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


 
  const rangeSlider = document.getElementsByClassName('range-slider');

  for (var i = 0; i < rangeSlider.length; i++) {
   
  const slid = noUiSlider.create(rangeSlider[i], {
    start:['30000', '500000'],
    connect: true,
    step: 1,
    tooltips: true,
    range: {
      'min': [0],
      'max': [1000000],
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
  })
  });
  }

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
        iconImageHref: "img/icon/map_logo.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [-15, -30],
      };
      if (breakpoint) {
        descOptions.iconImageSize = [70, 96];
        descOptions.iconImageOffset = [-15, -30];
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
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

  // Загрузка файлов
  /* вывод файлов */
  function Output(msg) {
    const m = document.querySelector('.modal__content-file-items');
    m.innerHTML = m.innerHTML + msg;
  }

  /* проверка поддержки API */
  if (window.File && window.FileList && window.FileReader && document.querySelector("#upload-file")){
    Init();
  }

  /* инициализация */
  function Init(){
    const fileSelect = document.querySelector("#upload-file"),
          fileDrag = document.querySelector(".modal__content-download");
    let deleteBtn = document.querySelectorAll('.modal__content-file-item-close'),
        fileSelectDt = new DataTransfer();

    /* выбор файла */
    fileSelect.addEventListener("change", fileSelectHandler, false);

    /* проверка поддержки XHR2 */
    const xhr = new XMLHttpRequest();
    if (xhr.upload){
      fileDrag.addEventListener("dragover", fileDragHover, false);
      fileDrag.addEventListener("dragleave", fileDragHover, false);
      fileDrag.addEventListener("drop", fileSelectHandler, false);
    } else {
      document.querySelector('.modal__content-download-rec').style.display = 'none';
      document.querySelector('.modal__content-download-info').style.display = 'none';
    }

    // Файл над нужной областью
    function fileDragHover(e){
      e.stopPropagation();
      e.preventDefault();
      fileDrag.className = e.type == "dragover" ? "modal__content-download hover" : "modal__content-download";
    }

    // выбор файла
    function fileSelectHandler(e){
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
          return './img/icon/modal-d2.svg';
        }
        return './img/icon/modal-d1.svg';
      }

      Output(
          '<div class="modal__content-file-item">\n' +
          '   <div class="modal__content-file-item-img">\n' +
          '      <img src="'+ imgURL() +'" alt="">\n' +
          '   </div>\n' +
          '   <div class="modal__content-file-item-name">'+ file.name +'</div>\n' +
          '   <div class="modal__content-file-item-close">\n' +
          '      <img src="./img/icon/close-grey.svg" alt="">\n' +
          '   </div>\n' +
          '</div>'
      );
    }

    const deleteFile = (element) => {
      let dt = new DataTransfer();
      const index = Array.prototype.indexOf.call(element.parentNode.children, element);

      for (let i=0; i <= fileSelect.files.length-1; i++) {
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

 

});
