// Mapeo de las caritas disponibles en la hoja de Leonardo
const itemsJuego = {
    rostro: [
        { claseCss: 'carita-1', imagenGrande: './assets/avatar_sheet.jpg', posX: '0%', posY: '0%' },
        { claseCss: 'carita-2', imagenGrande: './assets/avatar_sheet.jpg', posX: '10%', posY: '0%' },
        { claseCss: 'carita-3', imagenGrande: './assets/avatar_sheet.jpg', posX: '20%', posY: '0%' },
        { claseCss: 'carita-4', imagenGrande: './assets/avatar_sheet.jpg', posX: '30%', posY: '0%' }
    ],
    cabello: [
        { claseCss: 'carita-5', imagenGrande: './assets/avatar_sheet.jpg', posX: '0%', posY: '77.7%' },
        { claseCss: 'carita-6', imagenGrande: './assets/avatar_sheet.jpg', posX: '10%', posY: '77.7%' }
    ],
    ropa: [
        { claseCss: 'carita-7', imagenGrande: './assets/avatar_sheet.jpg', posX: '40%', posY: '88.8%' }
    ]
};

const imgCuerpo = document.getElementById('capa-cuerpo');
const menuArmario = document.getElementById('armario-opciones');
let categoriaActual = 'rostro';

function actualizarArmario() {
    menuArmario.innerHTML = '';
    const listaItems = itemsJuego[categoriaActual];

    listaItems.forEach((item) => {
        const cuadrito = document.createElement('div');
        // Le asignamos la clase base y la clase de la posición del recorte
        cuadrito.className = `cuadrito-item ${item.claseCss}`;

        // Al hacer clic, la pantalla principal enfoca o carga ese estilo
        cuadrito.addEventListener('click', () => {
            imgCuerpo.src = item.imagenGrande;
            imgCuerpo.style.objectPosition = `${item.posX} ${item.posY}`;
            imgCuerpo.style.transform = 'scale(2.5)'; // Hace zoom en la carita seleccionada
        });

        menuArmario.appendChild(cuadrito);
    });
}

// Configuración de las pestañas
const tabs = {
    rostro: document.getElementById('tab-rostro'),
    cabello: document.getElementById('tab-cabello'),
    ropa: document.getElementById('tab-ropa')
};

Object.keys(tabs).forEach(cat => {
    tabs[cat].addEventListener('click', () => {
        Object.values(tabs).forEach(t => t.classList.remove('active'));
        tabs[cat].classList.add('active');
        categoriaActual = cat;
        actualizarArmario();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Configurar la vista previa inicial con la hoja completa sin fallos de ruta 404
    imgCuerpo.src = './assets/avatar_sheet.jpg';
    imgCuerpo.style.objectFit = 'none';
    imgCuerpo.style.objectPosition = '0% 0%';
    imgCuerpo.style.transform = 'scale(2.5)';
    
    actualizarArmario();

    document.getElementById('btn-guardar').addEventListener('click', () => {
        alert('¡Tu Avatar seleccionado ha sido guardado! 💖');
    });
});
