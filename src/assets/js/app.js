// //masked inputs
$(() => {
  Inputmask({"mask": "+7 999 999-99-99"}).mask('.phone-mask');
});

//hover top menu
$(() => {
  var timer, pause = 900;
  $(".js-header-nav").on("mouseenter mouseleave", function (event) {
    window.clearTimeout(timer);
    var that = this;
    if (event.type == "mouseenter") {
      timer = window.setTimeout(function () {
        that.classList.add("is-hover")
      }, pause)
    } else {
      this.classList.remove("is-hover")

    }
  })
  $(".js-nav-item-sub").on("mouseenter mouseleave", function (event) {
    window.clearTimeout(timer);
    var that = this;
    if (event.type == "mouseenter") {
      timer = window.setTimeout(function () {
        that.classList.add('is-hover')
        that.querySelector('ul').classList.add('is-open');
      }, pause)
    } else {
      this.classList.remove("is-hover")
      that.querySelector('ul').classList.remove('is-open');
    }
  });
});


//header catalog
$(() => {
  function checkWidth() {
    let windowWidth = $('body').innerWidth()
    let menuBtn = $(".js-open-header-catalog");
    const closeBtn = $('.js-close-mobile-menu');

    if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && windowWidth < 960) {

      // mobile menu

      const menu = document.querySelector('.js-mobile-menu');
      const body = document.querySelector('body');
      const overlay = document.querySelector('.js-overlay');

      menuBtn.on("click", function () {

        menu.classList.add('is-open');
        body.classList.add('opened-menu')
        overlay.classList.add('is-visible')
      });

      const closeBtn = document.querySelector('.js-close-mobile-menu');
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        menu.classList.remove('is-open');
        body.classList.remove('opened-menu')
        overlay.classList.remove('is-visible')
      });

      overlay.addEventListener('click', function (e) {
        e.stopPropagation();
        menu.classList.remove('is-open');
        body.classList.remove('opened-menu')
        overlay.classList.remove('is-visible')
        menuBtn.removeClass("is-active");
      });

    } else {
      const menu = $(".js-header-catalog");
      menuBtn.on("click", function () {

        if ($(this).hasClass("is-active")) {
          $(this).removeClass("is-active");
          menu.removeClass('is-open');
        } else {
          $(this).addClass("is-active");
          menu.addClass('is-open');
        }

      })
      $(document).click(function (e) {
        if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0 && menuBtn.has(e.target).length === 0) {
          menu.removeClass('is-open');
          menuBtn.removeClass("is-active");
        }
      });
    }
  }

  checkWidth();
  $(window).resize(function () {
    console.log('resize')
    checkWidth(); // проверит при изменении размера окна клиента
  });

});

$(() => {
// select2
  $('.js-select').select2({
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
  //news slider
  const homeNewsSlider = new Swiper(".js-news-slider", {
    speed: 700,
    watchSlidesProgress: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".news-slider-nav-next",
      prevEl: ".news-slider-nav-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      960: {
        slidesPerView: 3,
      }
    }
  });

  const homeBestSlider = new Swiper(".js-best-slider", {
    speed: 700,
    watchSlidesProgress: true,

    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 12,
      },
      600: {
        slidesPerView: 2.2,
        spaceBetween: 12,
      },
      960: {
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

//brands slider
  var brandsSlider = new Swiper(".js-brands-slider", {
    slidesPerView: 10,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 4,
      },
      960: {
        slidesPerView: 6,
      }
    }
  });
  //clients slider
  var clientsSlider = new Swiper(".js-clients-slider", {
    slidesPerView: 10,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 3.5,
      },
      768: {
        slidesPerView: 9,
      },
      960: {
        slidesPerView: 10,
      }
    }
  });

  //articles slider
  const articlesSlider = new Swiper(".js-articles-slider", {
    speed: 700,
    watchSlidesProgress: true,
    spaceBetween: 30,

    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      600: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      960: {
        slidesPerView: 4,
      }
    }
  });
  const certSlider = new Swiper(".js-cert-slider", {
    speed: 700,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      576: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      960: {
        slidesPerView: 4,
      }
    }
  });

  const reviewssSlider = new Swiper(".js-reviews-slider", {
    speed: 700,
    loop: true,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
    }
  });
});

//change city
$(() => {
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
    let menu = $(".js-city-drop-down");
    let menuBtn = $('.js-change-city-btn');
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

  $('.js-city-drop-down').click(function (event) {
    event.stopPropagation();
  });
});


$('.js-city-field').on('input', function () {
  let search = $(this).val();
  searchData(search);
});

function searchData(search) {
  let towns = $('.js-city-item');
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
  $('.js-search-input').addClass('is-visible')
});
$('.js-search-field').focus(function () {
  $('.js-search-drop-down').addClass('is-open');
});
$(document).click(function (e) {
  let input = $(".js-search-input");
  let inputBtn = $('.js-search-btn');
  let inputSvg = $('.js-search-btn').find('svg');
  if (!inputBtn.is(e.target) && !inputSvg.is(e.target) && !input.is(e.target) && input.has(e.target).length === 0) {
    input.removeClass('is-visible');
    inputBtn.removeClass("is-active");
    $('.js-search-drop-down').removeClass('is-open')
  }
});


//btn up
$(() => {
  document.querySelector('.js-btn-up').onclick = () => {
    // переместим в начало страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
});

//readmore
$('.js-open-content').on('click', function () {
  if ($(this).find('span').text() != "Свернуть") {
    $(this).find('span').text('Свернуть');
  } else {
    $(this).find('span').text('Развернуть');
  }
  $(this).toggleClass('is-active')
  $(this)
    .parent()
    .find('.content__wrapper')
    .toggleClass('is-open')
})

//filters checkbox
$(() => {
  let group = document.querySelectorAll('.filters-check__input');

  for (let e of group) {
    e.onchange = changeTag;
    let cat = document.createElement("span");
    let div  = document.createElement("div");
    let del = document.createElement("span");
    console.log(cat)
    div.innerText = e.value;
    div.classList.add("catalog-tag-list__item");
    del.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M16.7076 8.70708L13.4146 12.0001L16.7076 15.2931C16.8031 15.3853 16.8793 15.4957 16.9317 15.6177C16.9841 15.7397 17.0117 15.8709 17.0128 16.0037C17.014 16.1365 16.9887 16.2681 16.9384 16.391C16.8881 16.5139 16.8139 16.6256 16.72 16.7195C16.6261 16.8134 16.5144 16.8876 16.3915 16.9379C16.2686 16.9882 16.1369 17.0135 16.0042 17.0123C15.8714 17.0112 15.7402 16.9836 15.6182 16.9312C15.4962 16.8788 15.3858 16.8026 15.2936 16.7071L12.0006 13.4141L8.70757 16.7071C8.61532 16.8026 8.50498 16.8788 8.38297 16.9312C8.26097 16.9836 8.12975 17.0112 7.99697 17.0123C7.86419 17.0135 7.73251 16.9882 7.60962 16.9379C7.48672 16.8876 7.37507 16.8134 7.28117 16.7195C7.18728 16.6256 7.11303 16.5139 7.06275 16.391C7.01247 16.2681 6.98717 16.1365 6.98832 16.0037C6.98947 15.8709 7.01706 15.7397 7.06947 15.6177C7.12188 15.4957 7.19806 15.3853 7.29357 15.2931L10.5866 12.0001L7.29357 8.70708C7.19806 8.61483 7.12188 8.50449 7.06947 8.38249C7.01706 8.26048 6.98947 8.12926 6.98832 7.99648C6.98717 7.8637 7.01247 7.73202 7.06275 7.60913C7.11303 7.48623 7.18728 7.37458 7.28117 7.28069C7.37507 7.18679 7.48672 7.11254 7.60962 7.06226C7.73251 7.01198 7.86419 6.98668 7.99697 6.98783C8.12975 6.98898 8.26097 7.01657 8.38297 7.06898C8.50498 7.12139 8.61532 7.19757 8.70757 7.29308L12.0006 10.5861L15.2936 7.29308C15.3858 7.19757 15.4962 7.12139 15.6182 7.06898C15.7402 7.01657 15.8714 6.98898 16.0042 6.98783C16.1369 6.98668 16.2686 7.01198 16.3915 7.06226C16.5144 7.11254 16.6261 7.18679 16.72 7.28069C16.8139 7.37458 16.8881 7.48623 16.9384 7.60913C16.9887 7.73202 17.014 7.8637 17.0128 7.99648C17.0117 8.12926 16.9841 8.26048 16.9317 8.38249C16.8793 8.50449 16.8031 8.61483 16.7076 8.70708Z" /></svg>';
    del.classList.add("catalog-tag-list__del");
    del.onclick = function() {
      hidden.append(this.parentNode);
      e.checked = false;
    };
    div.append(del);
    cat.classList.add("catalog-tag-list__category");
    cat.innerText = e.dataset.category + ': ';
    div.prepend(cat);



    e.target = div;
    e.checked ? checked.append(div) : hidden.append(div);
  }

  function changeTag() {
    this.checked ? checked.append(this.target) : hidden.append(this.target);
 }



//shorthand for $(document).ready(handler)
//   $(function() {
//
//     var $groupContainers  = $('.group-containers'),
//
//       // out 'model': a list of objects representing user choices
//       userChoices       = [];
//
//     $('.filters-check__input').on('change', function(e) {
//       let span = document.createElement("span");
//       var $checkedBox     = $(this),
//         checkedBoxLabel = $checkedBox.next('label').text(),
//         checkedValue    = $checkedBox.val(),
//         category        = $checkedBox.data('category'),
//         alreadyChecked  = !$checkedBox[0].checked;
//
//       span.innerText = 'del';
//       span.onclick = function() {
//         e.checked = false;
//
//       };
//       console.log(e)
//
//
//       if(alreadyChecked){
//         removeChoiceFromModel(category, checkedValue);
//       } else {
//         addChoiceToModel(category, checkedValue);
//       }
//
//       updateDom();
//
//       return;
//       /////////////////////////////////////////////////////////
//
//       function cleanGroupContainers(){
//         $groupContainers.each(function(){
//           var list = $(this).find('ul');
//
//           if(list.length){
//             list.remove();
//           }
//         });
//       }
//
//
//       function updateDom(){
//
//         // reset dom - not efficient but easier to
//         // keep list state in sync
//         cleanGroupContainers();
//         appendChoices();
//         hideEmptyLists();
//       }
//
//       function appendChoices(){
//
//         var i, option, $categoryDiv,
//
//           len = userChoices.length;
//
//         // if len === 0 then no need to check
//         if(!len) return false;
//
//         for(i = 0; i < len; i++){
//           option        = userChoices[i];
//           $categoryDiv  = $('#' + option.category + '-container');
//
//           $categoryDiv.append('<ul><li>'+option.value+'</li></ul>');
//
//
//
//         }
//
//       }
//
//       function hideEmptyLists(){
//         $groupContainers.each(function(){
//           var $container = $(this),
//             items = $container.find('ul > li');
//
//           if(!items.length){
//             $container.hide();
//             // skip to next iteration
//             return true;
//           }
//
//           $container.show();
//         });
//       }
//
//       function addChoiceToModel(category, value){
//         userChoices.push({
//           category: category,
//           value: checkedValue
//         });
//       }
//
//       function removeChoiceFromModel(category, value){
//
//         var i, option,
//
//           len = userChoices.length;
//
//         // if len === 0 then no need to check
//         if(!len) return false;
//
//         for(i = 0; i < len; i++){
//           option = userChoices[i];
//
//           if(option.category === category && option.value === value){
//             // remove choice object from array
//             userChoices.splice(i, 1);
//             return;
//           }
//         }
//
//       }
//
//     });
//
//
//
//   });
});

//filters show more
$(() => {
  $('.js-filters-showall').click(function () {
    if ($(this).text() != "Свернуть") {
      $(this).text('Свернуть');
    } else {
      $(this).text('Показать все');
    }
  });
});

//sorting btn
$('.js-sorting-btn').click(function () {
  $(this).toggleClass('is-active')
})



//sorting quantity
$(() => {
  $('.js-select-quantity').select2({
    minimumResultsForSearch: Infinity,
    width: '204px',
    closeOnSelect: true,
  })
})


// change view catalog
$(document).ready(function() {
  $(".js-horizontal-view").click(function() {
    $('.catalog').addClass('catalog_horizontal')
    $('.catalog').removeClass('catalog_vertical')
    $(this).addClass('is-active')
    $('.js-vertical-view').removeClass('is-active')
    if ($('.js-catalog-item').hasClass('col-12')) {
      $('.js-catalog-item').addClass('col-lg-4 col-sm-6');
      $('.js-catalog-item').removeClass('col-12');
    } else {
      $('.js-catalog-item').addClass('col-12');
      $('.js-catalog-item').removeClass('col-lg-4 col-sm-6');
    }
    return false;
  });
  $(".js-vertical-view").click(function() {
    $('.catalog').removeClass('catalog_horizontal')
    $('.catalog').addClass('catalog_vertical')
    $(this).addClass('is-active')
    $('.js-horizontal-view').removeClass('is-active')
    if ($('.js-catalog-item').hasClass('col-lg-4 col-sm-6')) {
      $('.js-catalog-item').addClass('col-12');
      $('.js-catalog-item').removeClass('col-lg-4 col-sm-6');
    } else {
      $('.js-catalog-item').addClass('col-lg-4 col-sm-6');
      $('.js-catalog-item').removeClass('col-12');
    }
    return false;
  });
});

// coatalog tolltip
$(function () {
  $("[data-toggle='tooltip']").tooltip({
    html: true,
    container:'.filters',
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


