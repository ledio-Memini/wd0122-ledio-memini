//tipi di dato

let str:string = 'Testo';//dato testuale
let num:number = 1000;//dato numerico
let bool:boolean = false;//dato booleano
let obj:object = {};//oggetto
let arr:[] = [];
let strArr:string[] = ['Marco','Lucia','Maria'];
let numArr:number[] = [0,1,2,3];
let objArr:object[] = [{},{},{},{},{},{},{},{},];
let anyArr:any[] = ['Marco',0,{}];
let any:any = 'Ciao'; //qualunque tipo di dato 
let unk:unknown = 12;//dato sconosciuto 

let union:(string|object) = 'test'
union = {};

//funzioni 

function saluta(testo:string):void{
    console.log(testo)
}

function ottieniSaluto(testo:string,tag:string):HTMLElement{
    let t:HTMLElement = document.createElement(tag)
    t.innerHTML = testo
    return t
}
console.log(ottieniSaluto('Ciao','b'));

