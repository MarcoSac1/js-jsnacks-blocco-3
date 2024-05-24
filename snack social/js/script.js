// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// {
//     "tab": ["Twitter", 'Facebook', "GitHub", "Gmail"],
//     "activeTab": 0
// }

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.


const browser = {
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
};

const social = [
    'facebook',
    'twitter',
    'youtube',
];

const newTab = browser.tab.filter((tabs) => {
    let isFound = false;
    social.forEach((social) => {
        if (social.toLocaleLowerCase() === tabs.toLocaleLowerCase()) {
            isFound = true;
            return isFound;
        }
    })
    return !isFound;
})

console.log(newTab);