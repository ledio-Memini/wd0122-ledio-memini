// funzione anonima da sola cosi è inutile

/*function(){
    alert('questo alert non si vedra')
}
*/
let bottone = document.getElementById('bottone')
//bottone.onclick = miaFunzione; // quando si clicca il bottone si invoca la funzione


function miaFunzione(){
    return
    console.log('funzione invocata')
}

function trasformaGrasseto(s){
    return '<b>'+s+'</b>'
}

let saluto= 'Ciao'
document.write(saluto);
document.write(trasformaGrasseto(saluto));


// funzioni parametriche

function getSommaPro(a,b){
    return a + b;
}
function moltiplica(a,b){
    return a * b;
}

let res1 = getSommaPro(3,6);
let res2 = getSommaPro(40,70);
console.log(res1);

let res3 = moltiplica(res1,res2);
console.log(res3);

function moltiplica2(a,b,c = 1){// se non darò un valore al parametro c il suo valore di default sarà 5
    return a * b * c;
}

moltiplica2(2,3) // risultato 2 * 3 * 5
moltiplica2(2,3,8)

function moltiplica3(a,b,c){// se non darò un valore al parametro c il suo valore di default sarà 5
    let terzoValore = c || 5
    return a * b * terzoValore;
}

let zeta = moltiplica3(3,4)
console.log(zeta)

function moltiplica4(a,b,c){// se non darò un valore al parametro c il suo valore di default sarà 5
    if(c == undefined){
        return a * b * c;
    }else{
        return a * b;
    }
}


function moltiplica5(a,b,c){// se non darò un valore al parametro c il suo valore di default sarà 5
    let res;
    if(c !== undefined){
        res = a * b * c;
    }else{
        res = a * b
    }
    return res;
}

(function(){
    console.log('questo log adesso si vedra')
}
)()

function saluto2(){
    let s = 'Ciao, '
    function nome(){
        let frase = s + 'Mario'
        return frase;
    }

    return nome();
}

console.log(saluto2());


function closure(a){

    return function(b){
        return function(c){
            return a * b * c
        }
    }

}

let risultato = closure(2)(4)(3)
console.log(risultato);

/*
funzioni freccia
*/

function dividi(){ //funzione normale
    return 20 / 2;
}

let divisione = () => 20 / 2; //funzione freccia. il return è implicito
console.log(divisione());

let incrementa = a => a+1; // con un solo parametro le parentesi tonde sono facoltative
console.log(incrementa(4));

let divisionePro = (a,b) => a / b; //con due parametri le parentesi tonde sono obbligatorie
console.log(divisionePro(100,2))

let divisioneProLog = (a,b) => console.log(a*b) //il return implicito non mi crea problemi se non uso la funzione per restituire dati
divisioneProLog(7,7)

let divisioneProEvolution = (a,b) => {// con la presenza delle graffe il return non è implicato
    let res = a / b;
    document.write(res)
    return res
}
divisioneProEvolution(250,12)




