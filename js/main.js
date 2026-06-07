document.addEventListener('DOMContentLoaded', () => {
    // Live EAT Clock (UTC+3)
    const updateClock = () => {
        const clockElement = document.getElementById('eat-clock');
        if (clockElement) {
            const now = new Date();
            const eatTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (3 * 3600000));
            const hours = String(eatTime.getHours()).padStart(2, '0');
            const minutes = String(eatTime.getMinutes()).padStart(2, '0');
            const seconds = String(eatTime.getSeconds()).padStart(2, '0');
            clockElement.textContent = `${hours}:${minutes}:${seconds} EAT`;
        }
    };

    setInterval(updateClock, 1000);
    updateClock();

    // Navigation Active State Highlight
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
