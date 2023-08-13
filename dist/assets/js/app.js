"use strict";

// //masked inputs
$(function () {
  Inputmask({
    "mask": "+7 999 999-99-99"
  }).mask('.phone-mask');
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

$('.js-open-header-catalog').click(function () {
  $(this).toggleClass('is-active');
});
$('.nav-tabs a').on('click', function (e) {
  e.preventDefault();
  $(this).tab('show');
});
$(function () {
  // select2
  $('select').select2({
    minimumResultsForSearch: Infinity,
    width: '100%',
    closeOnSelect: false
    //custom scroll
  }).on("select2:open", function () {
    dropdownParent: $(this).parent();
    var optionsContainer = $('.select2-results__options').get(0);
    setTimeout(function () {
      new SimpleBar(optionsContainer, {
        autoHide: false
      });
    }, 0);
  }).on('change', function () {
    var selected = $(this).val().length;
    var of = $(this).find('option').length;
    if (selected > 1) $(this).parent().find('.select2 .select2-selection ul').html('<li class="select2-selection__choice">Выбрано: ' + selected + '</li>');
  });
});

//gallery show more
$(function () {
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
$(function () {
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
$(function () {
  var homeBestSlider = new Swiper(".js-best-slider", {
    speed: 700,
    slidesPerView: 4,
    watchSlidesProgress: true,
    spaceBetween: 30
    // breakpoints: {
    //   0: {
    //     pagination: {
    //       el: ".js-home-best-slider-pagination",
    //       clickable: true,
    //     },
    //     slidesPerView: 1,
    //   },
    //   576: {
    //     pagination: {
    //       el: ".js-home-best-slider-pagination",
    //       clickable: true,
    //     },
    //     slidesPerView: 2,
    //   },
    //   768: {
    //     pagination: {
    //       el: ".js-home-best-slider-pagination",
    //       clickable: true,
    //     },
    //     slidesPerView: 3,
    //
    //   },
    //   1290: {
    //     slidesPerView: 4,
    //     navigation: {
    //       nextEl: ".js-home-best-slider-next",
    //       prevEl: ".js-home-best-slider-prev",
    //     },
    //   },
    //   1560: {
    //     slidesPerView: 4,
    //     navigation: {
    //       nextEl: ".js-home-best-slider-next",
    //       prevEl: ".js-home-best-slider-prev",
    //     },
    //   },
    // }
  });

  var homeNewsSlider = new Swiper(".js-news-slider", {
    speed: 700,
    slidesPerView: 3,
    watchSlidesProgress: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});