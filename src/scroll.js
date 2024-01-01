// When one of the nav bar links is clicked, page will scroll down to
// the desired section.
function scrollToSection() {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            document.querySelector(event.target.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}