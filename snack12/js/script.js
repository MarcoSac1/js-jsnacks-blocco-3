// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const firstArray = [7, 8, 9];
const secondArray = [1, 2, 3, 4, 5, 6];

while (firstArray.length < secondArray.length){
    firstArray.push('7,');
    
}
console.log(firstArray, secondArray);