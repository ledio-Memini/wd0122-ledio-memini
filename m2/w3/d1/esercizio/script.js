 class Todo{

    constructor(_target){
       this.target = document.querySelector(_target)
       this.nome
       this.cognome
       this.dataDiNascita
       this.bottone
       this.lista
       this.creaHTMLBase()
 
       this.bottone.addEventListener('click',() => {
          this.creaHTMLElementoLista()
       })
    }
 
    creaHTMLBase(){
        var node = document.createTextNode("nome:");

       let input = document.createElement('input')
       input.type = 'text'
       input.classList.add('form-control')
       input.placeholder = 'nome'
 
       this.nome = input
       
       var node1 = document.createTextNode("cognome:");
       let input1 = document.createElement('input')
       input1.type = 'text'
       input1.classList.add('form-control')
       input1.placeholder = 'cognome'
 
       this.cognome = input1

       var node2 = document.createTextNode("data di nascita:");
       let input2 = document.createElement('input')
       input2.type = 'datetime-local'
       input2.classList.add('form-control')
       input2.placeholder = 'data di nascita'
 
       this.dataDiNascita = input2
 
 
       let button = document.createElement('button')
       button.innerHTML = 'Inserisci'
       button.classList.add('btn','btn-primary')
 
       this.bottone = button
 
       let areaTarget = document.createElement('div')
       this.lista = areaTarget
 
       this.target.append(node, input, node1, input1, node2, input2, button, areaTarget)
    }
 
    creaHTMLElementoLista(){
       let div  = document.createElement('div')
       let node = document.createTextNode("nome:");
       div.innerHTML = this.nome.value
       div.classList.add('alert','alert-success')


       this.lista.append(node)
       this.lista.append(div)
       this.nome.value = ''

       let node1 = document.createTextNode("cognome:");
       let div1  = document.createElement('div')
       div1.innerHTML = this.cognome.value
       div1.classList.add('alert','alert-success')

       this.lista.append(node1)
       this.lista.append(div1)
       this.cognome.value = ''

       let node2 = document.createTextNode("data di nascita:");
       let div2  = document.createElement('div')
       div2.innerHTML = this.dataDiNascita.value
       div2.classList.add('alert','alert-success')

       this.lista.append(node2)
       this.lista.append(div2)
       this.dataDiNascita.value = ''

       let node3 = document.createTextNode("utente successivo:");
       let hr = document.createElement('hr')
       hr.classList.add('style')
       this.lista.append(node3)
       this.lista.append(hr)
    }
 
    eliminaHTMLElementoLista(genitore){
       let close = document.createElement('button')
       close.innerHTML = 'Fatto'
 
       close.addEventListener('click',function(){
          genitore.remove()
       })
 
       return close;
    }
 
 }
 new Todo('#todo')