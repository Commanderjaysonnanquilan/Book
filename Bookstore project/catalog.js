document.addEventListener('DOMContentLoaded', () => {
    
    // Select all "Add to Cart" buttons
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');

    cartButtons.forEach(button => {
        button.style.transition = 'all 0.3s ease';
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.4)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = 'none';
        });
        
        button.addEventListener('click', (event) => {
            const bookItem = event.target.closest('.book-item');
            const bookTitle = bookItem.querySelector('.book-title').textContent;
            
            // Animate button on click
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
            
            // Simple notification/console log for the cart action
            console.log(`Added "${bookTitle}" to the cart!`);
            
            // Show animated success message instead of alert
            showNotification(`"${bookTitle}" added to cart!`);

            // You would add logic here to update a cart count or session storage
        });
    });
    
    // Animated notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #d4af37;
            color: #000;
            padding: 15px 20px;
            border-radius: 5px;
            animation: slideIn 0.4s ease, slideOut 0.4s ease 2.6s forwards;
            z-index: 1000;
            font-weight: bold;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.remove(), 3000);
    }
});

// Add to your CSS:
/* @keyframes slideIn {
    from {
        transform: translateX(400px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(400px);
        opacity: 0;
    }
} */