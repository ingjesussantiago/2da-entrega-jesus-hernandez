class Hamburguesa {
    constructor(nombre, ingrediente, precio){
        this.nombre = nombre
        this.ingrediente = ingrediente
        this.precio = precio
    }
}

const Hamburguesa_clásica = new Hamburguesa("Hamburguesa Clásica","Medallón de Carne, Salchicha, Queso Amarillo, Jamón, Lechuga, Tomate, Cebolla y Chile.", "$ "+55);

console.log("hamburguesa_clasica");