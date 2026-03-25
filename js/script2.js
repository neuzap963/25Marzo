let saldo = 1000;

let retiro = Number(prompt("¿Cuánto dinero deseas retirar?"));

if (retiro <= 0) {
    console.log("Cantidad no válida");

} else if (retiro > saldo) {
    console.log("Fondos insuficientes. Tu saldo es de " + saldo + "€");

} else {
    saldo = saldo - retiro;
    console.log("Retiro exitoso. Te quedan " + saldo + "€");
}