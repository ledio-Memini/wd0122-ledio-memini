var Automobili = /** @class */ (function () {
    function Automobili(ruote, marca, modello, prezzo, tipo) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    Automobili.prototype.aumentaVelocita = function (vel) {
        if (!vel) {
            this.speed++;
        }
        else {
            this.speed += vel;
        }
    };
    Automobili.prototype.riduciVelocita = function (vel) {
        if (!vel) {
            this.speed--;
        }
        else {
            this.speed -= vel;
        }
    };
    Automobili.prototype.dettagliVeicolo = function () {
        return "Modello: ".concat(this.modello, ", Marca: ").concat(this.marca, ", Ruote: ").concat(this.ruote);
    };
    return Automobili;
}());
var veicolo = new Automobili(4, 'mini', 'cooper', 20000, 'automobile');
veicolo.aumentaVelocita(5);
console.table(veicolo);
//# sourceMappingURL=app.js.map