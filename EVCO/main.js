// This function is used to toggle the visibility of the menu
function toggleMenu() {
    // Get the menu container element by its ID
    var menuContainer = document.getElementById('menu-container');
    // Get the first element in the document with class="menu"
    var menu = document.querySelector('.menu');
    // Check if the menu container is not currently displayed
    if (menuContainer.style.display !== "block") {
        // If it's not displayed, set it to display
        menuContainer.style.display = "block";
        // And also set the menu to display
        menu.style.display = "flex";
    } else {
        // If it's already displayed, hide it
        menuContainer.style.display = "none";
        // And also hide the menu
        menu.style.display = "none";
    }
}

// This function is used to open a modal and display an image
function openModal(element) {
    // Get the modal element by its ID
    var modal = document.getElementById("myModal");
    // Get the modal image element by its ID
    var modalImg = document.getElementById("modalImg");
    // Display the modal
    modal.style.display = "block";
    // Set the source of the modal image to the href of the clicked element
    modalImg.src = element.href;
}

// This function is used to close the modal
function closeModal() {
    // Get the modal element by its ID
    var modal = document.getElementById("myModal");
    // Hide the modal
    modal.style.display = "none";
}

// This function is used to add a 'visible' class to elements with class 'fade-in' when they enter the viewport
window.addEventListener('scroll', function() {
    // For each element with class 'fade-in'
    document.querySelectorAll('.fade-in').forEach(function(elem) {
        // If the element is in the viewport
        if (elem.getBoundingClientRect().top < window.innerHeight) {
            // Add the 'visible' class to the element
            elem.classList.add('visible');
        }
    });
});