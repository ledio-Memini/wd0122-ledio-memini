"use strict";
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
//let veicoli = new Veicoli(3,'Piaggio','',1500,'apecar');//non si puo fare perche la classe veicoli e astratta quindi una classde astratta non puo creare istanze
class Automobile extends Veicoli {
    constructor() {
        super(...arguments);
        this.speed = 0;
    }
    aumentaVelocita(vel) {
        if (!vel) {
            this.speed++;
        }
        else {
            this.speed += vel;
        }
    }
    riduciVelocita(vel) {
        if (!vel) {
            this.speed--;
        }
        else {
            this.speed -= vel;
        }
    }
}
let veicoli = new Automobile(3, 'Piaggio', '', 1500, 'apecar');
veicoli.aumentaVelocita();
veicoli.aumentaVelocita(5);
veicoli.riduciVelocita(3);
veicoli.riduciVelocita(3);
console.table(veicoli);
console.table(veicoli.dettagliVeicolo());
//# sourceMappingURL=app.js.map