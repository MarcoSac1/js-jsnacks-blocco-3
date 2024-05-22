
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.


const palla =[
    {
        peso : 10,
    }
];

for (const key in palla) {
    let pesoUser = prompt('insert wheigth');
    const element = pesoUser;
    console.log(palla[key].peso);
}