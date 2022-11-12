"use Strict"

///////Estructura basica de una funcion

function saludar(nombre, edad){
    console.log('Hola; ', nombre);
    console.log('edad; ', edad);
    var resultado = nombre + " tiene " + edad + " años ";
    return resultado;

}

var mensaje = saludar('DanMonMen', 34);

console.log(mensaje)




/////// Inicializacion de parametros 

function contar(cantidad=20) { /*solo se imprimira si le das un valor */
    console.log('total; ', cantidad);

}

contar(100); /* este valor siempre lo va imprimir la consola porque es prioridad */



/////////// Parametros rest 

function cocinar(ingrediente1, ingrediente2, ...masIngredientes){ /* los '...' son para tomar los 
productos restantes si no los pones pues solo tomara el proximo en turno */
    console.log('ingrediente1; ', ingrediente1);
    console.log('ingrediente2; ', ingrediente2);
    console.log("masIngredientes", masIngredientes);
}

cocinar('pollo', "tomate", 'arroz', 'frijoles', 'pescado');


////// Parametros SPREAD 

function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros) {
    console.log('ingrediente1; ', ingrediente1);
    console.log('ingrediente2; ', ingrediente2, );
    console.log('ingrediente3; ', ingrediente3, );
    console.log('otros; ', otros)
}
    var ingredientesBase = ['pollo', 'tomate'];
    cocinar(...ingredientesBase, 'arroz', 'pescadp', 'chile');


//// Funcion anonima 

var saludar = function(nombre){
    var mensaje = 'Hola' + nombre;
    return mensaje;
}


////// calllbacks 

function calcular(datoA, datoB, sumarCB, restarCB){
    var suma = datoA + datoB;
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}

calcular(2, 3, function (resultado){
    console.log('suma', resultado)},
    function (resultado){
        console.log('resta', resultado)
})

////// funcion arrow /////// fat arrow //// lambda


var decirHola = nombre1 => 'hola ' + nombre1;
console.log(decirHola('Dan'));

var sumar = cantidad=>cantidad=+10
console.log(sumar(10));

var calcular = (datoR, datoS) => datoR+datoS
console.log(calcular(10, 15));

var general = (datoR, datoS) => {
    var datoT = 5;
    return datoR+datoS+datoT;
}
console.log(general(10,15));

var validar = () => {
    return 'validacion correcta';
}
console.log(validar())


//// uso del operador this

const boton = document.querySelector('.boton'); 

/* boton.addEventListener('click', function(){
    console.log(this.innerHTML);
})
*/ 

/*
boton.addEventListener('click', () =>{
    console.log(this)
    this.location = 'https://www.google.com/';
})

*/

/*
boton.addEventListener('click', function(){
console.log('El boton se ha pulsado');
})

boton.addEventListener('mouseover', function(){
    console.log('El mouse esta sobre el boton');
    })

    boton.addEventListener('mouseout', function(){
        console.log('El mouse esta fuera del boton');
        })
*/

/////// Keydown ////keypress ///// keyup

window.addEventListener('keydown', function (event){
    console.log('pulsando tecla');
    console.log(String.fromCharCode(event.keyCode))
})

window.addEventListener('keypress', function (Event){
    console.log('tecla pulsada')
})

window.addEventListener('keyup', function (Event){
    console.log('tecla liberada')
})

window.addEventListener('load', function(){
    console.log('El contenido de la ventana se ha cargado');
});


////// Eventos multimedia 


const video = document.querySelector('NewYorkVideos'); /* link del video */

//video.addEventListener('play', function(){
//    console.log('El video ha iniciado');
//});

//video.addEventListener('seeking', function(){
//   console.log('Se esta buscando el video', this.currentTime);
//});

//video.addEventListener('ended', function(){
//    console.log('El video ha terminado');
//});

//////////// Temporizadores o timers

// SetInterval
// SetTimeout

var temporizador = setInterval(function () {
    setColor();
}, 2000);


function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "black" ? 'gren' : 'black';

}

function stopChangeColor() {
    clearInterval(temporizador)
}