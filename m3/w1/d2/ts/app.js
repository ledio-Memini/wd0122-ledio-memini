"use strict";
class Car {
    constructor(mod, mar, col, p) {
        this.scontoRivenditore = 30;
        this.modello = mod;
        this.marca = mar;
        this.colore = col;
        this.prezzo = p;
    }
    dettaglioAuto() {
        return this.modello + " " + this.marca + " " + this.colore;
    }
    set cambiaScontoRivenditore(n) {
        this.scontoRivenditore = n;
    } //i setter non possono restituire un valore
    get prezzoFinale() {
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
    } //il metodo get non puo avere dei parametri
    /*public  prezzoFinale():string{
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
    }
    console.log(fiat.prezzoFinale()) deve avere le parentesi per visualizzarlo
    */ //metodo senza get
    static nazione() {
        console.log(this.stato);
    }
} //nazione e figlio di Car e non di fiat 
Car.stato = 'Italia';
let fiat = new Car('500', 'Fiat', 'grigio', 10000);
console.log(fiat.modello);
console.log(fiat.prezzoFinale);
//console.log(fiat.scontoRivenditore)non posso accedere alle proprieta protette o private
//fiat.scontoRivenditore = 20 ; non posso accedere alle proprieta protected o private
fiat.cambiaScontoRivenditore = 20; //il metodo set modifica anche le proprieta con accesso privato o protette
console.log(fiat.prezzoFinale);
console.log(fiat);
//fiat.nazione()//non posso usarlo cosi
Car.nazione();
var Months;
(function (Months) {
    Months[Months["Gennaio"] = 1] = "Gennaio";
    Months[Months["Febbraio"] = 2] = "Febbraio";
    Months[Months["Marzo"] = 3] = "Marzo";
    Months[Months["Aprile"] = 4] = "Aprile";
})(Months || (Months = {}));
console.log(Months.Gennaio, Months[1]);
console.log(Months.Aprile);
var Color;
(function (Color) {
    Color["Bianco"] = "#fff";
    Color["nero"] = "#000";
})(Color || (Color = {}));
let colore = Color.Bianco;
//funzioni e oggetti
const states = {
    italy: 'Rome',
    england: 'London',
    id: function () {
        return this.italy + ' ' + this.england;
    }
};
console.log(states.italy, states.england, states.id());
function somma(a, b, c) {
    if (!c) {
        return a + b;
    }
    else {
        return a + b + c;
    }
}
class Veicoli {
    constructor(ruote, marca, modello, prezzo, tipo) {
        this.ruote = 4;
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    dettagliVeicolo() {
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;
    }
}
let apecar = new Veicoli(3, 'Piaggio', '', 1500, 'apecar');
class Bici extends Veicoli {
    constructor(marca, modello, prezzo) {
        super(2, marca, modello, prezzo, 'Bicicletta');
    }
}
class Cars extends Veicoli {
    constructor(marca, modello, prezzo) {
        super(4, marca, modello, prezzo, 'Automobile');
        this.autoradio = true;
        this.costoPieno = 75;
    }
}
let auto = new Cars('Piaggio', '', 1500);
console.log(auto);
class ElectricCars extends Cars {
    cambiaCostoPieno() {
        //this.costoPieno = 30; laproprieta costo pieno non e accessibile dalla sottoclasse
    }
}
let autoElettrica = new ElectricCars('fiat', '500 elettrica', 1500);
console.log(autoElettrica);
//# sourceMappingURL=app.js.map