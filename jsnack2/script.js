// Utente inserisce prima parola
let word1 = prompt("Inserire prima parola:");

// Utente inserisce seconda parola
let word2 = prompt("Inserire seconda parola:");

// Stabilisco le condizioni per stampare la parola più corta 
if (word1.length<word2.length) {
    console.log(word1);
    console.log(word2);
} else if (word2.length<word1.length) {
    console.log(word2);
    console.log(word1);
} else if (word1.length=word2.length) {
    console.log(word1, word2);
}
