let boton = document.querySelector("#boton1")
let parrafo = document.querySelector ("#p1")
let galletitas = 0;

boton1.onclick = function(){
   galletitas = galletitas + 1;
    parrafo.textContent = galletitas;
    if (galletitas == 10) {
    parrafo.style.color = "Violet"
  } else if (galletitas ==20){
    parrafo.style.color = "Red"
  }else if (galletitas <= 10){
    parrafo.style.color = "Green"
  }
}