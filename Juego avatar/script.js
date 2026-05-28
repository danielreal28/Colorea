// 1. CAMBIAR LA PRENDA O EL CABELLO EN EL PROBADOR
function changeItem(layerId, imagePath) {
    const layer = document.getElementById(layerId);
    
    // Si la capa estaba vacía, la hacemos visible
    if (layer.style.display === 'none' || !layer.src) {
        layer.style.display = 'block';
    }
    
    layer.src = imagePath;
}

// 2. CAMBIAR ENTRE PESTAÑAS DEL ARMARIO (Cabello, Ropa, etc.)
function switchTab(tabName) {
    // Ocultar todos los paneles de opciones
    document.querySelectorAll('.options-container').forEach(panel => {
        panel.classList.remove('active-panel');
    });
    
    // Quitar el estado activo de todos los botones de pestañas
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar el panel seleccionado y activar su botón correspondiente
    document.getElementById(`panel-${tabName}`).classList.add('active-panel');
    event.currentTarget.classList.add('active');
}

// 3. CAMBIAR EL COLOR DEL PELO EN TIEMPO REAL (Filtro CSS)
document.getElementById('hair-color').addEventListener('input', (e) => {
    const value = e.target.value;
    const hairLayer = document.getElementById('layer-hair');
    
    // Aplicamos una rotación de matiz (hue-rotate) para cambiar el color dinámicamente
    hairLayer.style.filter = `hue-rotate(${value}deg)`;
});

// 4. GUARDAR LA MUÑEQUITA COMO IMAGEN PNG EN EL CELULAR
function saveAvatar() {
    const container = document.getElementById('avatar-preview');
    
    // Desactivamos temporalmente transiciones para evitar capturas borrosas
    html2canvas(container, { 
        useCORS: true,           // Permite cargar imágenes si usas enlaces externos
        backgroundColor: null    // Mantiene el fondo limpio o transparente si se desea
    }).then(canvas => {
        // Creamos un enlace de descarga invisible
        let link = document.createElement('a');
        link.download = 'mi-muñequita.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}