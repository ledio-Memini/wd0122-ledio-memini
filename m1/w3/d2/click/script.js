function cambiaSfondo(e){

    let colore = e.getAttribute("data-colore");
    console.log(colore);
    if(e.style.backgroundColor == ''){
        e.style.backgroundColor = colore;
    }
    else{
        e.style.backgroundColor = '';
    }
}



