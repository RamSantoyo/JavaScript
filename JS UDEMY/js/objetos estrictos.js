 //"use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); // .freeze .seal (.freeze no permite hacer nada al objeto) (.seal permite modificaciones solamente)

producto.precio = 'NUEVO PRECIO';
producto.telefono = 5531567430;  

delete producto.precio;

console.log(producto);