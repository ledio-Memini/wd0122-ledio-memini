class Pizza{

    constructor(g,t = 'napoletana',p = 5){
    //all'interno del constractor inizializzo/valorizzo le proprietà
    //ma posso anche lanciare funzioni/avviare processi
    this.gusto = g
    this.tipo = t
    this.prezzo = p

    this.dettagli()
    }
    dettagli(){
        console.log('la pizza ' +this.gusto+' di tipo '+this.tipo+' costa '+this.prezzo+' euro');
    }
}

let margherita = new Pizza('margherita')

/**
 * sistema furbo per oggetti che hanno tanti argomenti
 */

class Prova{

    constructor(obj){
        this.gusto = obj.gusto
        this.tipo = obj.tipo
        this.prezzo = obj.prezzo
    
        
    }
}

let info = {
    gusto: 'Diavola',
    tipo: 'Napoletana',
    prezzo: 6
}
let prova = new Prova(info)

console.log(prova)

/**
 * ereditarietà
 */

class Persona{

    constructor(nome,cognome,anni){
        this.nome = nome
        this.cognome = cognome 
        this.anni = anni
        
    }

    presentazione(){
        return`Ciao, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.anni} anni`
    }

}
let persona = new Persona('Mario', 'Rossi',30);
console.log(persona.presentazione());



class Studente extends Persona{
    constructor(nome,cognome,anni,materie){
        super(nome,cognome,anni)//attiva il costruttore della classe genitore
        //valarizzando di fatto le proprieta ed eventualmente lanciando le stesse funzioni
        this.materie = materie
    }
    presentazione(){
        return super.presentazione() + ' e sto studiando le seguenti materie ' + this.materie
    }
}

let studente = new Studente('Maria', 'Rosa',20,['Html','css','js'])
console.log(studente.presentazione());//questo metodo e un  override

s