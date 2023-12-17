// toggle theme
const themeBtn = document.getElementById('themeBtn');

function toggleTheme() {
    const rootElement = document.documentElement;

    if (rootElement.classList.contains('dark')) {
        rootElement.classList.remove('dark');
        themeBtn.textContent = 'dark_mode';
    } else {
        rootElement.classList.add('dark');
        themeBtn.textContent = 'light_mode';
    }
}

themeBtn.addEventListener('click', toggleTheme);

// toggle side menu 
const sideMenuBtn = document.getElementById('sideMenuBtn');
const sideMenu = document.querySelector('.side-menu');
const searchBtn = document.querySelector('#searchBtn');

let isSideMenuOpen = false;

function toggleSideMenu() {

    if (sideMenu.style.display === 'flex') {
        sideMenu.style.display = 'none';
        sideMenuBtn.textContent = 'menu';
        isSideMenuOpen = false;
    } else {
        sideMenu.style.display = 'flex';
        sideMenuBtn.textContent = 'close';
        isSideMenuOpen = true;
    }
}

sideMenuBtn.addEventListener('click', toggleSideMenu);
searchBtn.addEventListener('click', toggleSideMenu);

window.addEventListener('resize', function() {

    if (window.innerWidth > 1025) {
        sideMenu.style.display = 'flex';
    } else if (isSideMenuOpen === false && window.innerWidth < 1025) {
        sideMenu.style.display = 'none';
    }
});