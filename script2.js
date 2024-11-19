window.onload = function() {
    setTimeout(function() {
        // Seleccionamos el contenedor de la imagen
        const imageContainer = document.querySelector('.image-container');

        // Verificamos que el contenedor exista antes de hacer cambios
        if (imageContainer) {
            // Cambiamos el display para hacerlo visible
            imageContainer.style.display = 'block';

            // Agregamos un pequeño retraso antes de cambiar la opacidad
            setTimeout(function() {
                imageContainer.style.opacity = 1;
            }, 10);  // Muy pequeño retraso para asegurar que la opacidad se ejecute después
        }
    }, 5000);  // Espera 5 segundos antes de mostrar la imagen
};

