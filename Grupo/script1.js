
//Exrc.3
let numero = prompt("Ingresa un número del 1 al 3:");

switch (numero) {
  case "1":
    console.log("Uno");
    break;
  case "2":
    console.log("Dos");
    break;
  case "3":
    console.log("Tres");
    break;
  default:
    console.log("Número no válido");
}


// semáforo 

let botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    let color = document.getElementById("color").value.toLowerCase();

    switch (color) {
        case "rojo":
            console.log("¡Para!");
            break;

        case "verde":
            console.log("¡Pasa!");
            break;

        case "amarillo":
            console.log("¡Cuidado!");
            break;

        default:
            console.log("Color no válido");
    }
});

//frutas

let boton = document.getElementById("boton");

boton.addEventListener("click", function () {

    let fruta = document.getElementById("fruta").value.toLowerCase();

    switch (fruta) {
        case "manzana":
            console.log("Es roja y dulce");
            break;

        case "banana":
            console.log("Es amarilla y larga");
            break;

        case "pera":
            console.log("Es verde y jugosa");
            break;

        default:
            console.log("Fruta no reconocida");
    }

});



//idioma

botaoIdioma.addEventListener("click", function () {
    let idioma = document.getElementById("idioma").value.toLowerCase();

    switch (idioma) {
        case "español":
            console.log("Hola!");
            break;

        case "ingles":
            console.log("Hello!");
            break;

        case "frances":
            console.log("Salut!");
            break;

        default:
            console.log("Idioma no reconocido");
    }
});
