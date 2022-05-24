class Car {

    public modello:string;
    public marca:string;
    public colore:string;

    protected prezzo:number
    protected scontoRivenditore:number = 30;

    static stato = 'Italia';

    constructor(mod:string, mar:string, col:string, p:number){
        this.modello = mod
        this.marca = mar
        this.colore = col
        this.prezzo = p
    }
    public  dettaglioAuto():string{
        return this.modello + " " + this.marca + " " + this.colore
    }
    public set cambiaScontoRivenditore(n:number){ 
        this.scontoRivenditore = n
    }//i setter non possono restituire un valore

    public get prezzoFinale():string{
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
    }//il metodo get non puo avere dei parametri

    /*public  prezzoFinale():string{
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
    }
    console.log(fiat.prezzoFinale()) deve avere le parentesi per visualizzarlo
    *///metodo senza get

    public static nazione():void{
        console.log(this.stato);
    }
}//nazione e figlio di Car e non di fiat 


let fiat = new Car('500','Fiat','grigio',10000)
console.log(fiat.modello)
console.log(fiat.prezzoFinale)
//console.log(fiat.scontoRivenditore)non posso accedere alle proprieta protette o private

//fiat.scontoRivenditore = 20 ; non posso accedere alle proprieta protected o private

fiat.cambiaScontoRivenditore = 20//il metodo set modifica anche le proprieta con accesso privato o protette
console.log(fiat.prezzoFinale)
console.log(fiat);

//fiat.nazione()//non posso usarlo cosi
Car.nazione();