
// Añadir el evento de click para cada enlace correspondiente a cada producto del catalogo
document.addEventListener("DOMContentLoaded", function() {
    const productoLinks = document.querySelectorAll(".productos__producto--link");

    productoLinks.forEach(link => {
        link.addEventListener("click", () => {
            const enlace = link.getAttribute("data-link");
            if (enlace) {
                window.location.href = enlace;
            }
        });
    });
});


