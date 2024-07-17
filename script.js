// Smooth scroll for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function sendMessage() {
    window.location.href = 'mailto:your-email@example.com';
    // Alternatively, you can use the following line to make a phone call:
    // window.location.href = 'tel:+1234567890';
}
