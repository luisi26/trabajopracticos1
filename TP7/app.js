//actividad 1

let number1 = 19;
let parrafo1 = document.querySelector('#p1');
let boton1 = document.querySelector('#b1');

boton1.onclick = function () {
    if (number1 >= 18) {
        parrafo1.textContent = "Sos mayor de edad";
    } else {
        parrafo1.textContent = "Sos menor de edad";
    }
}
//actividad 2
let nombreUsuario2 = "Nahuel";
let parrafo2 = document.querySelector("#p2");
let boton2 = document.querySelector("#b2");

boton2.onclick = function () {
    if (nombreUsuario2 == "Nahuel") {
        parrafo2.textContent = "Bienvenido Nahuel, ¿cómo estás?";
    } else {
        parrafo2.textContent = "Bienvenido usuario";
    }
}

//actividad 3
let nombreUsuario3 = "Marcos";
let parrafo3 = document.querySelector("#p3")
let boton3 = document.querySelector("#b3")

boton3.onclick = function () {
if (nombreUsuario3 == "Nahuel" || nombreUsuario3 == "Marcos") {
    parrafo3.textContent = "Bienvenido " + nombreUsuario3 + ", ¿cómo estás?";
} else {
    parrafo3.textContent = "Bienvenido " + nombreUsuario3;
}
}

//actividad 4
let numero = 0;
let parrafo4 = document.querySelector("#p4");
let boton4 = document.querySelector('#b4')

boton4.onclick = function () {
if (numero > 0) {
    parrafo4.textContent = "El número es positivo";
} else if (numero < 0) {
    parrafo4.textContent = "El número es negativo";
} else {
    parrafo4.textContent = "El número es cero";
}

//ACTIVIDAD5
let numero5 = 19
let boton5 = document.querySelector ()



boton4.onclick = function () {
    if( numero5 >){
        esto es nena
    }else if(){
aca hacemos el que adolesce
    }else if(){
        aca va el adulo, no menira, va el joven
    }else if(){
        aca si va el adulto
    }else{
        y aca el senior del pami
    }
}