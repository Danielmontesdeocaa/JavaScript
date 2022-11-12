console.log('estoy dormido');



//En JavaScript, los bucles (loops) son utilizados para realizar
// areas repetitivas con base en una condición. Las condiciones 
 //normalmente devuelven true o false al ser evaluados. El bucle c
 //ontinuará ejecutándose hasta que la condicion devuelve false.

for (var boletos = 1; boletos <=10; boletos++){
    console.log(boletos);


}

var nombres = ['felipe','Daniel', 'jose', 'zabdiel', 'lalo'];

for (var i=0; i<nombres.length; i++){
    console.log(nombres[i])

}

/*

Dos variaciones de for

 -for ... of: mos permite recorrer el objeto (array) y por cada uno de los
 elementos del objeto, nos devuelve el valor

 -for... in: Nos permite recorrer el objeto (array) y por cada una de los 
 elemontos del objeto, nos devuelve la posicion 

 for ( var elemento of array){
    bloque de codigo
 }
elemento: referencia a cada uno de los elementos de array, y que ser
cualquier nombre, por eso la iniciamos con un var, debudo a que es una variable.


*//

var animales =['perro', ' gato', 'conejo', 'caballo', 'cabra'];

for (var animalesQueVoyABuscar of animales){
console.log(animalesQueVoyABuscar);

}


var animales =['perro', ' gato', 'conejo', 'caballo', 'cabra'];

for (var animalesQueVoyABuscar in animales){
console.log(animalesQueVoyABuscar);

}

//Para el ciclo while es importante mencionar que NO conocemos 
//la cantidad de veces que la estructura repetira una o varias instrucciones, 
//aunque eso tambien lo podremos modificar. Por ejemplo, si quiero que un usuario ingrese
// un valor mayor a 0, no sabremos cuantas veces se equivocara. Tambien, si queremos que 
// un programa se ejecute hasta que el usuario ingrese una opcion para salir.

console.log("WHILE")
let numero = 0;

while (numero < 6){ //cuando numero sea un 7, se evaluara como falsa
    numero++
    console.log(numero);
}

//Do While (hacer mientras)

//EL bucle do while nos sirve para ejecutar una sentencia especificada, 
//hasta que la condicion de comprobacion se evalua como falsa. La condicion 
//se evalua despues de ejectuar la sentencia, dando como resultado que la sentencia 
//especificada se ejecuta al menos una vez. 

//En pocas palabras, con while preguntamos una vez, evaluamos la condicion y 
//ejecutamos la instruccion, mientras que con do while ejectuamos la instruccion al 
//menos una vez, y luego preguntamos la condicion.

console.log('DO WHILE')
var num = 0; // inicializando mi variable 

do{ // Bloque de codigo que se ejecuta al menos una vez
    console.log(num);
    num ++;


}

while (num <6);

for (let i = 0; i < 15; i++) { //Ejecutamos el bucle, iniciando en el valor 0, y hasta que el valor de i sea menor a 15, se ejecutara el bloque de codigo.
    if (i == 10) { //Si el numero es igual a 10, se salta a la siguiente iteracion.
        continue; //Salta a la siguiente iteracion
    }
    console.log(i); //Imprimimos el valor de la variable i, en este caso se imprimen los numeros del 0 al 14, salvo el 10.
    }
