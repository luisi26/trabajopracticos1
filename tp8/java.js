//actividad 1

let parrafo1 = document.querySelector('#p1');
let boton1 = document.querySelector('#b1');
let imputej1 = document.querySelector ("#ej1")
let botonej1 = document.querySelector("#botonej1")
let number1 = document.querySelector ("#input1")
edad = input1.value


boton1.onclick = function () {
    if (number1.value >= 18) {
        parrafo1.textContent = "Sos mayor de edad";
    } else {
        parrafo1.textContent = "Sos menor de edad";
    }
}
//actividad 2
let nombreUsuario2 = document.querySelector ("#input1");
let parrafo2 = document.querySelector("#p2");
let boton2 = document.querySelector("#b2");
let imputej2 = document.querySelector ("#ej2")
let botonej2 = document.querySelector("#botonej2")
boton2.onclick = function () {
    if (nombreUsuario2.value == "Nahuel") {
        parrafo2.textContent = "Bienvenido Nahuel, ¿cómo estás?";
    } else {
        parrafo2.textContent = "Bienvenido usuario";
    }
}

//actividad 3
let nombreUsuario3 = document.querySelector ("#input1");
let parrafo3 = document.querySelector("#p3")
let boton3 = document.querySelector("#b3")
let imputej3 = document.querySelector ("#ej3")
let botonej3 = document.querySelector("#botonej3")

boton3.onclick = function () {
if (nombreUsuario3.value == "Nahuel" || nombreUsuario3.value == "Marcos") {
    parrafo3.textContent = "Bienvenido " + nombreUsuario3 + ", ¿cómo estás?";
} else {
    parrafo3.textContent = "Bienvenido " + nombreUsuario3;
}
}

//actividad 4
let numero4 = document.querySelector ("#input1");
let parrafo4 = document.querySelector("#p4");
let boton4 = document.querySelector("#b4")

boton4.onclick = function (){
if (numero4.value > 0) {
    parrafo4.textContent = "El número es positivo";
} else if (numero4.value < 0) {
    parrafo4.textContent = "El número es negativo";
} else {
    parrafo4.textContent = "El número es cero";
}
}
//actividad 5
let numero5 = document.querySelector ("#input1");
let boton5 = document.querySelector("#b5")
let parrafo5 = document.querySelector("#p5")

boton5.onclick = function (){
    if (numero5.value >= 6 && numero5.value <= 11)  {
        parrafo5.textContent = "Eres un niño";
    } else if (numero5.value >= 12 && numero5.value <= 18) {
        parrafo5.textContent = "Eres adolescente";
    }else if (numero5.value >= 19 && numero5.value <= 26)  {
        parrafo5.textContent = " Eres Joven";
    } else if (numero5.value >= 27 && numero5.value <= 59) {
        parrafo5.textContent = "Eres adulto";
    }else if(numero5.value >=60){
    parrafo5.textContent = "Eres viejo";
    }else parrafo5.textContent = " Hay problemas";

}

//actividad 6
let diaLaboral = document.querySelector ("#input1");
let parrafo6 = document.querySelector('#p6');
let boton6 = document.querySelector("#b6");

boton6.onclick = function (){

if (diaLaboral.value == "lunes" || diaLaboral.value == "martes" || diaLaboral.value == "miercoles" || diaLaboral.value == "jueves" || diaLaboral.value == "viernes") {
    parrafo6.textContent = "Es un día laborable";
} else if (diaLaboral.value == "sabado" || diaLaboral.value == "domingo") {
    parrafo6.textContent = "Es fin de semana";
}
}

//actividad 7
let contraseña = document.querySelector ("#input1");
let parrafo7 = document.querySelector('#p7');
let boton7 = document.querySelector('#b7');


boton7.onclick = function () {
    if (contraseña.value == "secreto") {
        parrafo7.textContent = "Acceso concedido";
    } else {
        parrafo7.textContent = "Acceso denegado";
    }
}