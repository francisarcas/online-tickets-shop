(function () {
    const header = document.getElementById('stickyHeader');
    if (!header) return;

    const THRESHOLD = 10;

    function onScroll() {
        if (window.scrollY > THRESHOLD) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
