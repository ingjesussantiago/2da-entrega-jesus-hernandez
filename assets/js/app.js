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


let cliente=prompt("ingrese su nombre");
let dirección=prompt("Ingrese su dirección");


function pedido() {

opción=prompt("ingrese el producto que desea  numero correspondiente:\n1. Hamburguesa clásica  \n2. Hamburguesa Hawaiana \n3. Hamburguesa doble  \n(*)si ingresa su valor diferente se ejecutara r=a/b");

let cantidad=""
    
opción=Number(opción);

switch (opción) {
  case 1:
    precio=Hamburguesa_clásica.precio;
    function solicitar(params) {
    cantidad = prompt("ingrese la cantidad deseada");
    }
    solicitar()
   
    break;
case 2:
    precio=Hamburguesa_Hawaiana.precio;
    function solicitar(params) {
    cantidad = prompt("ingrese la cantidad deseada");
    }
    solicitar()
  break;
  case 3:
    precio=Hamburguesa_Especial.precio;
    function solicitar(params) {
    cantidad = prompt("ingrese la cantidad deseada");
    }
    solicitar()
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
        let precio_total= Number(cantidad*(precio)*1.15 + 15).toFixed(2);
         alert("Estimado "+ cliente + " Su cuenta es de "+ precio_total + " y se entrega a domicilio en la siguiente dirección "+ dirección );
    }
    if (Opción3==2) {
        let precio_total= Number(cantidad*(precio)*1.15 + 15).toFixed(2);
          alert("Estimado "+ cliente + " Su cuenta es de "+ precio_total + " y pasa a recoger su pedido");
    }

  
}

if (opción2 == 1) {
    console.log("pendiente");
    pedido()
    
}

 
}

pedido();







