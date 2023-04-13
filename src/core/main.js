const menuToggle = document.getElementById('menu__toggle');
const genersBtn = document.getElementById('js-geners');
const aside = document.querySelector('.aside');
const genersList = document.querySelector('.header__content-list');
const burger = document.querySelector('.header__aside-vis');
const genersClose = document.querySelector('.header__geners-close');
const logo = document.querySelector('.name__logo');
const header = document.querySelector('.header');
const nameLogo = document.querySelector('.name');
//----------------------------------------------------------------
const cards = document.querySelector('.cards__content');

menuToggle.addEventListener('click', function () {
	if (menuToggle.checked) {
		// aside.style.display = 'block';
		aside.style.position = 'absolute';
		aside.classList.add('js-show-aside');
	}
	if (!menuToggle.checked) {
		// aside.style.display = 'none';
		aside.style.position = 'inherit';
		aside.classList.remove('js-show-aside');
	}
});

genersBtn.addEventListener('click', function () {
	genersList.style.display = 'block';
	genersBtn.style.display = 'none';
	burger.style.display = 'none';
	genersClose.style.display = 'block';
});

genersClose.addEventListener('click', function () {
	genersList.style.display = 'none';
	genersBtn.style.display = 'block';
	burger.style.display = 'block';
	genersClose.style.display = 'none';
});
