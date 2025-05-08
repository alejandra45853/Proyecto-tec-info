document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.grid-galeria img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            // Al hacer clic, puedes realizar alguna acción, como mostrar la imagen en un modal
            alert(`¡Hiciste clic en: ${this.alt}!`);
            // Aquí podrías agregar la lógica para un lightbox o mostrar más información
        });
    });
});