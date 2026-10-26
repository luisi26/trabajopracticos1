//actividad 1
let utiles = ["Lapiz", "Goma", "Regla", "Cuaderno", "Lapicera"];

console.log (utiles);
console.log (utiles [0]);
console.log (utiles[2]);
console.log (utiles[utiles.length-1]);
console.log (utiles.length);
utiles.push ("mochila");
console.log(utiles);
utiles.unshift("cartuchera");
console.log (utiles);
console.log (utiles.length);
console.log (utiles.pop());
console.log (utiles);
console.log(utiles.length);
console.log (utiles.shift());
console.log(utiles);
console.log(utiles.length);

//actividad 2

let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];

console.log(productos);
console.log(productos.length);
productos.push ("Azúcar");
productos.push ("Yerba");
productos.push ("Café");
console.log(productos);
productos.unshift("Sal");
productos.unshift("Galletitas");
console.log(productos);
console.log(productos.length);
console.log(productos.pop());
console.log(productos.pop());
console.log (productos);
console.log(productos.shift());
console.log(productos);
console.log(productos.length);

//actividad 3
let tecno = ["Teclado","Mouse","Monitor","Auriculares","Webcam","Parlantes"];

console.log(tecno.indexOf("Mouse"));
console.log(tecno.indexOf("Monitor"));
console.log(tecno.indexOf("Webcam"));
console.log(tecno.indexOf("Impresora"));
let teclado = tecno.indexOf("Teclado");
if (teclado != -1) {
    console.log("El teclado está registrado");
} else {
    console.log("El teclado no está registrado");
}

let impresora = tecno.indexOf("Impresora");

if (impresora != -1) {
    console.log("La impresora está registrada");
} else {
    console.log("La impresora no está registrada");
}

tecno.push("Impresora");

impresora = tecno.indexOf("Impresora");

console.log(impresora);
console.log(tecno);

//actividad 4
let videojuegos = ["Minecraft","Pokémon Cristal","Super Mario","The Legend of Zelda","Sonic"];

console.log(videojuegos);
console.log(videojuegos.length);
videojuegos.push  ("Animal Crossing");
videojuegos.push  ("Pokémon Rojo");
console.log(videojuegos);
videojuegos.unshift("Tetris");
videojuegos.unshift("Pac-Man");
console.log(videojuegos);
console.log(videojuegos.indexOf("Pokémon Cristal"));
console.log(videojuegos.indexOf("Sonic"));
console.log(videojuegos.indexOf("FIFA"));
console.log(videojuegos.pop());
console.log(videojuegos.shift());
console.log(videojuegos);
console.log(videojuegos.length);

//actividad 5
let estudiantes = ["Martina","Lucas","Sofía","Tomás","Valentina"];

console.log(estudiantes);
console.log(estudiantes.length);
estudiantes.push("Agustín");
estudiantes.push("Camila")
console.log(estudiantes);
estudiantes.unshift("Bruno");
console.log(estudiantes);
console.log(estudiantes.length);
console.log(estudiantes.indexOf("Sofía"));
console.log(estudiantes.indexOf("Camila"));
console.log(estudiantes.indexOf("Federico"));
console.log(estudiantes.shift());
console.log(estudiantes.pop());
console.log(estudiantes);
console.log(estudiantes.length);

//actividad 6
let deberes = ["Estudiar","Hacer la tarea","Ordenar la habitación","Comprar alimentos"];

console.log(deberes);
console.log(deberes.length);
deberes.push("Pasear al perro");
deberes.push("Preparar la cena");
console.log(deberes);
deberes.unshift("Entregar un trabajo");
console.log(deberes);
console.log(deberes.indexOf("Estudiar"));
console.log(deberes.indexOf("Preparar la cena"));
console.log(deberes.indexOf("Lavar el auto"));
console.log(deberes.shift());
console.log(deberes.pop());
deberes.push("Leer un libro");
deberes.unshift("Hacer ejercicio");
console.log(deberes);
console.log(deberes.length);

//actividad 7
let peliculas = ["Toy Story","Shrek","Buscando a Nemo","Los Increíbles","Ratatouille"];

console.log (peliculas);
console.log(peliculas.length);
peliculas.push("Cars");
peliculas.push("Monsters, Inc.");
console.log(peliculas);
peliculas.unshift("Intensamente");
peliculas.unshift("Coco");
console.log(peliculas);
console.log(peliculas.indexOf("Shrek"));
console.log(peliculas.indexOf("Coco"));
console.log(peliculas.indexOf("Frozen"));
let buscar = peliculas.indexOf("Cars");

if (buscar != -1) {
    console.log("Cars está en la lista");
} else {
    console.log("Cars no está en la lista");
}
console.log(peliculas.pop());
console.log(peliculas.shift());
peliculas.unshift ("Up");
console.log(peliculas.indexOf("Up"));
console.log(peliculas);
console.log(peliculas.length);

//actividad 8
let electronica = ["Celular","Notebook","Tablet","Teclado","Mouse"];

console.log(electronica);
console.log(electronica.length);
electronica.push("Monitor");
electronica.push("Impresora");
electronica.unshift("Cámara web");
electronica.unshift("Micrófono");
console.log(electronica);
console.log(electronica.length);
console.log(electronica.indexOf("Notebook"));
console.log(electronica.indexOf("Micrófono"));
console.log(electronica.indexOf("Parlante"));
console.log(electronica.pop());
console.log(electronica.shift());
console.log(electronica);
electronica.push("Parlantes");
electronica.unshift("Auriculares");
console.log(electronica);
console.log(electronica.indexOf("Parlantes"));
console.log(electronica.indexOf("Auriculares"));
console.log(electronica.indexOf("Celular"));
console.log(electronica.pop());
console.log(electronica.shift());
console.log(electronica);
console.log (electronica.length);

