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

    // Terminal Command Log (Activity Feed)
    const activityLog = document.getElementById('activity-log');
    if (activityLog) {
        const commands = [
            { cmd: 'git push origin main --force-with-lease', time: '2025-06-07 14:32:17' },
            { cmd: 'npm run test -- --coverage', time: '2025-06-07 09:15:42' },
            { cmd: 'curl https://api.edwinkimemia.com/health', time: '2025-06-07 08:03:11' },
            { cmd: 'code blog-post-3.md', time: '2025-06-06 22:47:03' },
            { cmd: 'docker-compose up --build', time: '2025-06-06 16:20:55' },
            { cmd: 'ssh production-server', time: '2025-06-06 14:10:22' },
            { cmd: 'psql -d invoice_kenya -c "SELECT count(*) FROM users;"', time: '2025-06-06 11:45:01' }
        ];

        commands.forEach(entry => {
            const row = document.createElement('div');
            row.className = 'log-entry';
            row.innerHTML = `<span class="log-timestamp">[${entry.time}]</span> <span class="prompt">edwin@web:~$</span> <span class="log-command">${entry.cmd}</span>`;
            activityLog.appendChild(row);
        });

        // Auto-scroll to bottom
        activityLog.scrollTop = activityLog.scrollHeight;
    }
});
