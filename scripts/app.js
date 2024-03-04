// Buat memberikan class active ketika menu di klik
const wrapperMenu = document.getElementById('menus');
const menus = document.querySelectorAll('#menus li a');
menus.forEach((menu) => {
	menu.addEventListener('click', () => {
		menus.forEach((menuNonActive) => menuNonActive.classList.remove('active'));

		menu.classList.add('active');
	});
});

// Buat show/hide daftar menu ketika ukuran mobile
const checkbox = document.getElementById('hamburger-menu');
window.addEventListener('click', ({ target }) => {
	if (target.id === checkbox.id && checkbox.checked) {
		checkbox.checked = true;
		wrapperMenu.classList.remove('hidden');
	} else {
		checkbox.checked = false;
		wrapperMenu.classList.add('hidden');
	}
});

// Ketika di scroll menu nya dikasih background
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
	if (window.scrollY > 10) {
		header.classList.add('bg-slate-900');
	} else {
		header.classList.remove('bg-slate-900');
	}
});
