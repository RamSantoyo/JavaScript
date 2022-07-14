// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


const estudiante = {
    nombre: "Abel ramsess",
    edad: 20,
    profesion: "Lic Informatica",
    ocupacion: "Dev Web",
    sexo: "H",
}

// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);
// console.log(producto["precio"]);


// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
estudiante.telefono = 5531567430; 

// Eliminar propiedades
delete producto.disponible;
console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.telefono);