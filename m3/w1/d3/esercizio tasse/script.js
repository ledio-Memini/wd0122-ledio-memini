"use strict";
//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE
class Lavoratore {
    constructor(codRed, redditoAnnuo, tasseInps, tasseIrpef) {
        this.codRed = codRed;
        this.redditoAnnuo = redditoAnnuo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getUtileTasse() {
        var utileTasse = ((this.redditoAnnuo * this.codRed) / 100);
        return utileTasse;
    }
}
//
class Artigiano extends Lavoratore {
    getRedditoAnnuoNetto() {
        let redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
        return redditoAnnuoNetto;
    }
    getTasseInps() {
        let tasseInps = (this.redditoAnnuo * this.tasseInps) / 100;
        return tasseInps;
    }
    getTasseIrpef() {
        let tasseIrpef = (this.redditoAnnuo * this.tasseIrpef) / 100;
        return tasseIrpef;
    }
}
class LiberoProfessionista extends Lavoratore {
    getRedditoAnnuoNetto() {
        let redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
        return redditoAnnuoNetto;
    }
    getTasseInps() {
        let tasseInps = (this.redditoAnnuo * this.tasseInps) / 100;
        return tasseInps;
    }
    getTasseIrpef() {
        let tasseIrpef = (this.redditoAnnuo * this.tasseIrpef) / 100;
        return tasseIrpef;
    }
}
class Commerciante extends Lavoratore {
    getRedditoAnnuoNetto() {
        let redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
        return redditoAnnuoNetto;
    }
    getTasseInps() {
        let tasseInps = (this.redditoAnnuo * this.tasseInps) / 100;
        return tasseInps;
    }
    getTasseIrpef() {
        let tasseIrpef = (this.redditoAnnuo * this.tasseIrpef) / 100;
        return tasseIrpef;
    }
}
let l1 = new Artigiano(10, 10000, 10, 10);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(10, 10000, 10, 10);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(10, 10000, 10, 10);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//# sourceMappingURL=script.js.map