// js/dibujar.js
export function dibujarRecetas(recetas, contenedor) {
    contenedor.innerHTML = '';

    if (recetas.length === 0) {
        dibujarMensaje('No se encontraron recetas con ese criterio.', contenedor);
        return;
    }

    recetas.forEach((receta) => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <img src="${receta.imagen}" alt="${receta.altImagen}" loading="lazy">
            <div class="tarjeta-info">
                <h2>${receta.titulo}</h2>
                <span class="campo-cocina">${receta.campoCocina}</span>
                <span class="campo-detalle">${receta.campoDetalle}</span>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

export function dibujarMensaje(texto, contenedor) {
    contenedor.innerHTML = `<div class="mensaje">${texto}</div>`;
}


export function dibujarErrorConReintento(contenedor, mensajeError) {
    console.error('Detalle del error:', mensajeError);
    
    contenedor.innerHTML = `
        <div class="contenedor-error">
            <p class="texto-error">
                <span class="icono-error">⚠️</span>
                <span class="linea-principal">Error al cargar las recetas.</span>
                <span class="linea-secundaria">Inténtalo de nuevo más tarde.</span>
            </p>
            <button id="btn-reintentar" class="boton-reintentar">Volver a intentar</button>
        </div>
    `;
}