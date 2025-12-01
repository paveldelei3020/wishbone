const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const themeText = themeToggle.querySelector('.theme-text');

const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateButtonText(currentTheme);

function updateButtonText(theme) {
    if (theme === 'dark') {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Светлая тема';
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Темная тема';
    }
}

function toggleTheme() {
    themeToggle.classList.add('changing');
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    
    localStorage.setItem('theme', newTheme);

    updateButtonText(newTheme);

    setTimeout(() => {
        themeToggle.classList.remove('changing');
    }, 500);
}

themeToggle.addEventListener('click', toggleTheme);

