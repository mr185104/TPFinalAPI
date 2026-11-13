// de la API solo selecciono los datos que me interesan y armo un constructor con estos.
export default class Receta {
    constructor(datos) {
        this.imagen = datos.image;
        this.titulo = datos.name || 'Receta sin nombre';
        this.campoCocina = datos.cuisine || 'Internacional';
        this.campoDetalle = `${datos.difficulty} · Prep: ${datos.prepTimeMinutes} min · ⭐ ${datos.rating}`;

        // Propiedad extra para un alt descriptivo y accesible
        const tipoComida = Array.isArray(datos.mealType) && datos.mealType.length > 0
            ? ` (${datos.mealType.join(', ')})`
            : '';
        this.altImagen = `${this.titulo}, plato de cocina ${this.campoCocina}${tipoComida}`;
    }
}