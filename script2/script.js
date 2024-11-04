/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Generare un numero random da 1 a 6 per il giocatore
let punteggioGiocatore = Math.floor(Math.random() * 6) +1;

// Generare un numero random da 1 a 6 per il computer
let punteggioComputer = Math.floor(Math.random() * 6) +1;

// Punteggi
console.log ("punteggioGiocatore : ${punteggioGiocatore}");
console.log ("punteggioComputer : ${punteggioComputer}");

// Vincitore
if (punteggioGiocatore > punteggioComputer) {
    console.log("giocatore ha vinto");
  } else if (punteggioGiocatore < punteggioComputer) {
    console.log("computer ha vinto");
  } else {
    console.log("È un pareggio!");
  }


