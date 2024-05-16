// Snack 12
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const wordA = prompt('type here first word');
const wordB = prompt('type here second word');

if(wordlength(wordA, wordB)=== true){
    console.log(wordA, wordB);
}else{
    if(wordA.length > wordB.length){
        console.log(wordA);
    }else{
        console.log(wordB);
    }
}

function wordlength(wordA , wordB){
    if(wordA.length === wordB.length){
        return true;
    }else{
        return false;
    }
}

