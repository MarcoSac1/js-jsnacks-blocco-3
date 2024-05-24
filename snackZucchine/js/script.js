// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
        varieta : 'bianca',
        peso : 46,
        lunghezza : 3,
    },
    {
        varieta : 'bianca',
        peso : 542,
        lunghezza : 165,
    },
    {
        varieta : 'bianca',
        peso : 860,
        lunghezza : 35,
    },
    {
        varieta : 'zucchina chiara di faenza',
        peso : 20,
        lunghezza : 2,
    },
    {
        varieta : 'bianca',
        peso : 505,
        lunghezza : 215,
    },
    {
        varieta : 'zucchina chiara di faenza',
        peso : 37,
        lunghezza : 200,
    },
    {
        varieta : 'bianca',
        peso : 33,
        lunghezza : 7,
    },
    {
        varieta : 'zucchina chiara di faenza',
        peso : 60,
        lunghezza : 6,
    },
    {
        varieta : 'zucchina chiara di faenza',
        peso : 520,
        lunghezza : 11,
    },
    {
        varieta : 'bianca',
        peso : 20,
        lunghezza : 5,
    },
];

// let sum = 0
// for (let index = 0; index < zucchine.peso; index++) {
//     sum += zucchine.peso[index];
    
// }

// console.log(sum);


let zucchinaCorta = zucchine.filter((element) =>{
    if(element.lunghezza < 8){
        return true;
    }
});

console.log(zucchinaCorta);


let zucchinaLunga = zucchine.filter((element) =>{
    if(element.lunghezza > 8){
        return true;
    }
});

console.log(zucchinaLunga);