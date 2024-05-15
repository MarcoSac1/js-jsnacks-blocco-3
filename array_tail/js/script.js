// dichiaro una variabile dove tramite un prompt faccio inserire al utente il numero di array che vuole generare
let arrayElements = Number.parseInt(prompt('type an number of elements'), 10);
let numbersArray = [];

// creo un controllo sul numero di array
if (Number.isNaN(arrayElements)|| arrayElements > 40 || arrayElements < 5){
    arrayElements = 15;
}

// creo un ciclo 'for' per generare le stringhe degli array
for (let index = 0; index < arrayElements.length; index++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numbersArray.push(randomNumber);
}

// con un console.log stampo gli ultimi 5 elementi del Array
console.log(numbersArray.slice(-5));
console.log(numbersArray);
