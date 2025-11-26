document.addEventListener('DOMContentLoaded', () => {
    console.log('Snow White Book Store website loaded!');
    
    // Fade-in animation for page content
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Animate navigation links with hover effects
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.style.transition = 'all 0.3s ease';
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)';
            link.style.textDecoration = 'underline';
            link.style.color = '#d4af37'; // Gold color
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
            link.style.textDecoration = 'none';
        });
    });
    
    // Highlight the active navigation link (Home)
    const homeLink = document.querySelector('.main-nav ul li a[href="#"]');
    if(homeLink) {
        homeLink.style.textDecoration = 'underline';
        homeLink.style.animation = 'pulse 2s infinite';
    }
});