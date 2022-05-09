let db = [];
let testo = document.querySelector('#testo')
let bottone = document.querySelector('#bottone')
let lista = document.querySelector('#lista')

bottone.addEventListener('click', function(){

    let div = document.createElement('div')
    div.innerHTML = testo.value
    db.push(testo.value)
    localStorage.setItem('lista',JSON.stringify(db))//per visualizzare bisogna ispezionare la pagina andare su applicazione poi local storage ed entrare nell'indirizzo ip
    div.classList.add('alert','alert-success')

    lista.append(div);

    testo.value = ''

})