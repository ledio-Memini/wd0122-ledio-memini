let smartphone = {
    marca : 'samsung',
    modello : 'galaxy s7 edge',
    prezzo : 150,
    accendi : function(){//funzione dentro un oggetto si definisce metodo
        //fa qualcosa
    }
}

/**
 * lettura e scrittura degli oggetti
 */

let j = {}// oggetto vuoto

let pizza = {
    gusto: 'margherita',
    tipo: 'Napoletana',
    prezzo: 5,
    dettagli: function(){
        console.log('la pizza Margherita costa 5 euro');
    }
}

console.log(pizza.gusto);

pizza.gusto = 'Diavola';

console.log(pizza.gusto);

console.log(pizza);

pizza.dettagli();

function dettagli(){
    console.log('e una funzione differente')
}
dettagli()//e una funzione

/**
 * costruttore degli oggetti
 */

function Pizza(g,t = 'napoletana',p = '5'){
    this.gusto = g
    this.tipo = t
    this.prezzo = p
    this.dettagli = function(){
        console.log('la pizza ' +this.gusto+' di tipo '+this.tipo+' costa '+this.prezzo+' euro');
    }
    this.prova = function(){
        this.dettagli()//posso lanciare un metodo all'interno dell'oggetto a cui appartiene
    }
    this.prova()
}

let margherita = new Pizza('margherita','siciliana')
let margherita2 = new Pizza('margherita','romana',7)
let diavola = new Pizza('Diavola','napoletana',1)

console.log(margherita);

console.log(margherita2);

margherita.dettagli();
margherita2.dettagli();
diavola.dettagli();

Pizza.prototype.disponibilita = true//aggiunge una classe ad un costruttore