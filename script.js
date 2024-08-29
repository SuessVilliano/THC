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
