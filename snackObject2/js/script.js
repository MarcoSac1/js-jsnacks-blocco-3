// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.



const people = [
    {
        nome : 'franco',
        cognome : 'abatantuono',
        eta : '75',
    },
    {
        nome : 'gino',
        cognome : 'iannagi',
        eta : '35',
    },
    {
        nome : 'marco',
        cognome : 'antonio',
        eta : '12',
    },
    {
        nome : 'teodora',
        cognome : 'tuono',
        eta : '11',
    },
    {
        nome : 'franca',
        cognome : 'abate',
        eta : '104',
    },
    {
        nome : 'laura',
        cognome : 'stano',
        eta : '29',
    },
    {
        nome : 'carlo',
        cognome : 'amata',
        eta : '74',
    },
    {
        nome : 'franco',
        cognome : 'salvini',
        eta : '2000',
    },
    {
        nome : 'teodora',
        cognome : 'dal mare',
        eta : '95',
    },
    {
        nome : 'luigia',
        cognome : 'sal',
        eta : '85',
    },
]

people.forEach((element) =>{
    console.log(`${element.nome} -- ${element.cognome} -- ${element.eta}`)

    if(element.eta > 18) {
        console.log('puoi guidare')

    }else{
        console.log('stay a casa');
    }
});