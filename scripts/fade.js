// Add scroll event listener
window.addEventListener("scroll", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    fadeInElements.forEach(function (element) {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Ajustar la posición de aparición

        if (position < screenPosition) {
            element.classList.add("visible"); // Añadir clase visible cuando el elemento esté en el viewport
        }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fadeInElements.forEach(function (element) {
            if (!element.classList.contains("visible")) {
                element.classList.add("visible");
            }
        });
    }
});

// Trigger scroll event on load to capture elements already in view
window.dispatchEvent(new Event("scroll"));
