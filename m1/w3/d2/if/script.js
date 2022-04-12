
let eta = prompt('quanti anni hai?');
if(eta >= 18 && eta <= 120){ //&& concatena piu condizioni
    document.write('sei maggiorenne<br>')
}else if(eta > 120){
    document.write('sei antico<br>')
}
else{
    location.href = 'https://it.peppapig.com/'
}

console.log(eta >= 18 && eta <=120)

let condizione = true;
if(!condizione){ // ! = not cioe il contrario di una condizione che abbiamo impostato
    document.write('è vera')
}

