
// burger menu start
const menuBurger = document.querySelector('.btn-menu');
const headerPageNav = document.querySelector('.header-page__nav');
const headerPage = document.querySelector('.header-page');
const body = document.querySelector('body');
menuBurger.addEventListener('click', (e) => {
	menuBurger.classList.toggle('is-active');
	headerPageNav.classList.toggle('is-active');
	headerPage.classList.toggle('is-active');
	body.classList.toggle('hide');
});
// burger menu end