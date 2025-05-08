let slideIndex = 0;
const slides = document.querySelectorAll('.carrusel-slide');
const totalSlides = slides.length;

function mostrarSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex = (n + totalSlides) % totalSlides;
    slides[slideIndex].style.display = 'block';
}

function cambiarSlide(direccion) {
    mostrarSlide(slideIndex + direccion);
}