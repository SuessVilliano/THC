function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';

    if (currentTheme === 'dark') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        document.querySelector('.toggle-theme').textContent = '🌞';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        document.querySelector('.toggle-theme').textContent = '🌙';
    }
}

// Optional: Save the user's theme preference in local storage
function saveThemePreference(theme) {
    localStorage.setItem('preferredTheme', theme);
}

function applySavedThemePreference() {
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(savedTheme);
        document.querySelector('.toggle-theme').textContent = savedTheme === 'dark-theme' ? '🌙' : '🌞';
    }
}

// Initialize the theme on page load
document.addEventListener('DOMContentLoaded', () => {
    applySavedThemePreference();

    document.querySelector('.toggle-theme').addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        toggleTheme();
        saveThemePreference(currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    });
});
