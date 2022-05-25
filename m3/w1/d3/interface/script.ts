interface IVeicoli{
    //public speed:number//no modificaori visibilita(public private protected)
    aumentaVelocita(vel:number):void;
    riduciVelocita(vel:number):void;
}
interface IDettagli{
    ruote:number;
    marca:string;
    modello:string;
    dettagliVeicolo():string
}
class Automobili implements IVeicoli,IDettagli{

    public ruote:number 

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
    speed:number 

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
    
    dettagliVeicolo(){
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;
    }
}
let veicolo = new Automobili(4,'mini','cooper',20000,'automobile')

veicolo.aumentaVelocita(5);
console.table(veicolo)