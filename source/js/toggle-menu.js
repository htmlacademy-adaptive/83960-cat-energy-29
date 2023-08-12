let btn = document.querySelector('.header__toggle');
let menu = document.querySelector('.main-nav');
btn.onclick = function () {
  menu.classList.toggle('main-nav--on');
  btn.classList.toggle('header__toggle--on');
}
