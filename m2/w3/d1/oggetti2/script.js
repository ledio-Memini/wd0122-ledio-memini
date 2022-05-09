class Automobile2{
    constructor(_marca,_colore){
        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
        this.prezzo = 10000
    }

    sconto(percentuale){
        this.prezzo = (this.prezzo/100) * (100 - percentuale);
    }
}

let mercedes = new Automobile2('mercedes','nero')

console.table(mercedes);
mercedes.sconto(40);
mercedes.sconto(40);
console.log(mercedes);

function Automobile(_marca,_colore){
    {
        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
        this.prezzo = 10000
        this.sconto = function(percentuale){
            this.prezzo = (this.prezzo/100) * (100 - percentuale);
        }
    }

}
let fiat = new Automobile('fiat','verde')

console.table(fiat);
mercedes.sconto(10);
console.log(fiat);

let ferrari = new Automobile('ferrari','rossa')
let lamborghini = new Automobile('lamborghini','blu')

Automobile.prototype.brandProtetto = true;//brandprotetto e una nouva classe coppia valore

console.table(ferrari,lamborghini);
console.table(ferrari.brandProtetto);


