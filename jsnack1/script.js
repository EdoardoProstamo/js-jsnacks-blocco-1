// Utente inserisce primo numero
let number1 = parsefloat (prompt("Inserire primo numero:"));

// Utente inserisce secondo numero
let number2 = parsefloat (prompt("Inserire secondo numero:"));

// Stabilisco le condizioni per stampare il numero maggiore 
if (number1>number2) {
    console.log(number1);
} else if (number2>number1) {
    console.log(number2);
} else if (number1=number2) {
    console.log(number1, number2);
}
