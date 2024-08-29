document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.querySelector('.sun-icon').style.display = document.body.classList.contains('light-mode') ? 'none' : 'block';
    document.querySelector('.moon-icon').style.display = document.body.classList.contains('light-mode') ? 'block' : 'none';
});
