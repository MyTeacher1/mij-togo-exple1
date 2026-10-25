document.addEventListener("DOMContentLoaded", function () {

    // 1. CARROUSEL D'IMAGES DE FOND (Rotation des 4 images)
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    if (slides.length > 0) {
        function nextSlide() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }
        // Change d'image toutes les 5 secondes
        setInterval(nextSlide, 5000);
    }

    // 2. MENU MOBILE BURGER
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("actif");
        });
    }
});
// BOUTON RETOUR EN HAUT (Back to Top)
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
    // Affiche le bouton quand on défile vers le bas de 300px
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Action de défilement fluide vers le haut lors du clic
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Carrousel de la Galerie Photo
    const galleryTrack = document.getElementById('galleryTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (galleryTrack && prevBtn && nextBtn) {
        // Défilement vers la gauche
        prevBtn.addEventListener('click', () => {
            galleryTrack.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        // Défilement vers la droite
        nextBtn.addEventListener('click', () => {
            galleryTrack.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }
});

