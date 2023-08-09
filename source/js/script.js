let btn = document.querySelector('.main-nav__toggle');
let menu = document.querySelector('.main-nav__list');
btn.onclick = function () {
  menu.classList.toggle('main-nav__list--on');
  btn.classList.toggle('main-nav__toggle--on');
}
