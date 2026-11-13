// js/app.js
import { traerRecetas } from './pedirDatos.js';
import { dibujarRecetas, dibujarMensaje, dibujarErrorConReintento } from './dibujar.js';

const contenedorGaleria = document.getElementById('galeria');
const buscador = document.getElementById('buscador');

// Guardamos la última consulta para que el botón "Reintentar" sefunda exactamente en lo que estaba buscando
let ultimaConsulta = '';

async function buscarRecetas(consulta = '') {
    ultimaConsulta = consulta;
    dibujarMensaje('Cargando recetas... 🍳', contenedorGaleria);
    
    try {
        const recetas = await traerRecetas(consulta);
        dibujarRecetas(recetas, contenedorGaleria);
    } catch (error) {
        // Usamos la nueva función con botón y texto grande
        dibujarErrorConReintento(contenedorGaleria, error.message);
        
        // Asociamos el evento al botón recién creado en el DOM
        const btnReintentar = document.getElementById('btn-reintentar');
        if (btnReintentar) {
            btnReintentar.addEventListener('click', () => {
                buscarRecetas(ultimaConsulta);
            });
        }
    }
}

// Buscador en tiempo real con debounce
let temporizador;
buscador.addEventListener('input', (e) => {
    clearTimeout(temporizador);
    const consulta = e.target.value.trim();
    
    temporizador = setTimeout(() => {
        buscarRecetas(consulta);
    }, 300);
});

// Carga inicial al abrir la página
buscarRecetas();