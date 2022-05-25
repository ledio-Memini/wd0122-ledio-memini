//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE

abstract class Lavoratore {
    public codRed:number
    public redditoAnnuo:number
    public tasseInps:number
    public tasseIrpef:number
    
    constructor(codRed:number,redditoAnnuo:number,tasseInps:number,tasseIrpef:number){
        this.codRed = codRed
        this.redditoAnnuo = redditoAnnuo
        this.tasseInps = tasseInps
        this.tasseIrpef = tasseIrpef
    }

    getUtileTasse():number{

        var utileTasse =  ((this.redditoAnnuo * this.codRed )/100)
        return utileTasse
    }

    abstract getRedditoAnnuoNetto():number


}

//

class Artigiano extends Lavoratore {

    getRedditoAnnuoNetto():number{
    let redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
    return redditoAnnuoNetto
    }
    getTasseInps(): number {
        let tasseInps = (this.redditoAnnuo * this.tasseInps)/100
        return tasseInps
    }
    getTasseIrpef(): number {
        let tasseIrpef = (this.redditoAnnuo * this.tasseIrpef)/100
        return tasseIrpef
    }



}
class LiberoProfessionista extends Lavoratore {

    getRedditoAnnuoNetto():number{
        let redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        return redditoAnnuoNetto
        }
        getTasseInps(): number {
            let tasseInps = (this.redditoAnnuo * this.tasseInps)/100
            return tasseInps
        }
        getTasseIrpef(): number {
            let tasseIrpef = (this.redditoAnnuo * this.tasseIrpef)/100
            return tasseIrpef
        }


}
class Commerciante extends Lavoratore {

    getRedditoAnnuoNetto():number{
        let redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        return redditoAnnuoNetto
        }
        getTasseInps(): number {
            let tasseInps = (this.redditoAnnuo * this.tasseInps)/100
            return tasseInps
        }
        getTasseIrpef(): number {
            let tasseIrpef = (this.redditoAnnuo * this.tasseIrpef)/100
            return tasseIrpef
        }

}

let l1 = new Artigiano(10, 10000 , 10 , 10);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(10, 10000 , 10 , 10);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(10, 10000 , 10 , 10);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');