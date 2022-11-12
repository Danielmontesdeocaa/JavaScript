// Metodos de Arrays

const username = ["lalitoOwo", "CaptMagma003", "Zabdielxiitho0", "DanMen"];

// Metodo pop();
// Elimina el ultimo elemento del array
username.pop();
console.log(username);

// Metodo push();
// Agrega un elemento al final del arrray
username.push("DanMen");
console.log(username);

// Metodo shift()
// Elimina primer elemento del array y reposiciona el resto a un elemento anterior
/////////////////////////
// Splice()
////////////////////////
// Se definen 3 parametros
// 1o. Lugar a modificar
// 2o. Elementos a eliminar
// 3o en adelante -> Elmentos a agregar (opcional)
const weekdays = ["Lunes", "Miercoles", "Jueves", "Viernes"];

weekdays.splice(1, 0, "Martes");
console.log(weekdays);

///////////////////////
// slice()

//Ayuda a anadir, actualizar e eliminar elementos de un array

const carrito = ['almendras','pollo','espinacas','leche de almendra','jamon de pavo','chayote', 'avena'];
const carrito2 = carrito.slice(30);
console.log(carrito);

const carrito3 = carrito.slice(2,6);
console.log('pago de vales estos productos: ' + carrito3.toString());


//sort

console.log(carrito.sort());