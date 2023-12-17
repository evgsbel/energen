"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// //masked inputs
$(function () {
  Inputmask({
    "mask": "+7 999 999-99-99"
  }).mask('.phone-mask');
});

//hover top menu
// $(() => {
//   var timer, pause = 900;
//   $(".js-header-nav").on("click", function (event) {
//     window.clearTimeout(timer);
//     var that = this;
//     if (event.type == "mouseenter") {
//       timer = window.setTimeout(function () {
//         that.classList.add("is-hover")
//       }, pause)
//     } else {
//       this.classList.remove("is-hover")
//
//     }
//   })
//   $(".js-nav-item-sub").on("mouseenter mouseleave", function (event) {
//     window.clearTimeout(timer);
//     var that = this;
//     if (event.type == "mouseenter") {
//       timer = window.setTimeout(function () {
//         that.classList.add('is-hover')
//         that.querySelector('ul').classList.add('is-open');
//       }, pause)
//     } else {
//       this.classList.remove("is-hover")
//       that.querySelector('ul').classList.remove('is-open');
//     }
//   });
// });

$(function () {});

//header catalog
$(function () {
  var closeBtn = $('.js-close-mobile-menu');
  var menu = $('.js-mobile-menu');
  var body = $('body');
  var overlay = $('.js-overlay');
  var menuBtn = $(".js-open-header-catalog");
  var closeSubMenu = $('.js-close-sub-menu');
  closeBtn.on("click", function () {
    //e.stopPropagation();
    menuBtn.removeClass('is-active');
    menu.removeClass('is-open');
    body.removeClass('opened-menu');
    overlay.removeClass('is-visible');
  });
  overlay.on('click', function (e) {
    e.stopPropagation();
    menu.removeClass('is-open');
    body.removeClass('opened-menu');
    overlay.removeClass('is-visible');
    menuBtn.removeClass("is-active");
  });
  closeSubMenu.on('click', function () {
    $('.mobile-sub-menu').removeClass('is-open');
  });
  function checkWidth() {
    var windowWidth = $('body').innerWidth();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) && windowWidth > 960 && windowWidth < 1100) {
      // mobile menu

      menuBtn.on("click", function () {
        $(menuBtn).addClass('is-active');
        menu.addClass('is-open');
        body.addClass('opened-menu');
        overlay.addClass('is-visible');
      });
      $('.js-1000px-filter').removeClass('col-lg-4');
      $('.js-1000px-filter').addClass('col-lg-12');
      $('.js-1000px-catalog').removeClass('col-lg-8');
      $('.js-1000px-catalog').addClass('col-lg-12');
      $('.js-catalog-item').removeClass('col-sm-6');
      $('.js-catalog-item').addClass('col-md-4 col-sm-6');
      $('.js-catalog-seo-card').removeClass('col-sm-6');
      $('.js-catalog-seo-card').addClass('col-md-4 col-sm-6');
      $('.filters__caption-all').css('display', 'block'); //добавилась строка
      $('.js-open-station-filters').css('display', 'block');
      $('.js-popular-filters-open').css('display', 'block');
      $('.js-mobile-filters').addClass('menu-filters');
    } else if (windowWidth <= 960) {
      $('.js-mobile-filters').addClass('menu-filters');
      menuBtn.on("click", function () {
        $(menuBtn).addClass('is-active');
        menu.addClass('is-open');
        body.addClass('opened-menu');
        overlay.addClass('is-visible');
      });
    } else {
      var _menu = $(".js-header-catalog");
      menuBtn.on("click", function () {
        if ($(this).hasClass("is-active")) {
          $(this).removeClass("is-active");
          _menu.removeClass('is-open');
        } else {
          $(this).addClass("is-active");
          _menu.addClass('is-open');
        }
      });
      $(document).click(function (e) {
        if (!menuBtn.is(e.target) && !_menu.is(e.target) && _menu.has(e.target).length === 0 && menuBtn.has(e.target).length === 0) {
          _menu.removeClass('is-open');
          menuBtn.removeClass("is-active");
        }
      });
    }
  }
  checkWidth();
  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});

$(function () {
  // mobile filters

  var filters = document.querySelector('.js-mobile-filters');
  var popularFilters = document.querySelector('.js-mobile-filter-popular');
  var subFiltersStation = document.querySelector('.js-sub-filter-station');
  var subFiltersEngine = document.querySelector('.js-sub-filter-engine');
  var body = document.querySelector('body');
  var overlay = document.querySelector('.js-overlay');
  var filtersBtn = $(".js-filters-open");
  var popularFiltersBtn = $(".js-popular-filters-open");
  var filtersStationBtn = $(".js-open-station-filters");
  var filtersEnginenBtn = $(".js-open-engine-filters");
  filtersBtn.on("click", function () {
    filters.classList.add('is-open');
    body.classList.add('opened-menu');
    overlay.classList.add('is-visible');
  });
  popularFiltersBtn.on("click", function () {
    popularFilters.classList.add('is-open');
    body.classList.add('opened-menu');
    overlay.classList.add('is-visible');
  });
  filtersStationBtn.on("click", function (e) {
    subFiltersStation.classList.add('is-open');
    //добавилось несколько строк
    e.stopPropagation();
    $('.filters__item').hide();
    $('.filters__submit').hide();
    $('.filters__reset').hide();
    $('.sub-in-hide').hide();
    //добавилось несколько строк END
  });

  filtersEnginenBtn.on("click", function (e) {
    subFiltersEngine.classList.add('is-open');
    //добавилось несколько строк
    e.stopPropagation();
    $('.filters__item').hide();
    $('.filters__submit').hide();
    $('.filters__reset').hide();
    $('.sub-in-hide').hide();
    //добавилось несколько строк END
  });

  var closeBtns = document.querySelectorAll('.js-close-filters');
  var _iterator = _createForOfIteratorHelper(closeBtns),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var e = _step.value;
      e.addEventListener('click', function (e) {
        e.stopPropagation();
        filters.classList.remove('is-open');
        popularFilters.classList.remove('is-open');
        subFiltersStation.classList.remove('is-open');
        subFiltersEngine.classList.remove('is-open');
        body.classList.remove('opened-menu');
        overlay.classList.remove('is-visible');
        //добавилось несколько строк
        $('.filters__item').show();
        $('.filters__submit').show();
        $('.filters__reset').show();
        $('.sub-in-hide').show();
        //добавилось несколько строк END
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var closeSubBtn = document.querySelectorAll('.js-close-sub-filter');
  var _iterator2 = _createForOfIteratorHelper(closeSubBtn),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _e = _step2.value;
      _e.addEventListener('click', function () {
        subFiltersStation.classList.remove('is-open');
        subFiltersEngine.classList.remove('is-open');
        //добавилось несколько строк
        $('.filters__item').show();
        $('.filters__submit').show();
        $('.filters__reset').show();
        $('.sub-in-hide').show();
        //добавилось несколько строк END
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  overlay.addEventListener('click', function (e) {
    e.stopPropagation();
    filters.classList.remove('is-open');
    popularFilters.classList.remove('is-open');
    subFiltersStation.classList.remove('is-open');
    subFiltersEngine.classList.remove('is-open');
    body.classList.remove('opened-menu');
    overlay.classList.remove('is-visible');
    filtersBtn.removeClass("is-active");
    popularFiltersBtn.removeClass("is-active");
    //добавилось несколько строк
    $('.filters__item').show();
    $('.filters__submit').show();
    $('.filters__reset').show();
    $('.sub-in-hide').show();
    //добавилось несколько строк END
  });
});

$(function () {
  // select2
  $('.js-select').select2({
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
    if ($(this).hasClass("active")) {} else {
      $('.gallery__list')[0].scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
    $(this).closest('.gallery__list').find('.multi-collapse').toggleClass('is-open');
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
  $('.js-card-favorite').on('click', function () {
    if ($(this).hasClass('item-favorites__actions-button')) {
      $(this).parents('.item-actions__button-wrapper').toggleClass('is-active');
    }
    if ($(this).find('span').text() != "В избранном") {
      $(this).find('span').text('В избранном');
    } else {
      $(this).find('span').text('Избранное');
    }
    $(this).toggleClass('is-active');
  });
  $('.js-card-matches').on('click', function () {
    if ($(this).hasClass('item-favorites__actions-button')) {
      $(this).parents('.item-actions__button-wrapper').toggleClass('is-active');
    }
    if ($(this).find('span').text() != "В сравнении") {
      $(this).find('span').text('В сравнении');
    } else {
      $(this).find('span').text('Сравнить');
    }
    $(this).toggleClass('is-active');
  });
});

//sliders
$(function () {
  //news slider
  var homeNewsSlider = new Swiper(".js-news-slider", {
    speed: 100,
    watchSlidesProgress: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".news-slider-nav-next",
      prevEl: ".news-slider-nav-prev"
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      960: {
        slidesPerView: 3
      }
    }
  });
  var homeBestSlider = new Swiper(".js-best-slider", {
    speed: 200,
    slidesPerGroup: 4,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".favorite-nav-next",
      prevEl: ".favorite-nav-prev"
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 12
      },
      600: {
        slidesPerView: 2.2,
        spaceBetween: 12
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  var compareBestSlider = new Swiper(".js-compare-slider", {
    speed: 100,
    watchSlidesProgress: true,
    allowTouchMove: false,
    navigation: {
      nextEl: ".favorite-nav-next",
      prevEl: ".favorite-nav-prev"
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 12
      },
      600: {
        slidesPerView: 2.2,
        spaceBetween: 12
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  var filterTagsSlider = new Swiper(".js-main-filters-tags", {
    speed: 100,
    loop: true,
    spaceBetween: 16,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 6.5
      },
      1280: {
        slidesPerView: 8.5
      }
    }
  });

  //brands slider
  var brandsSlider = new Swiper(".js-brands-slider", {
    slidesPerView: 10,
    grid: {
      rows: 2,
      fill: "row"
    },
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 2.5
      },
      768: {
        slidesPerView: 4
      },
      960: {
        slidesPerView: 6
      }
    }
  });
  //clients slider
  var clientsSlider = new Swiper(".js-clients-slider", {
    slidesPerView: 10,
    grid: {
      rows: 2,
      fill: "row"
    },
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 3.5
      },
      600: {
        slidesPerView: 8
      },
      960: {
        slidesPerView: 10
      }
    }
  });

  //articles slider
  var articlesSlider = new Swiper(".js-articles-slider", {
    speed: 100,
    watchSlidesProgress: true,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1.2
      },
      600: {
        slidesPerView: 2.5
      },
      768: {
        slidesPerView: 3.5
      },
      960: {
        slidesPerView: 4
      }
    }
  });
  var certSlider = new Swiper(".js-cert-slider", {
    speed: 100,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1.5
      },
      576: {
        slidesPerView: 2.5
      },
      768: {
        slidesPerView: 3.5
      },
      960: {
        slidesPerView: 4,
        spaceBetween: 24
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  var reviewssSlider = new Swiper(".js-reviews-slider", {
    speed: 100,
    loop: true,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
      },
      1024: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 2
      }
    }
  });

  //card slider
  var pdoductImagesSmall = new Swiper(".js-product-images-slider-small", {
    spaceBetween: 15,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 3.5
      },
      769: {
        slidesPerView: 3
      }
    }
  });
  var pdoductImagesBig = new Swiper(".js-product-images-slider-big", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".product-images-nav-next",
      prevEl: ".product-images-nav-prev"
    },
    thumbs: {
      swiper: pdoductImagesSmall
    }
  });
  var partnersSlider = new Swiper(".js-partners-slider", {
    speed: 100,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20
      },
      960: {
        slidesPerView: 5
      }
    }
  });
});

//change city
$(function () {
  $(".js-change-city-btn").click(function (event) {
    toggleMenu();
    event.stopPropagation();
  });
  $('.js-city-item').click(function () {
    $('.js-change-city-btn').find('span').html($(this).text());
    $('.js-change-city-caption').html($(this).text());
    toggleMenu();
  });
  function toggleMenu() {
    var menu = $(".js-city-drop-down");
    var menuBtn = $('.js-change-city-btn');
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
    $(".js-city-drop-down").removeClass("active");
  }
  $('.js-city-drop-down').click(function (event) {
    event.stopPropagation();
  });
});
$('.js-city-field').on('input', function () {
  var search = $(this).val();
  searchData(search);
});
function searchData(search) {
  var towns = $('.js-city-item');
  towns.each(function () {
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
  $('.js-search-input').addClass('is-visible');
});
$('.js-search-field').focus(function () {
  $('.js-search-drop-down').addClass('is-open');
});
$(document).click(function (e) {
  var input = $(".js-search-input");
  var inputBtn = $('.js-search-btn');
  var inputSvg = $('.js-search-btn').find('svg');
  if (!inputBtn.is(e.target) && !inputSvg.is(e.target) && !input.is(e.target) && input.has(e.target).length === 0) {
    input.removeClass('is-visible');
    inputBtn.removeClass("is-active");
    $('.js-search-drop-down').removeClass('is-open');
  }
});

//btn up
$(function () {
  document.querySelector('.js-btn-up').onclick = function () {
    // переместим в начало страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
});

//category-tags read more
$('.js-category-tags-open').click(function () {
  if ($(this).text() != "Скрыть") {
    $(this).text('Скрыть');
  } else {
    $(this).text('Показать все');
  }
  $(this).parents('.category-tags').find('.category-tags__list').toggleClass('is-open');
});

//readmore
$('.js-open-content').on('click', function () {
  if ($(this).find('span').text() != "Свернуть") {
    $(this).find('span').text('Свернуть');
  } else {
    $(this).find('span').text('Развернуть');
  }
  $(this).toggleClass('is-active');
  $(this).parent().find('.content__wrapper').toggleClass('is-open');
});

//filters checkbox
$(function () {
  var group = document.querySelectorAll('.filters-check__input');
  var _iterator3 = _createForOfIteratorHelper(group),
    _step3;
  try {
    var _loop = function _loop() {
      var e = _step3.value;
      e.onchange = changeTag;
      var cat = document.createElement("span");
      var div = document.createElement("div");
      var del = document.createElement("span");
      div.innerText = e.dataset.jsvalue;
      div.classList.add("catalog-tag-list__item");
      del.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M16.7076 8.70708L13.4146 12.0001L16.7076 15.2931C16.8031 15.3853 16.8793 15.4957 16.9317 15.6177C16.9841 15.7397 17.0117 15.8709 17.0128 16.0037C17.014 16.1365 16.9887 16.2681 16.9384 16.391C16.8881 16.5139 16.8139 16.6256 16.72 16.7195C16.6261 16.8134 16.5144 16.8876 16.3915 16.9379C16.2686 16.9882 16.1369 17.0135 16.0042 17.0123C15.8714 17.0112 15.7402 16.9836 15.6182 16.9312C15.4962 16.8788 15.3858 16.8026 15.2936 16.7071L12.0006 13.4141L8.70757 16.7071C8.61532 16.8026 8.50498 16.8788 8.38297 16.9312C8.26097 16.9836 8.12975 17.0112 7.99697 17.0123C7.86419 17.0135 7.73251 16.9882 7.60962 16.9379C7.48672 16.8876 7.37507 16.8134 7.28117 16.7195C7.18728 16.6256 7.11303 16.5139 7.06275 16.391C7.01247 16.2681 6.98717 16.1365 6.98832 16.0037C6.98947 15.8709 7.01706 15.7397 7.06947 15.6177C7.12188 15.4957 7.19806 15.3853 7.29357 15.2931L10.5866 12.0001L7.29357 8.70708C7.19806 8.61483 7.12188 8.50449 7.06947 8.38249C7.01706 8.26048 6.98947 8.12926 6.98832 7.99648C6.98717 7.8637 7.01247 7.73202 7.06275 7.60913C7.11303 7.48623 7.18728 7.37458 7.28117 7.28069C7.37507 7.18679 7.48672 7.11254 7.60962 7.06226C7.73251 7.01198 7.86419 6.98668 7.99697 6.98783C8.12975 6.98898 8.26097 7.01657 8.38297 7.06898C8.50498 7.12139 8.61532 7.19757 8.70757 7.29308L12.0006 10.5861L15.2936 7.29308C15.3858 7.19757 15.4962 7.12139 15.6182 7.06898C15.7402 7.01657 15.8714 6.98898 16.0042 6.98783C16.1369 6.98668 16.2686 7.01198 16.3915 7.06226C16.5144 7.11254 16.6261 7.18679 16.72 7.28069C16.8139 7.37458 16.8881 7.48623 16.9384 7.60913C16.9887 7.73202 17.014 7.8637 17.0128 7.99648C17.0117 8.12926 16.9841 8.26048 16.9317 8.38249C16.8793 8.50449 16.8031 8.61483 16.7076 8.70708Z" /></svg>';
      del.classList.add("catalog-tag-list__del");
      del.onclick = function () {
        hidden.append(this.parentNode);
        e.checked = false;
      };
      div.append(del);
      cat.classList.add("catalog-tag-list__category");
      cat.innerText = e.dataset.category + ': ';
      div.prepend(cat);
      e.target = div;
      e.checked ? checked.append(div) : hidden.append(div);
    };
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  function changeTag() {
    this.checked ? checked.append(this.target) : hidden.append(this.target);
  }
});

//filters show more
$(function () {
  $('.js-filters-showall').click(function () {
    if ($(this).text() != "Свернуть") {
      $(this).text('Свернуть');
    } else {
      $(this).text('Показать все');
    }
  });
  $('.js-collapse-variants').click(function () {
    if ($(this).find('span').text() != "Свернуть") {
      $(this).find('span').text('Свернуть');
    } else {
      $(this).find('span').text('Развернуть');
    }
  });
});

//sorting btn
$('.js-sorting-btn').click(function () {
  $(this).toggleClass('is-active');
});

//sorting quantity
$(function () {
  $('.js-select-quantity').select2({
    minimumResultsForSearch: Infinity,
    width: '204px',
    closeOnSelect: true
  });
});

// change view catalog
$(document).ready(function () {
  $(".js-horizontal-view").click(function () {
    $('.catalog').addClass('catalog_horizontal');
    $('.catalog').removeClass('catalog_vertical');
    $(this).addClass('is-active');
    $(this).attr('disabled', '');
    $(".js-vertical-view").removeAttr('disabled');
    $('.js-vertical-view').removeClass('is-active');
    if ($('.js-catalog-item').hasClass('col-12')) {
      $('.js-catalog-item').addClass('col-md-4 col-lg-4 col-sm-6');
      $('.js-catalog-item').removeClass('col-12 col-md-4');
    } else {
      $('.js-catalog-item').addClass('col-12');
      $('.js-catalog-item').removeClass('col-md-4 col-lg-4 col-sm-6');
    }
    if ($('.js-catalog-seo-card').hasClass('col-md-6')) {
      $('.js-catalog-seo-card').addClass('col-md-4 col-lg-4 col-sm-6');
      $('.js-catalog-seo-card').removeClass('col-md-6');
    } else {
      $('.js-catalog-seo-card').addClass('col-md-6');
      $('.js-catalog-seo-card').removeClass('col-md-4 col-md-4 col-lg-4 col-sm-6');
    }
    return false;
  });
  $(".js-vertical-view").click(function () {
    $('.catalog').removeClass('catalog_horizontal');
    $('.catalog').addClass('catalog_vertical');
    $(this).addClass('is-active');
    $(this).attr('disabled', '');
    $(".js-horizontal-view").removeAttr('disabled');
    $('.js-horizontal-view').removeClass('is-active');
    if ($('.js-catalog-item').hasClass('col-md-4 col-lg-4 col-sm-6')) {
      $('.js-catalog-item').addClass('col-12');
      $('.js-catalog-item').removeClass('col-md-4 col-lg-4 col-sm-6');
    } else {
      $('.js-catalog-item').addClass('col-md-4 col-lg-4 col-sm-6');
      $('.js-catalog-item').removeClass('col-12');
    }
    if ($('.js-catalog-seo-card').hasClass('col-md-4 col-lg-4 col-sm-6')) {
      $('.js-catalog-seo-card').addClass('col-md-6');
      $('.js-catalog-seo-card').removeClass('col-lg-4 col-sm-6');
    } else {
      $('.js-catalog-seo-card').addClass('col-md-4 col-lg-4 col-sm-6');
      $('.js-catalog-seo-card').removeClass('col-md-6');
    }
    return false;
  });
});

// coatalog tolltip
$(function () {
  $("[data-toggle='tooltip']").tooltip({
    html: true,
    container: '.filters',
    placement: 'right',
    trigger: 'click',
    offset: '0 10px'
  });
});
$(function () {
  $(document).on('shown.bs.tooltip', function (e) {
    setTimeout(function () {
      $(e.target).tooltip('hide');
    }, 3000);
  });
});

//input number
$(function () {
  $('.input-count .input-count_minus').click(function () {
    var $input = $(this).parent().find('.js-input-number');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
  });
  $('.input-count .input-count_plus').click(function () {
    var $input = $(this).parent().find('.js-input-number');
    var count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
  });
  $('.input-count .js-input-number').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
      this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
      this.value = parseInt($(this).data('max-count'));
    }
  });
});

//fixed compare slider
$(document).ready(function () {
  $(function () {
    var timer = null;
    window.addEventListener('scroll', function () {
      if (timer !== null) {
        var stickySidebar = function stickySidebar() {
          var scrollDistance = $(document).scrollTop(),
            headerHeight = $('.compare__slider').outerHeight(true),
            // sidebarHeight = $('aside').outerHeight(true),
            footerOffsetTop = $('.js-stop-header').offset().top,
            $header = $('.compare__slider');
          if (scrollDistance >= headerHeight + 200) {
            $header.addClass('is-fixed');
          } else {
            $header.removeClass('is-fixed');
          }
          if (scrollDistance + headerHeight >= footerOffsetTop) {
            $header.removeClass('is-fixed');
          }
        };
        clearTimeout(timer);
        //document.querySelector('header').classList.add('out', 'is-fixed');
        stickySidebar();
        $(document).scroll(function () {
          stickySidebar();
        });
      }
      timer = setTimeout(function () {
        // document.querySelector('header').classList.remove('out');
      }, 800);
    }, false);
  });
});

// anchors
$(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');
  var _iterator4 = _createForOfIteratorHelper(anchors),
    _step4;
  try {
    var _loop2 = function _loop2() {
      var anchor = _step4.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
});

// specialist collapse
$(function () {
  function checkWidthCatalog() {
    var windowWidth = $('body').innerWidth();
    if (windowWidth < 576) {
      $('.js-specialist-collapse').removeClass('show');
    } else {
      $('.js-specialist-collapse').addClass('show');
    }
  }
  checkWidthCatalog();
  $(window).resize(function () {
    checkWidthCatalog(); // проверит при изменении размера окна клиента
  });
});

//mobile sub menu

document.addEventListener('DOMContentLoaded', function () {
  var subBtn = document.querySelectorAll('.js-open-mobile-sub');
  subBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      subBtn.forEach(function (subBtn) {
        subBtn.classList.remove('is-active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.js-sub-mobile-menu').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('is-open');
      el.classList.add('is-active');
    });
  });
});
$('.js-main-filter-checkbox').change(function (ev) {
  var path = ev.currentTarget.dataset.path;
  $("[data-target=\"".concat(path, "\"]")).toggleClass('is-check');
  var inputCount = $(this).closest('.main-filters__group').find('.js-main-filter-checkbox:checked').length;
  var inputCheck = $(this).closest('.main-filters__group').find('.js-main-filter-checkbox:checked').val();
  if (inputCount === 1) {
    $(this).closest('.main-filters__group').find(".js-main-filter-count").text(inputCheck);
  } else if (inputCount > 1) {
    $(this).closest('.main-filters__group').find(".js-main-filter-count").text('Выбрано: ' + inputCount);
  } else {
    $(this).closest('.main-filters__group').find(".js-main-filter-count").text('не важно');
  }
});
$(document).on('click', '.allow-focus', function (e) {
  e.stopPropagation();
});