class Hamburguesa {
    constructor(nombre, ingrediente, precio){
        this.nombre = nombre
        this.ingrediente = ingrediente
        this.precio = precio
    }
}

const Hamburguesa_clásica = new Hamburguesa("Hamburguesa Clásica","Medallón de Carne, Salchicha, Queso Amarillo, Jamón, Lechuga, Tomate, Cebolla y Chile.", 55);
const Hamburguesa_Hawaiana = new Hamburguesa("Hamburguesa Hawaiana", "Medallón de Carne, Salchicha, Queso Manchego, Queso Amarillo, Tocino, Jamón, Lechuga, Tomate, Cebolla Piña y Chile.", 65);
const Hamburguesa_Especial = new Hamburguesa("Hamburguesa Doble", "Doble Medallón de Carne, Salchicha, Queso Manchego, Queso Amarillo, Tocino, Jamón, Lechuga, Tomate, Cebolla y Chile.",  80);
