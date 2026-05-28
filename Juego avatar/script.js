// Base de datos de items profesionales (Rutas de tus imágenes reales)
const itemsJuego = {
    rostro: [
        { preview: 'assets/rostro1.png', capaRostro: 'assets/rostro1.png' },
        { preview: 'assets/rostro2.png', capaRostro: 'assets/rostro2.png' }
    ],
    cabello: [
        { preview: 'assets/pelo1_alante.png', atras: 'assets/pelo1_atras.png', alante: 'assets/pelo1_alante.png' },
        { preview: 'assets/pelo2_alante.png', atras: 'assets/pelo2_atras.png', alante: 'assets/pelo2_alante.png' }
    ],
    ropa: [
        { preview: 'assets/ropa1.png', capaRopa: 'assets/ropa1.png' },
        { preview: 'assets/ropa2.png', capaRope: 'assets/ropa2.png' } // Reemplaza con tus archivos reales
    ]
};

// Captura de capas del HTML
const imgPeloAtras = document.getElementById('capa-pelo-atras');
const imgPeloAlante = document.getElementById('capa-pelo-alante');
const imgRostro = document.getElementById('capa-rostro');
const imgRopa = document.getElementById('capa-ropa');

const menuArmario = document.getElementById('armario-opciones');
const sliderColor = document.getElementById('color-pelo');

let categoriaActual = 'rostro';

// Cargar los cuadritos en el Armario según la pestaña
function actualizarArmario() {
    menuArmario.innerHTML = '';
    const listaItems = itemsJuego[categoriaActual];

    listaItems.forEach((item) => {
        const cuadrito = document.createElement('div');
        cuadrito.className = 'cuadrito-item';

        const miniatura = document.createElement('img');
        miniatura.src = item.preview;
        cuadrito.appendChild(miniatura);

        // Al tocar un artículo, se aplican los cambios a las capas correspondientes
        cuadrito.addEventListener('click', () => {
            if (categoriaActual === 'rostro') {
                imgRostro.src = item.capaRostro;
            } else if (categoriaActual === 'ropa') {
                imgRopa.src = item.capaRopa;
            } else if (categoriaActual === 'cabello') {
                // El pelo cambia el bloque de atrás y el de adelante a la vez
                imgPeloAtras.src = item.atras;
                imgPeloAlante.src = item.alante;
            }
        });

        menuArmario.appendChild(cuadrito);
    });
}

// Configuración de los botones de pestañas
const tabs = {
    rostro: document.getElementById('tab-rostro'),
    cabello: document.getElementById('tab-cabello'),
    ropa: document.getElementById('tab-ropa')
};

Object.keys(tabs).forEach(cat => {
    tabs[cat].addEventListener('click', () => {
        // Quitar estado activo a todas las pestañas
        Object.values(tabs).forEach(t => t.classList.remove('active'));
        // Activar la pestaña seleccionada
        tabs[cat].classList.add('active');
        categoriaActual = cat;
        actualizarArmario();
    });
});

// Controlar el cambio de color del cabello (Afecta ambas capas de pelo simultáneamente)
sliderColor.addEventListener('input', (e) => {
    const hueValue = e.target.value;
    const filtroCss = `hue-rotate(${hueValue}deg) saturate(1.4) brightness(1.1)`;
    imgPeloAtras.style.filter = filtroCss;
    imgPeloAlante.style.filter = filtroCss;
});

// Inicializar juego al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarArmario();
    
    document.getElementById('btn-guardar').addEventListener('click', () => {
        alert('¡Tu Avatar Anime ha sido guardado en tu galería! 💖');
    });
});
