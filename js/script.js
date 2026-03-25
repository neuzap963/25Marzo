let a = 9;
let b = 18;

if (a > b) {
    console.log("a es mayor");
} else if (b > a) {
    console.log("b es mayor");
} else {
    console.log("son iguales");
}

// 1ºEXC

let edad = 20;

if (edad >= 18) 
{console.log("Puedes votar");}
else {console.log("Aun eres muy joven");}


//2ºEXC.

let number = -5;

if (number>0) {
    console.log("Es positivo");
}
else if (number < 0) {
    console.log("es negativo");
} else {
    console.log("Es cero");
}


//3ºEXC.

let nota = 6;

if (nota >= 5) {
    console.log("Felicidades, has aprobado!");
} else {
    console.log("debes estudiar mas para la procima");
}


//4ºEXC.

let numero = 4;
if (numero % 2 === 0) {
    console.log("Es un numero par");
}
else {
    console.log("Es impar");
}

//5ºEXC.

let dia = "Sabado";

if (dia === "Sàbado" || dia === "Domingo") {
    console.log("Disfrutar del descanso");

} else {
    console.log("Toca seguir trabajando");
}

//6ºEXC.

function jugar() {
    let a = document.getElementById("j1").value;
    let b = document.getElementById("j2").value;

    if (a === b) {
        console.log("Empate");
    } else if (a === "piedra") {
        if (b === "tijeras") {
            console.log("Gana Jugador 1");
        } else {
            console.log("Gana Jugador 2");
        }
    } else if (a === "papel") {
        if (b === "piedra") {
            console.log("Gana Jugador 1");
        } else {
            console.log("Gana Jugador 2");
        }
    } else if (a === "tijeras") {
        if (b === "papel") {
            console.log("Gana Jugador 1");
        } else {
            console.log("Gana Jugador 2");
        }
    }
}


//7ºExerc. 


document.getElementById("btn").addEventListener("click", jugar);

let nombre = prompt("Introduce tu nombre");

if (nombre === "") {
    console.log("Error: no escribiste nombre");

} else if (nombre === "Admin") {
    console.log("Hola " + nombre + ", bienvenido");

} else {
    let edad = Number(prompt("Introduce tu edad"));

    if (edad >= 18) {
        console.log("Hola " + nombre + ", puedes entrar");
    } else {
        let faltante = 18 - edad;
        console.log("Hola " + nombre + ", te faltan " + faltante + " años para entrar");
    }
}

