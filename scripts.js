document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
});
