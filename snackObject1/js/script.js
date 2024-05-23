// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.


const automobili = [
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'benzina',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'benzina',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'benzina',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'benzina',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'benzina',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'diesel',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'diesel',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'diesel',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'diesel',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'diesel',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'metano',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'metano',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'metano',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'elettrico',
    },
    {
        marca : 'fiat',
        modello :'panda',
        alimentazione : 'elettrico',
    },
];

// automobili.forEach((element) =>{
//     console.log(element);
// })

const gasoline = automobili.filter((singleAuto)=>{
    if(singleAuto,alimentazione === 'benzina'){
        return true;
    }
});
console.log(gasoline);

const diesel = automobili.filter((singleAuto)=>{
    if(singleAuto,alimentazione === 'diesel'){
        return true;
    }
})
console.log(diesel);

const other = automobili.filter((singleAuto)=>{
    if(singleAuto,alimentazione !== 'benzina' && singleAuto,alimentazione !== 'benzina'){
        return true;
    }
})

// // oppure
// const gasoline = [];
// const diesel = [];
// const other = [];


// for (let index = 0; index < cars.length; index++) {
//     const element = array[index];
//     if(singleAuto,alimentazione === 'benzina'){
//         gasoline.push(element);
//     }else if(singleAuto,alimentazione === 'diesel'){
//         diesel.push(element);
//     }else{
//         other.push(element);
//     }
// }

// console.log(gasoline);
// console.log(diesel);
// console.log(other);