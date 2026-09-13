document.addEventListener('DOMContentLoaded', function () {
    // Datos de la galería: 6 obras reales de Rafael Lozano-Hemmer.
    // La galería se arma acá (con JS), no está escrita a mano en el HTML.
    const obras = [
        { imagen: 'img/lozano-hemmer-1.jpg', nombre: 'Vicious Circular Breathing', anio: 2013 },
        { imagen: 'img/lozano-hemmer-2.jpg', nombre: 'Sphere Packing: Johann Sebastian Bach', anio: 2019 },
        { imagen: 'img/lozano-hemmer-4.jpg', nombre: 'Body Movies', anio: 2001 },
        { imagen: 'img/lozano-hemmer-5.jpg', nombre: 'Pulse Room', anio: 2006 },
        { imagen: 'img/lozano-hemmer-6.jpg', nombre: 'Recorder', anio: 2011 },
        { imagen: 'img/lozano-hemmer-7.jpg', nombre: '33 Questions per Minute', anio: 2000 },
        { imagen: 'img/lozano-hemmer-8.jpg', nombre: 'Please Empty Your Pockets', anio: 2010 },
        { imagen: 'img/lozano-hemmer-9.jpg', nombre: 'Vectorial Elevation', anio: 1999 }
    ];

    let indiceActual = 0;

    const carrusel = document.querySelector('#carrusel-obras');
    const imagen = document.querySelector('#carrusel-imagen');
    const nombre = document.querySelector('#carrusel-nombre');
    const anio = document.querySelector('#carrusel-anio');
    const contador = document.querySelector('#carrusel-contador');
    const btnAnterior = document.querySelector('#obra-anterior');
    const btnSiguiente = document.querySelector('#obra-siguiente');
    const btnCambiarDiseno = document.querySelector('#btn-cambiar-diseno');

    // Pinta en pantalla la obra que corresponde al índice recibido.
    function mostrarObra(indice) {
        const obra = obras[indice];
        imagen.src = obra.imagen;
        imagen.alt = `Fotografía de la instalación ${obra.nombre}`;
        nombre.textContent = obra.nombre;
        anio.textContent = obra.anio;
        contador.textContent = `${indice + 1} / ${obras.length}`;
    }

    btnAnterior.addEventListener('click', function () {
        // el % (obras.length) hace que de la primera obra vuelva a la última
        indiceActual = (indiceActual - 1 + obras.length) % obras.length;
        mostrarObra(indiceActual);
    });

    btnSiguiente.addEventListener('click', function () {
        indiceActual = (indiceActual + 1) % obras.length;
        mostrarObra(indiceActual);
    });

    // Funcionalidad de cambio de diseño: alterna el tamaño de la imagen
    // y el color del año agregando/sacando una clase (la coreografía visual
    // vive en el CSS, acá solo se prende o apaga el interruptor).
    btnCambiarDiseno.addEventListener('click', function () {
        carrusel.classList.toggle('carrusel-obras--compacta');
    });

    mostrarObra(indiceActual);
});
