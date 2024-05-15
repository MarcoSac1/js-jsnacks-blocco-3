// creo un Array con gli elementi che mi sono stati forniti 
let fridgeFruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ];

// controllo quali elementi sono presenti al suo interno 
// console.log(fridgeFruits);

// agiungo con un push l'elemento 'pesca'
fridgeFruits.push('pesca');

// controllo se e stato agiunto
// console.log(fridgeFruits);

let isFound = false;

// controllo se dentro l'Array è presente 'cocomero'
for (let index = 0; index < fridgeFruits.length; index++) {
    if (fridgeFruits[index] === 'cocomero'){
        isFound = true;
    }
}

// creo un controllo
if(isFound){
    console.log('Trovato! Devo solo preparare il cocktail.');
}else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}

// const iterator = fridgeFruits.values()

// for(const values of iterator){
//     console.log(values);
// }


