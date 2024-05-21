// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

// chiedo al utente di inserire un numero
let usernumber = Number.parseInt(prompt('type a number'), 10) + 1;

// se l'utente ha inserito un numero troppo lungo lo sovrascrivo con 5 secondi
if(usernumber > 10 || Number.isNaN(usernumber)){
    usernumber = 5;
}


const timer = setInterval(function(){
    usernumber--;
    console.log(usernumber);
    if(usernumber <= 0){
        clearInterval(timer);
        alert('no more time!!!');
    }
    
}, 1000);
