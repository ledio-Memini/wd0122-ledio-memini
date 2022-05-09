//1 creo un oggetto e lo valorizzo a mano
let oggetto = {};

//2 costruttore dell oggetto
function CostruttoreOggetto(){
    this.nome = 'Mario'
}

let oggetto2 = new CostruttoreOggetto();
//3 classe
class ClasseOggetto{
    contructor(){
        this.nome = 'Mario'
    }
}

let oggetto3 = new ClasseOggetto();
let oggetto4 = new ClasseOggetto();


console.log(oggetto);
console.log(oggetto2);
console.log(oggetto3);


class Automobile{
    constructor(_marca,_colore){
        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
    }
}

let mercedes = new Automobile('mercedes','nero')
console.log(mercedes);

let apecar = new Automobile('piaggio','nero')
apecar.ruote = 3;
console.log(apecar);

let fiat = new Automobile('','')
fiat.marca = 'Fiat';
fiat.colore = 'verde';

console.table(fiat);

/**
 * parentesi quadre
 */

let pizza = {
    gusto: 'Margherita',
    0: 'test',
    1: 'test2'
}

pizza['gusto']//bene ma non benissimo
pizza.gusto//sintassi corretta

let pizza2 = {
    0: 'Margherita',
    'gusto-pizza': 'Napoletana'
}

pizza2['0']
pizza2["gusto-pizza"]
