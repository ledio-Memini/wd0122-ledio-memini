/**
 * metodi
 */


 let frase = "la mia pizza preferita è la diavola"
 let indice = frase.indexOf('preferita');
 console.log(indice);
 if(indice != -1){
     console.log('trovato');
 }else{
     console.log('non trovato')
 }

 
 /*split e join*/

frase = "la mia pizza preferita è la diavola"

let arrFrase = frase.split('')
console.log(arrFrase);
console.log(arrFrase[0]);

let citta = 'Roma,Milano,Napoli,Firenze'
let arrayCitta = citta.split(',')// da stringa ad array
console.log(arrayCitta);

let nuovoarrayCitta = ['Roma', 'Milano', 'Napoli', 'Firenze']
let nuovaStringaCitta = nuovoarrayCitta.join(' gesu ')//da array a stringa
console.log(nuovaStringaCitta);