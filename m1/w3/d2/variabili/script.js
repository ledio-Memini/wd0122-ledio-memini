/* stringhe ed escape */

var saluto = "ciao";
var domanda = "Com'è oggi il tempo";
var domanda2 = 'Com\'è oggi il tempo';// escape bisogna mettere \ prima delle virgolette
var html = '<div class="blocco"></div>>'
var html2 = "<div class=\"blocco\"></div>>" //escape

var nome = 'Giovanni'; //valore definito dall'utente
var frase = "Ciao Mario" + nome + "come stai?"; //concatenamento
var frase2 = `Ciao ${nome} come stai?`//backtick //concatenamento

console.log(frase2, 'color:red');
console.log(frase2.length);
console.log(frase2[0]);
var ultimoIndice = frase2.length - 1;
console.log( frase2[ ultimoIndice ]);

console.log( ''.length); //la lunghezza di una stringa vuota


console.log('%c log colorato', 'color:red;font-size:30px');// come applicare i commenti css ai console.log frase 


/* let e const*/

const PASSWORD = 'SKDYCCKTYTCFKYTTYFKYCDKTY' //e una costante e non puo essere modificato
console.log(PASSWORD);
//PASSWORD = '3454564JUFFYFYFY' => ERRORE
const OBJ = {
    nome: 'Mario'
}
OBJ.nome = 'marco';// posso modificare le proprietà di un oggetto anche se si trova in una costante
console.log(OBJ);


var x = 1; //globale
{
    console.log(x);
}

let y = 2;//globale
{
    console.log(y);
}



{
    var x2 = 1;//globale
    console.log(x2);//l esistenza di var e glogale quindi vale anche fuori le parentesi
}
console.log(x2)

{
    let y2 = 2;//locale
    console.log(y2); //l esistenza di let e solo locale quindi vale solo dentro le parentesi
}
//console.log(y2); => errore

function scriviSaluto(){
    var s = 'Ciao'
    document.write(s)
    return s; //estrarre la variabile fuori dalle parentesi
}
console.log(scriviSaluto());

scriviSaluto();

/*conversione di variabili */

var num = 4;
var testo = '4';
var prezzo = '4€'; // errore 
console.log(num + testo); // num viene trasformato in stringa
console.log(num * testo); // testo viene trasformato in numero e quindi moltiplicato
console.log(num * prezzo);// errore

let bool = false;
let valore ="<br>il valore della variabile booleana è " + bool + '<br>';
document.write(valore);

console.log(num * bool);// se convertito in numero, un valore booleano si trasforma in 0 se è falso, in 1 se è true

let booleano = Number(true);
let errore = Number('4a');
let stringa = String(4);
console.log(booleano, errore, stringa);

let arr = ['a','b','c','d',60 ];
document.write(arr);// i valori vengono concatenati in una stringa e separati tra loro con una virgola

let anni = 11;

if(anni == 10){// non si puo mettere solo un = perche seno si va a riassegnare il valore
    console.log('vero')
}

let nomi = 'Mario, Giovanni, '

nomi += 'Carlo';
console.log(nomi);

let conto = 5;
conto /= 5;
console.log(conto);




