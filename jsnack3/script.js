// Chiedo 10 volte all’utente di inserire un numero.
let result = 0;
for (i=1; i<=10; i++) {
    let number = parseFloat(prompt("Inserire un numero:"));
    result= + number;
    console.log(result);
}
// Il programma stampa la somma di tutti i numeri inseriti.