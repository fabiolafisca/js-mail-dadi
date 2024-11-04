/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email
*/

// Chiedi all'utente la sua email
let mail = prompt("Inserisci la tua mail");
// Lista email
let email = [
    "utente@hotmail.com",
    "utente@hotmail.com",
    "utente@hotmail.com",
];

// Controlla che sia nella lista di chi può accedere
if (mail.includes("@") && mail.length > 0) {
    let i = 0;
while (i < mail.length) {
    if (lista[i] === mail) {
        console.log("accesso consentito");
        break;
    } 
}

if (lista[i] != mail && i === lista.length) {
    console.log("accesso non consentito");
}

} else {
    console.log ("controlla email");
}


