const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeIcon.textContent = document.body.classList.contains('light-theme') ? '🌙' : '🌞';
});
