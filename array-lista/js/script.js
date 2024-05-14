// creo un Array con gli elementi che mi sono stati forniti 
let fridgeFruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ];

// controllo quali elementi sono presenti al suo interno 
console.log(fridgeFruits);

// agiungo con un push l'elemento 'pesca'
fridgeFruits.push('pesca');
// controllo se e stato agiunto
console.log(fridgeFruits);

// let fruitsearch = prompt('search in your fridge');

// controllo se dentro l'Array è presente 'cocomero'
if(fridgeFruits.find('cocomero')){
    connsole.log('Trovato! Devo solo preparare il cocktail.');
}else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}