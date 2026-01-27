// Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('darkModeCheckbox');
    const logo = document.getElementById('logo');

    toggleCheckbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            logo.src = './images/logo/dark/dark.png';
        } else {
            logo.src = './images/logo/light/light.png';
        }
    });
});
