# js-jsnacks-blocco-3

SNACKs:

<!-- 1. TuttiFrutti -->
<!-- Cartella array-lista -->

Descrizione:
Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esistono le funzioni includes() e indexOf() ma noi non le vogliamo utilizzare 
per cercare nel frigorifero.

<!-- workflow -->
<!-- 
creo un Array con gli elementi che mi sono stati forniti 
-controllo quali elementi sono presenti al suo interno 
-faccio un Array.push('pesca'); per agiungere l'elemento che ho sul tavolo
-controllo se dentro l'Array è presente 'cocomero'
-se e presente stampa "Trovato! Devo solo preparare il cocktail."
-altrimenti stampa  "Oh no, devo uscire a comprare il cocomero!" 
-->



<!-- 2. La coda dell'Array -->
<!-- Cartella: array_tail -->

Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array

<!-- workflow -->

<!-- 
 dichiaro una variabile dove tramite un prompt faccio inserire al utente il numero di array che vuole generare 
 creo un controllo sul numero di array
 creo un ciclo 'for' per generare le stringhe degli array
 con un console.log stampo gli ultimi 5 elementi del Array
 -->

<!-- Bonus: -->

Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente  conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array

<!-- 3.  (Bonus) -->

Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.