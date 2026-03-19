document.addEventListener('DOMContentLoaded', () => {
    // Highlight active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#nav .nav-link').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Smooth scrolling for in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const id = anchor.getAttribute('href').substring(1);
            const target = document.getElementById(id);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
            }
        });
    });

    // Copy code button
    document.querySelectorAll('.code-box-header').forEach(header => {
        const btn = document.createElement('button');
        btn.textContent = 'Copy';
        btn.style.cssText = 'float:right;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);color:#9a9aa2;padding:0.2rem 0.6rem;border-radius:4px;font-size:0.72rem;cursor:pointer;';
        btn.addEventListener('click', () => {
            const code = header.parentElement.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    btn.textContent = 'Copied!';
                    setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
                });
            }
        });
        header.appendChild(btn);
    });
});
