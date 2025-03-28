document.addEventListener("DOMContentLoaded", function () {
    const mascot = document.querySelector('.mascot');
    if (mascot) {
        mascot.style.transition = 'transform 0.5s';
        mascot.addEventListener('mouseover', function () {
            mascot.style.transform = 'translateY(-10px)';
        });
        mascot.addEventListener('mouseout', function () {
            mascot.style.transform = 'translateY(0)';
        });
    }
});
