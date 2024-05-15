// creo due Array di lunghezza differente
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6, 7, 8, 9, 10];

let shortestArray;
let longestArray;

// creo un controllo sulla lunghezza degli array
if (arrayA.length === arrayB.length){
    console.log('hanno la stessa lunghezza !');
}else if(arrayA.length > arrayB.length){
    longestArray = arrayA;
    shortestArray = arrayB;
}else{
    longestArray = arrayA;
    shortestArray = arrayB;
}

// con un ciclo 'for' agiungo gli elementi al array piu corto finche non sono di lunghezza uguale 
const remainigElement = longestArray.length - shortestArray.length;
for (let index = 0; index < remainigElement; index++) {
    shortestArray.push(Math.floor(Math.random() * 100) + 1);
}

// faccio un controllo sulle lunghezze
console.log(shortestArray, longestArray, shortestArray.length, longestArray.length);