console.log('BUONGGIORNO');

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//Chiedere all’utente di inserire una parola

const parola = prompt('inserisci una parola')

for (let i = 0; i < parola.length; i++) {
    const letter = parola.charAt(i);
    const letterRev = letter.charAt(letter.reverse);
    console.log(letter);
    console.log(letterRev);
    
}

//Creare una funzione per capire se la parola inserita è palindroma
/*function palindroma(testo_parola) {
    if (testo_parola === testo_parola.reverse()) {
        console.log(correcto);
    } else {

    }
}

console.log(palindroma(parolaUtente));*/