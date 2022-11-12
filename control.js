//// Verificar hora

const today = new Date();
let hour = today.getHours();

hour = 15;

function greeting() {
//// Saludo cuando sea de dia 
if(hour <= 12 && hour >= 6) {
    console.log("buen dia");


} else if (hour >= 13 && hour <=18) {
    console.log('Tardes, ya');
} else { 
   // console.log("two mimir")

}
}


////////////////////Reto

//let birthDate = 2002;

//function ofAge(date) {
   // let msg = "Fecha no válida";
   // msg = (year - date >= 18) ? "Es mayor de edad" : "Es menor de edad";
    //return msg;
   // (condition) ? funcion1() : function2();
//}

//console.log(ofAge(birthDate));

//let birthDate = 1997;

//function ofAge(date) {
    //let msg = "Fecha no válida";
   // msg = (year - date >= 18) ? "Es mayor de edad" : "Es menor de edad";

    // (condition) ? funcion1() : function2();
//}



/////////////////////////////////
// Switch
////////////////////////////////

const wallet = 1000;

function orderFood(nineros) {
    let carrito = "";
    switch(nineros) {
        case 0: 
            carrito = "Vasito de awa";
            break;
        case 10:
            carrito = "Maruchan";
            break;
        case 50:
            carrito = "Tamales y atole";
            break;
        case 120:
            carrito = "Chilaquiles";
            break;
        case 150:
            carrito = "Hamburguesa y papas";
            break;
        case 300:
            carrito = "Pizza";
            break;
        case 1000:
            carrito = "Alitas, borgir, papas, maruchan";
            break;
        default:
            carrito = "Hoy no tenemos servicio";
    }

    return carrito;
}

console.log(orderFood(wallet));

const products = ["Awa", "Maruchan", "Tamales", "Pizza"];

function findPrice(item) {
    let price = 0;

    switch(item){
        case "Awa":
            price = 0;
            break;
        case "Maruchan":
            price = 10;
            break;
        case "Tamales":
            price = 30;
            break;
        case "Pizza":
            price = 300;
            break;
        default:
            price = null;
    }
    return "El producto " + item + " cuesta " + price;
}

console.log(findPrice("Borgir"));

// Array
const wishlist = ["Converse", "Sueter", "PS5", "Freidora aire", "Monitor 2k", "Roomba", "Teclado"];

// console.log(wishlist);

const product = {
    name: "Converse",
    price: 1200.0,
    size: 35,
    color: "Beige",
    discount: .5
}

console.log(product);

console.log(product.size);

const productos =  {
    1: [
        {
            name: "Converse",
            price: 1200.0,
            size: 35,
            color: "Beige",
            discount: .5
        }
    ],
    2: [
        {
            name: "Jordan",
            price: 5000,
            size: 32,
            color: "Red",
            discount: .02
        }
    ]
}


//// Recursividad

// Factorial de un numero

const factorial = (n) => {
    if (n <= 1 )  return;
    return n * factorial9(n - 1);
 

}

console.log(factorial(10));

