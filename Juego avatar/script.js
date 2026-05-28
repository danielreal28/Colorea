// 1. CONFIGURACIÓN DE LAS RUTAS CON EXTENSIÓN .SVG
const opcionesCabello = [
    'assets/pelo1.svg',
    'assets/pelo2.svg',
    'assets/pelo3.svg'
];

const opcionesRopa = [
    'assets/ropa1.svg',
    'assets/ropa2.svg',
    'assets/ropa3.svg'
];

// 2. OBTENER LOS ELEMENTOS DE LA PANTALLA (HTML)
const capaCabello = document.getElementById('capa-cabello');
const capaRopa = document.getElementById('capa-ropa');
const sliderColor = document.getElementById('color-pelo');
const btnTabCabello = document.getElementById('tab-cabello');
const btnTabRopa = document.getElementById('tab-ropa');
const contenedorOpciones = document.getElementById('contenedor-opciones');
const btnGuardar = document.getElementById('btn-guardar');

// Estado actual del avatar
let pestañaActual = 'cabello'; 

// 3. FUNCIÓN PARA PINTAR LOS CUADRITOS DEL ARMARIO
function cargarArmario() {
    contenedorOpciones.innerHTML = ''; // Limpiar armario
    
    const prendas = pestañaActual === 'cabello' ? opcionesCabello : opcionesRopa;
    
    prendas.forEach((rutaSvg, indice) => {
        // Crear la tarjeta o cuadrito
        const cuadrito = document.createElement('div');
        cuadrito.className = 'cuadrito-armario';
        
        // Crear la miniatura de la prenda
        const img = document.createElement('img');
        img.src = rutaSvg;
        img.alt = 'Vestir';
        
        // Evento al tocar el cuadrito (funciona con clic y touch en móvil)
        cuadrito.addEventListener('click', () => {
            if (pestañaActual === 'cabello') {
                capaCabello.src = rutaSvg;
                capaCabello.style.display = 'block';
            } else {
                capaRopa.src = rutaSvg;
                capaRopa.style.display = 'block';
            }
        });
        
        cuadrito.appendChild(img);
        contenedorOpciones.appendChild(cuadrito);
    });
}

// 4. CAMBIO DE PESTAÑAS (TABS)
btnTabCabello.addEventListener('click', () => {
    pestañaActual = 'cabello';
    btnTabCabello.classList.add('active');
    btnTabRopa.classList.remove('active');
    cargarArmario();
});

btnTabRopa.addEventListener('click', () => {
    pestañaActual = 'ropa';
    btnTabRopa.classList.add('active');
    btnTabCabello.classList.remove('active');
    cargarArmario();
});

// 5. CONTROLADOR DEL COLOR DE PELO (Usa rotación de matiz HUE)
sliderColor.addEventListener('input', (e) => {
    const valor = e.target.value;
    // Aplica un filtro CSS para cambiar el color del SVG dinámicamente
    capaCabello.style.filter = `hue-rotate(${valor}deg) saturate(1.5)`;
});

// 6. BOTÓN GUARDAR MUÑEQUITA
btnGuardar.addEventListener('click', () => {
    alert('¡Tu muñequita ha sido guardada con éxito! ✨');
});

// 7. INICIALIZAR EL JUEGO AL CARGAR LA PANTALLA
document.addEventListener('DOMContentLoaded', () => {
    cargarArmario();
});
