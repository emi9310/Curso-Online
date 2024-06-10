function toggleMenu() {
    var sidebar = document.querySelector('.sidebar');
    var overlay = document.querySelector('.overlay');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
        overlay.style.display = 'block';
    }
}

// Close the sidebar if the window is resized to be wider than 768px
window.addEventListener('resize', function() {
    var sidebar = document.querySelector('.sidebar');
    var overlay = document.querySelector('.overlay');
    if (window.innerWidth > 768) {
        sidebar.style.display = 'none';
        overlay.style.display = 'none';
    }
});
