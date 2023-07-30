// //masked inputs
// $(() => {
//   Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
// });
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
  $(this).toggleClass('is-active')
})
