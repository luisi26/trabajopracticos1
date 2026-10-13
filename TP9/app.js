//actividad 1
let boton1 = document.querySelector("#boton1");
let n1 = document.querySelector("#actividad1");
let n2 = document.querySelector("#actividadn1");
let p1 = document.querySelector("#p1")


function comparar(n1, n2){
let respuesta
 if (n1 > n2) {
   respuesta = n1 + " " + "es mayor"
 } else if(n1<n2){
  respuesta = n2 + " " + "es mayor"
 }
 return respuesta
}

boton1.onclick = function (){
  p1.textContent = comparar(n1.value, n2.value)
}

//actividad 2
let boton2 = document.querySelector("#boton2");
let num1 = document.querySelector("#actividad2");
let num2 = document.querySelector("#actividadn2");
let p2 = document.querySelector("#p2")

function comparar2(num1, num2){
let mensaje
 if (num1 < num2) {
   mensaje = num1 + " " + "es menor"
 } else if(num1 > num2){
  mensaje = num2 + " " + "es menor"
 }
 return mensaje
}

boton2.onclick = function (){
  p2.textContent = comparar2(num1.value, num2.value)
}

//actividad 3
let boton3 = document.querySelector("#boton3");
let numero1 = document.querySelector("#actividad3");
let numero2 = document.querySelector("#actividadn3");
let p3 = document.querySelector("#p3");

function comparar3(numero1, numero2){
let contestar
 if (numero1 === numero2) {
  contestar = numero1 +" y "+ numero2 + " " + "son iguales"
 } else if(numero1 !== numero2){
  contestar = numero1 +" y "+ numero2 + " " + "son diferentes"
 }
 return contestar
}

boton3.onclick = function (){
  p3.textContent = comparar3(numero1.value, numero2.value)
}

//actividad 4
let boton4 = document.querySelector("#boton4");
let numero = document.querySelector("#actividad4");
let p4 = document.querySelector("#p4");

function calcularIVA(precio) {
    let calcular;
    calcular = precio * 0.21;
    return calcular;
}

boton4.onclick = function () {
    p4.textContent = "El IVA es $" + calcularIVA(numero.value);
}

//actividad 5
let boton5 = document.querySelector("#boton5");
let texto1 = document.querySelector("#actividad5");
let p5 = document.querySelector("#p5");

function saludo(texto1){
    let saludar;
    saludar = "Hola" + " " + texto1
    return saludar
}
boton5.onclick = function () {
    p5.textContent = saludo(texto1.value);
}

//actividad 6
let boton6 = document.querySelector("#boton6");
let texto2 = document.querySelector("#actividad6");
let p6 = document.querySelector("#p6");
let body = document.querySelector("body");

function cambiar(oscuro){
     if (oscuro == "modo oscuro") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        p6.textContent = "Activaste el modo oscuro";
    }
}
boton6.onclick = function () {
    cambiar(texto2.value);
}

//actividad 7
let boton7 = document.querySelector("#boton7");
let texto3 = document.querySelector("#actividad7");
let p7 = document.querySelector("#p7");

function cambiar2(claro){
     if (claro == "modo claro") {
        body.style.backgroundColor = "#e5eee5";
        body.style.color = "black";
        p7.textContent = "Activaste el modo claro";
    }
}
boton7.onclick = function () {
    cambiar2(texto3.value);
}
