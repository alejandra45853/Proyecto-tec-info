document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const infographicItems = document.querySelectorAll('.infographic-item');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Eliminar la clase 'active' de todos los botones y elementos
            navButtons.forEach(btn => btn.classList.remove('active'));
            infographicItems.forEach(item => item.classList.remove('active'));

            // Añadir la clase 'active' al botón clickeado
            button.classList.add('active');

            // Obtener el ID del contenido a mostrar
            const targetId = button.dataset.target;
            const targetItem = document.getElementById(targetId);

            // Añadir la clase 'active' al elemento de infografía correspondiente
            if (targetItem) {
                targetItem.classList.add('active');
            }
        });
    });

    // Activar el primer elemento por defecto al cargar la página
    if (navButtons.length > 0) {
        navButtons[0].click(); // Simula un clic en el primer botón
    }
});
