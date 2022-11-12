// funcion para sumar numeros
function suma(){
console.log(5 + 7);

}


//suma();

// parametros
function areaCuadrado(lado){
console.log(lado * lado);


}

areaCuadrado(13);

// parametro x2

// Variable global
var adios = "adios";
function areaTriangulo(base, altura) {
// variable local
    var res = (base * altura) / 2;
console.log(res);
console.log(adios);

}


areaTriangulo (10, 15); 


// declaracion de variables 
//var 
var clima =28;
clima = 82.4;
console.log(clima);

// let
let cielo ="azul";
cielo = "morado";
console.log(cielo);


// constant 
const pi = 3.14159;
console.log(pi);


function Myname(FirstName, LastName) {
    let fullName = FirstName + " " + LastName;
    return fullName;
// return FirstName + LastName;
}

let userName = "Daniel";
let userLastName = 'Montes de Oca';



let nombreCompleto = Myname("Daniel", "Montes de Oca");
console.log(nombreCompleto);

/////////////////////////////////
//////// Array + Funciones Flecha
////////////////////////////////

let nomeEcognome = (nomeDiBattesimo, cognome) => {
    return nomeDiBattesimo + " " + cognome;
}

//let nomeEcognome = (nomeDiBattesimo, cognome) => nomeDiBattesimo + " " + cognome;

console.log(nomeEcognome("Daniel", "Montes de Oca"))


let sun = (a , b) => a + b;

let imprimir = a => console.log(a);

//imprimir("Chelsea");


// Arrays

let exodia = ["Exodia el Prohibido","Brazo Derecho del Prohibido", "Brazo Izquierdo del Prohibido","Pierna Derecha del Prohibido","Pierna Izquierda del Prohibido"];
console.log(exodia);
console.log(exodia[0]);

console.log(exodia[exodia.length -1]);

console.log(exodia.length);

//let matriz = [[a1, a2], [b1, b2]];
