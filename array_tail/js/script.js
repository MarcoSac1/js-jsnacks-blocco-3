let arrayElement = Number.parseInt(prompt('type an number of element'), 10);
let numbersArray = [];

if (Number.isNaN(arrayElement)|| arrayElement > 40 || arrayElement < 5){
    arrayElement = 15;
}

for (let index = 0; index < arrayElement.length; index++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numbersArray.push(randomNumber);
}

console.log(numbersArray.slice(-5));
console.log(numbersArray);


const shortArray = [1, 2, 3];
const longArray = [4, 5, 6, 7, 8, 9, 10];

let shortestArray;
let longestArray;


if (shortArray.length === longArray.length){
    console.log('hanno la stessa lunghezza !');
}else if(shortArray.length > longArray.length){
    longestArray = shortArray;
    shortestArray = longArray;
}else{
    longestArray = longArray;
    shortestArray = shortArray;
}

const remainigElement = longestArray.length - shortestArray.length;

// for (let index = 0; index <= longestArray.length - shortestArray.length; index++) {
//     const element = array[index];
    
// }

shortestArray.fill(Math.floor(Math.random() * 100) + 1, shortestArray.length, remainigElement);

console.log(shortestArray, longestArray, shortestArray.length, longestArray.length);