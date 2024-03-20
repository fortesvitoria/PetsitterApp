function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Optional: Close menu when clicking outside of it
document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var burger = document.querySelector('.burger-menu');
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        menu.style.display = 'none';
    }
});