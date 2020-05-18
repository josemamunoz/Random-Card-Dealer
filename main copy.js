
//Establecemos como variables los números y las pintas

let cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
let pinta = ["\u2666", "\u2660", "\u2663", "\u2665"];

document.onload = function(){
    //html: Creamos la estructura de la carta, donde card contiene las siguientes 3 divisiones top, number y bottom

    let insideCards = document.querySelector(".card");
    let cardTop = document.createElement("div");
    let cardNumber = document.createElement("div");
    let cardBottom = document.createElement("div");

    //CSS: Asignamos la posición de los simbolos

    cardTop.style.textAlign = "left";
    cardBottom.style.textAlign = "right";

    //cardTop y CardBottom deben ser iguales (misma pinta de carta)
    
    cardTop.innerHTML = pintaAleatoria;          
    cardBottom.innerHTML = pintaAleatoria;

    //Generamos aleatoriamente tanto la pinta como el numero de la carta
    
    let pintaAleatoria = pinta[Math.floor(Math.random() * pinta.length)];  
    cardNumber.innerHTML = cards[Math.floor(Math.random() * cards.length)]; 

    //Establecemos la condicion que si aparece corazon o diamantes, el contenido cambia a color rojo

    if(pintaAleatoria == "\u2665" || pintaAleatoria == "\u2666"){
        cardTop.style.color = "red"
        cardNumber.style.color = "red"
        cardBottom.style.color = "red"
    }
}





//Luego de pasar por lo anterior lo podemos mosrtrar en la carta

insideCards.appendChild(cardTop);
insideCards.appendChild(cardNumber);
insideCards.appendChild(cardBottom);


