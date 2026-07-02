let boton1 = document.querySelector ('#b1')
let boton2 = document.querySelector ('#b2')
let boton3 = document.querySelector ('#b3')
let boton4 = document.querySelector ('#b4')
let parrafo = document.querySelector ('#p1')
let boton5 = document.querySelector ( '#tamaño')
let boton6= document.querySelector ('#reinicio')
boton1.onclick = function(){
    parrafo.style.backgroundColor ='white'
}

 //let parrafo= document.querySelector ("#p1")
 boton2.onclick= function() { 
    parrafo.textContent = 'DALE ANDA A ESCUCHAR RUN IT'
}
//let boton4 = document.querySelector ("#b4")
boton4.onclick = function() {
    parrafo.style.fontFamily = 'Comic Sanz'
}
//let boton3 = document.querySelector ("#b3")
boton3.onclick= function() {
    parrafo.style.color = 'blue'
}
 //let boton5= document.querySelector("#tamaño")
 boton5.onclick= function(){
    parrafo.style.fontSize = '30px'
}
boton6.onclick = function(){
    parrafo.textContent= "Se llama Run It y esta en todas las plataformas digitales.Miren el MV en la cuenta oficial"
    parrafo.style.backgroundColor= ""
    parrafo.style.color = ""
    parrafo.style.fontFamily = ""
    parrafo.style.fontFamily =""
}

