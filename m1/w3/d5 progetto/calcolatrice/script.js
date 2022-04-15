function aggiungiNumero(bottone){

    let  numero = (bottone.innerHTML);//e una stringa

    let display = document.querySelector('#display');// selezione l elemento con cui andro a interagire
    //display.innerHTML = numero e innertext non funzionano nei form

    display.value += numero// mi aggaggio all elemento contenuto nella variabile display, per modificare l attributo value, provocando l apparizione dei numeri
}

function risultato(){
    let display = document.querySelector('#display');

    let totale = eval(display.value)

    display.value = totale
}
function cancella(){
    let display = document.querySelector('#display');

    display.value = '' 
}
function moltiplicazione(){
    let display = document.querySelector('#display');
    display.value += "*"
}
