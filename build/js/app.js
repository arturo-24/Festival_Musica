document.addEventListener('DOMContentLoaded', function() {  
    crearGaleria();
})

function crearGaleria() {
    const CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen de Galeria'
        
        
        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i);

        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen de Galeria'

    // Generar Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    modal.appendChild(imagen);

    modal


    //agregar al html

    const body = document.querySelector('body');
    body.appendChild(modal);

    console.log(modal);
}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    
    modal?.remove();  // Esto ahce que resumen un "if" con el "???"
}
