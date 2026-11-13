import Receta from './Receta.js';

const URL_API = 'https://dummyjson.com/recipes';

export async function traerRecetas(consulta = '') {
    const endpoint = consulta 
        ? `${URL_API}/search?q=${consulta}&limit=12` 
        : `${URL_API}?limit=12`;

    const respuesta = await fetch(endpoint);
    if (!respuesta.ok) throw new Error('Error al conectar con la API: ' + respuesta.status);
    
    const datos = await respuesta.json();
    const recetasRaw = datos.recipes || [];

    // Instancia la clase Receta para cada elemento recibido
    return recetasRaw.map((dato) => new Receta(dato));
}