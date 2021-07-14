// Show Menu
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId);
	const nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show');
		});
	}
};

showMenu('nav-toggle', 'nav_menu');

//Active and Remove

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
	// Active link
	navLink.forEach((n) => n.classList.remove('active'));
	this.classList.add('active');

	// Remove menu mobile
	const navMenu = document.getElementById('nav_menu');
	navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
