document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('darkModeCheckbox');
    const logo = document.getElementById('logo');
    const footerLogo = document.getElementById('footer-logo');

    toggleCheckbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');

        logo.src = isDark
            ? './images/logo/dark/dark.png'
            : './images/logo/light/light.png';

        // Footer logo is always inverted via CSS filter so no swap needed,
        // but if you have a specific footer variant you can swap here too.
    });
});
