abstract class Veicoli{

    public ruote:number = 4;

    public marca:string;
    public modello:string;

    protected prezzo:number;

    public tipo:string;

    
    constructor(ruote:number,marca:string,modello:string,prezzo:number,tipo:string){
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo
        
    }
    dettagliVeicolo(){
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;
    }
    public abstract speed:number
    public abstract aumentaVelocita(vel:number):void
        
    
}

//let veicoli = new Veicoli(3,'Piaggio','',1500,'apecar');//non si puo fare perche la classe veicoli e astratta quindi una classde astratta non puo creare istanze

class Automobile extends Veicoli{
    public speed:number = 0;

    public aumentaVelocita(vel?:number):void{
        if(!vel){
            this.speed++;
        }else{
            this.speed += vel
        }
    }
    public riduciVelocita(vel?:number):void{
        if(!vel){
            this.speed--;
        }else{
            this.speed -= vel
        }
    }


}

let veicoli = new Automobile(3,'Piaggio','',1500,'apecar');

veicoli.aumentaVelocita();
veicoli.aumentaVelocita(5);
veicoli.riduciVelocita(3);
veicoli.riduciVelocita(3);

console.table(veicoli)
console.table(veicoli.dettagliVeicolo())