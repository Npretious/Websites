function toggleMenu() {
    var menuContainer = document.getElementById('menu-container');
    var menu = document.querySelector('.menu');
    if (menuContainer.style.display !== "block") {
        menuContainer.style.display = "block";
        menu.style.display = "flex";
    } else {
        menuContainer.style.display = "none";
        menu.style.display = "none";
    }
}

function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = element.href;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.addEventListener('scroll', function() {
    document.querySelectorAll('.fade-in').forEach(function(elem) {
    if (elem.getBoundingClientRect().top < window.innerHeight) {
        elem.classList.add('visible');
    }
    });
});