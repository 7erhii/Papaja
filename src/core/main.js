const menuToggle = document.getElementById('menu__toggle');
const genersBtn = document.getElementById('js-geners');
const aside = document.querySelector('.aside');
const genersList = document.querySelector('.header__content-list');
const burger = document.querySelector('.header__aside-vis');
const genersClose = document.querySelector('.header__geners-close');

menuToggle.addEventListener('click', function () {
	if (menuToggle.checked) {
		console.log(23);
		aside.style.display = 'block';
		aside.style.position = 'absolute';
	} else {
		console.log(30);
		aside.style.display = 'none';
	}
});

genersBtn.addEventListener('click', function () {
	console.log(22);
	genersList.style.display = 'block';
	genersBtn.style.display = 'none';
	burger.style.display = 'none';
	genersClose.style.display = 'block';
});
