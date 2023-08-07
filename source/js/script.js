let btn = document.querySelector('.main-nav__toggle');
let menu = document.querySelector('.main-nav__list');
menuVisible = false
btn.onclick = function () {
  if (menuVisible) {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'flex'
  }
  menuVisible = !menuVisible;
  btn.classList.toggle('main-nav__toggle--on');
}
