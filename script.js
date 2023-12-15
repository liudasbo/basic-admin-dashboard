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
