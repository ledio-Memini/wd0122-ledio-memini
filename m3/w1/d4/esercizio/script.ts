fetch("Abbigliamento.json")
.then(res => res.json())
.then(res => {
    
console.log(res)
for(let abbigliamento of res){
class Abbigliamento{
    public id:number ;
    public codprod:number;
    public collezione:string;
    public capo:string;
    public modello:number;
    public quantita:number;
    public colore:string;
    public prezzoivaesclusa:number;
    public prezzoivainclusa:number;
    public disponibilità:string;
    public saldo:number;
    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibilità:string,saldo:number){
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibilità = disponibilità;
        this.saldo = saldo;
    }
    getsaldocapo():number{
        let sconto = ((this.prezzoivainclusa * this.saldo)/100)
        return sconto
    }
    getacquistocapo(){
        let caposcontato = this.prezzoivainclusa - ((this.prezzoivainclusa * this.saldo)/100)
        return caposcontato
    }
}
let abbigliamento1:any = new Abbigliamento(abbigliamento.id,abbigliamento.codprod,abbigliamento.collezione,abbigliamento.capo,abbigliamento.modello,abbigliamento.quantita,abbigliamento.colore,abbigliamento.prezzoivaesclusa,abbigliamento.prezzoivainclusa,abbigliamento.disponibilità,abbigliamento.saldo)

console.log(abbigliamento1)
console.log('sconto: ' + abbigliamento1.getsaldocapo()+'€')
console.log('vestito con sconto applicato: ' +'('+ abbigliamento1.prezzoivainclusa +'€'+ ' - ' + abbigliamento1.getsaldocapo() +'€'+') ' +'= '+ abbigliamento1.getacquistocapo()+'€')
}

})


