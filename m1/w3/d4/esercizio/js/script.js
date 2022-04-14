/**
 * 1
 */
let  cioc = 'QUANTO E BUONO IL CIOCCOLATO DI '
let citta = 'perugia'

let ciocMin = cioc.toLowerCase();
console.log(ciocMin);
let cittaMai = citta.toUpperCase();
console.log(cittaMai)

let minMai = ciocMin + cittaMai;
console.log(minMai);

/**
 * 2
 */

let persone = [
    'Mario',
    'Giacomo',
    'Giuseppe',
    'Cristiano'
]
console.log(persone);
/**
 * 3
 */

let persone3 = persone[2];
console.log(persone3);
/**
 * 4
 */

let personeLung = persone.length;
console.log(personeLung);
/**
 * 5
 */

let arraynumeri = [1,2,3,4]
let arraynumeri1 = [5,6,7,8]

function arraynum(){
    return arraynumeri + ',' + arraynumeri1
}
console.log(arraynum());

let arraynumeri2 = [9,10,11,12]

let arrayinsieme = arraynum() + ',' + arraynumeri2;
console.log(arrayinsieme);
/**
 * 6
 */
persone.push('ledio');
console.log(persone);

let nomeEliminato = persone.pop();
console.log(persone);
console.log('Hai eliminato ' + nomeEliminato)

let macchine = ['Fiat','Lamborghini','Bugatti','Ferrari']
console.log(macchine);

let intruso = macchine.shift();
let aggiungi = macchine.unshift('Maserati')
console.log(macchine);


