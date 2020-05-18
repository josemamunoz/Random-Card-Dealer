
//Establecemos como variables los números y las pintas

let cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
let pinta = ["\u2666", "\u2660", "\u2663", "\u2665"];

//html: Creamos la estructura de la carta, donde card contiene las siguientes 3 divisiones top, number y bottom

let insideCards = document.querySelector(".card");
let cardTypeTop = document.createElement("div");
let cardNumber = document.createElement("div");
let cardTypeBottom = document.createElement("div");

//CSS: Asignamos la posición de los simbolos

cardTypeTop.style.textAlign = "left";
cardTypeBottom.style.textAlign = "right";

/* Generamos la pinta y el numero de la carta aleatoriamente
tanto el top como el bottom de la carta deben tener la misma pinta, 
lo generamos una vez y luego lo seleccionamos para ambos */

let pintaAleatoria = pinta[Math.floor(Math.random() * pinta.length)];  
cardNumber.innerHTML = cards[Math.floor(Math.random() * cards.length)];  
cardTypeTop.innerHTML = pintaAleatoria;          
cardTypeBottom.innerHTML = pintaAleatoria;

//Establecemos la condicion que si aparece corazon o diamantes, el contenido cambia a color rojo

if(pintaAleatoria == "\u2665" || pintaAleatoria == "\u2666"){
    cardTypeTop.style.color = "red"
    cardNumber.style.color = "red"
    cardTypeBottom.style.color = "red"
}

//Luego de pasar por lo anterior lo podemos mosrtrar en la carta

insideCards.appendChild(cardTypeTop);
insideCards.appendChild(cardNumber);
insideCards.appendChild(cardTypeBottom);


