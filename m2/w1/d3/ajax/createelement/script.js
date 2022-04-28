
//con creaate element genero un elemento HTML in mememoria e lo metto nella variabile
//IN NESSUN MODO QUESTO METODO MOSTRA IL TAG HTML
let div = document.createElement('div');
div.innerHTML = 'test'
div.classList.add('classeProva')

let div2 = document.createElement('div');
div2.innerHTML = 'test2'
div2.classList.add('classeProva')

document.querySelector('#html-generato').append(div);//appendchild aggiunge un tag html dentro la pagina html
document.querySelector('#html-generato').prepend(div2);//prepend mette il tag creato all inizio dell html

//CREARE UNA LISTA INSERENDO DEL TESTO NEL INPUT E CANCELLARE GLI ELEMENTI CHE SI CREANO VOLENDO
let bottone = document.querySelector('#inserisci')
let toDoArea = document.querySelector('#to-do')
let x = 1;

bottone.addEventListener('click',function(){//se clicchi su bottone fa questa cosa
    
    
    let todoWrap = document.createElement('div')
    todoWrap.classList.add('todo')
    
    //prelevo il testo dal campo input e lo inserisco nel div appena generato
    let testo = document.querySelector('#testo')
    todoWrap.innerText = x + '' + testo.value
    x++;
                    //creo un bottone che mi servira per eliminare il todo
                    let close = document.createElement('button')
                    //gli do una classe per lo stile (da fare successivamente)
                    close.classList.add('closeButton')
                    //inserisco il testo del bottone
                    close.innerText = 'elimina'

                    close.addEventListener('click',function(){
                        todoWrap.remove()//remove cancella l elemto dall html
                        //close.parentNode.remove() e un altro metodo per rimuovere

                    })
                    //inserisco il bottone generato dentro all'elemento creato alla riga 22
                    todoWrap.append(close)
    //faccio si che l'elemento generato venga mostrato
    toDoArea.append(todoWrap)

    //svuotare il campo
    testo.value = ''



})
