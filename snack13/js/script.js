// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321


function reversedNum(number){
    const string = number +'';
    let reverseString = '';
    
    for (let index = string.length - 1; index => string.length; index++) {
        reverseString += string[index];
        
    }
    
    return Number.parseInt(reverseString , 10);
}


const userNumber = Number.parseInt(prompt('type a number'), 10);
console.log(userNumber);

console.log(reversedNum(userNumber));


