/*

array

*/

let arr = [1,2,3,4]
console.log(arr, arr.length);
console.log([5,6,7,8])// posso creare array senza creare una variabile


let pizze = [
    'Margherita',
    'Diavola',
    '4 stagioni'
]
let pizzaDiavola = pizze[1]
console.log(pizzaDiavola);

console.log(pizze);
console.log(pizze[0]);
pizze[0] = 'Capricciosa'

console.log(pizze);

/*
Destrutturazione
*/

pizze = [
    'Margherita',
    'Diavola',
    '4 stagioni'
];
let [pizza1,pizza2,pizza3] = pizze;

console.log(pizza2)

/**
 *  conversioni
 */
document.write(pizze)
document.write(pizze.toString())

/**
 * riordinare un array
 */

let nomi = [
    'Mario',
    'Zaira',
    'Luca',
    'Massimo',
    'Adriano'
]
nomi.sort()

console.log(nomi);


/**
 * aggiungere e rimuovere dagli array
 */

nomi.push('Ivona','ledio')// aggiunge un elemento alla fine degli array
console.log(nomi);

let nomeEliminato =nomi.pop()//elimina l'ultimo elemento dell'array. se do una variabile a pop tengo traccia di quello che ho eliminato
console.log(nomi); 
console.log('Hai eliminato il nome ' + nomeEliminato)

// shift elimina il primo elemento dell array 
// unshift aggiunge ad un array un elemento in prima posizione
nomi = [
    'Mario',
    'Zaira',
    'Luca',
    'Massimo',
    'Adriano'
] 

nomi.splice(2,1,'ledio');

console.log(nomi);



let nomi2 = ['Francesco','Simone','Pasquale']
let nomi3 = ['Ivona','Leopoldo','Chiara']

console.log(nomi);
let unito = nomi.concat(nomi2,nomi3);
console.log(unito);

let x = [1,2,3,4,'ciao',[4,8,96,['a','b','c'],'ciao']]

console.log(x [2])

console.log(x[5][3][0]);// array multidimensionali
