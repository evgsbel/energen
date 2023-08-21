// //masked inputs
$(() => {
  Inputmask({"mask": "+7 999 999-99-99"}).mask('.phone-mask');
});
//
// // tabs
// document.addEventListener('DOMContentLoaded', function () {
//   const tabsBtn = document.querySelectorAll('.tabs__btn');
//   tabsBtn.forEach(function (el) {
//     el.addEventListener('click', function (event) {
//       tabsBtn.forEach(tabsBtn => {
//         tabsBtn.classList.remove('is-active');
//       });
//       const path = event.currentTarget.dataset.path;
//       document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
//         tabContent.classList.remove('is-active');
//       });
//       document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
//       el.classList.add('is-active');
//     });
//   });
// });
//
//
// // mobile menu
// $(() => {
//   const btnMenu = document.querySelectorAll('.js-open-mobile-menu');
//   const menu = document.querySelector('.js-mobile-menu');
//   const body = document.querySelector('body');
//   btnMenu.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//       e.stopPropagation();
//       menu.classList.add('is-open');
//       body.classList.add('opened-menu')
//     });
//   })
//   const closeBtn = document.querySelector('.js-close-mobile-menu');
//   closeBtn.addEventListener('click', function (e) {
//     e.stopPropagation();
//     menu.classList.remove('is-open');
//     body.classList.remove('opened-menu')
//   });
// });
//
//

//hover top menu
var hoverTimeout;
$('.js-nav-item-sub').hover(
  function () {
    var _this = $(this);

    hoverTimeout = setTimeout(function () {
      _this.addClass('hover');
      _this.find("ul:first").addClass('is-open');
    }, 700);
  },
  function () {
    //Скрываем меню
    $(this).removeClass('is-open');
    $(this).find("ul:first").removeClass('is-open');

    clearTimeout(hoverTimeout);
  }
);
//header catalog
$(() => {
  const menu = $(".js-header-catalog"),
  menuBtn = $(".js-open-header-catalog");
  if ( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {

    menuBtn.on("click", function () {
      console.log(456)
      if ($(this).hasClass("is-active")) {
        $(this).removeClass("is-active");
        menu.removeClass('is-open');
      } else {
        $(this).addClass("is-active");
        menu.addClass('is-open');
      }
    });
    $(document).click(function (e) {
      if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0 && menuBtn.has(e.target).length === 0) {
        menu.removeClass('is-open');
        menuBtn.removeClass("is-active");
      }
    });
  }
  else {
    menuBtn.on("click", function () {
      console.log(123)
    })
  }
});

$(() => {

// select2
  $('select').select2({
    minimumResultsForSearch: Infinity,
    width: '100%',
    closeOnSelect: false,
//custom scroll
  })
    .on("select2:open", function () {
      dropdownParent: $(this).parent()
      var optionsContainer = $('.select2-results__options').get(0);

      setTimeout(function () {
        new SimpleBar(optionsContainer, {
          autoHide: false
        });
      }, 0);

    })
    .on('change', function () {
      var selected = $(this).val().length;
      var of = $(this).find('option').length;

      if (selected > 1)
        $(this).parent().find('.select2 .select2-selection ul').html('<li class="select2-selection__choice">Выбрано: ' + selected + '</li>')
    });
});

//gallery show more
$(() => {
  $('.js-gallery-show-more').click(function () {

    $(this).toggleClass('active');
    if ($(this).find('span').text() != "Свернуть") {
      $(this).find('span').text('Свернуть');
    } else {
      $(this).find('span').text('Показать еще');
    }
  });
});

//toggle favorite and matches
$(() => {
  $('.js-item-card-toggle').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('item-favorites__actions-button')) {
      $(this).parents('.item-actions__button-wrapper').toggleClass('is-active');
    }
    $(this).toggleClass('is-active');
  });
  $('.js-item-togglable-card-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
  });
});

//sliders
$(() => {
  const homeBestSlider = new Swiper(".js-best-slider", {
    speed: 700,
    watchSlidesProgress: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2.5,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  });
  const filterTagsSlider = new Swiper(".js-main-filters-tags", {
    speed: 700,
    loop: true,
    spaceBetween: 16,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 6.5,
      },
      1280: {
        slidesPerView: 8.5,
      }
    }
  });
  const homeNewsSlider = new Swiper(".js-news-slider", {
    speed: 700,
    slidesPerView: 3,
    watchSlidesProgress: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

//change city
$(() => {
  $(".js-change-city-btn").click(function(event) {
    toggleMenu();
    event.stopPropagation();
  });

  $('.js-city-item').click(function() {
    $('.js-change-city-btn').find('span').html($(this).text());
    $('.js-change-city-caption').html($(this).text());
    toggleMenu();
  });

  function toggleMenu() {
    let menu = $(".js-city-drop-down");
    let menuBtn =  $('.js-change-city-btn');
    if (!menu.hasClass('is-open')) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }
    menu.toggleClass("is-open");

    $(document).click(function (e) {
      if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.removeClass('is-open');
        menuBtn.removeClass("is-active");
      }
    });
  }



  function closeMenu() {
    $(".js-city-drop-down").removeClass("active")
  }

  $('.js-city-drop-down').click(function(event) {
    event.stopPropagation();
  });
});


$('.js-city-field').on('input', function() {
  let search = $(this).val();
  searchData(search);
});

function searchData(search) {
  let towns = $('.js-city-item');
  towns.each(function() {
    if ($(this).text().toLowerCase().indexOf(search.toLowerCase()) === -1) {
      $(this).addClass('is-hidden');
    } else {
      $(this).removeClass('is-hidden');
    }
  });
}

//search
$('.header-search__btn').click(function () {
  $(this).addClass('is-active');
  $('.js-search-input').addClass('is-visible')
});
$('.js-search-field').focus(function () {
  $('.js-search-drop-down').addClass('is-open');
});
$(document).click(function (e) {
  let input = $(".js-search-input");
  let inputBtn =  $('.js-search-btn');
  let inputSvg =  $('.js-search-btn').find('svg');
  if (!inputBtn.is(e.target) && !inputSvg.is(e.target) && !input.is(e.target) && input.has(e.target).length === 0) {
    input.removeClass('is-visible');
    inputBtn.removeClass("is-active");
    $('.js-search-drop-down').removeClass('is-open')
  }
});
