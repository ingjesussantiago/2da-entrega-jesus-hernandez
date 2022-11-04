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


let cliente=prompt("Ingrese su Nombre por favor");
let dirección=prompt("Ingrese su dirección");
const añadiendo_productos =[];


function pedido() {
  
  opción=prompt("Ingrese el producto que desea  acorde al numero correspondiente:\n1. Hamburguesa clásica  \n2. Hamburguesa Hawaiana \n3. Hamburguesa doble");
  
  let cantidad=""

 
    
  function solicitar(params) {
    cantidad = prompt("¿Ingrese cantidad de hamburguesas?");
    }

opción=Number(opción);

switch (opción) {

  case 1:
    precio=Hamburguesa_clásica.precio;
    solicitar()
    añadiendo_productos.push (Hamburguesa_clásica.precio*cantidad)
    console.log(añadiendo_productos);
    break;

  case 2:
    precio=Hamburguesa_Hawaiana.precio;
    solicitar()
    añadiendo_productos.push (Hamburguesa_Hawaiana.precio*cantidad)
    console.log(añadiendo_productos);
    break;

  case 3:
    precio=Hamburguesa_Especial.precio;
    solicitar()
    añadiendo_productos.push (Hamburguesa_Especial.precio*cantidad)
    console.log(añadiendo_productos);
    break;

  default:
   
      alert("No solicito Nada");
      pedido()
      break;
    
  
}

opción2=prompt( "¿Desea agregar algo mas a su cuenta: \n1. si , Seguir Comprando  \n2. No, La cuenta por Favor ");

if (opción2==2) {
  
  Opción3= prompt("Solicita Servicio a Domicilio:\n1. si  \n2. No ")
  
  if (Opción3==1) {
    const total = añadiendo_productos.reduce((acumulador, elemento) => acumulador + elemento, 0)
    console.log(total);
    totalmasiva = total+15
    alert("Estimado(a) "+ cliente +" Su cuenta es de "+ totalmasiva + " y se entrega en la siguiente dirección: " + dirección )
    
  }
  if (Opción3==2) {
    const total = añadiendo_productos.reduce((acumulador, elemento) => acumulador + elemento, 0)
    console.log(total);
    totalmasiva = total
    alert("Estimado(a) "+ cliente +" Su cuenta es de "+ totalmasiva + " y se entrega en sucursal" )
  }
  
  
}

if (opción2 == 1) {
    pedido()
}

}

pedido();






