let risRandom = document.querySelector('#random')
let gioc1 = document.querySelector('#gioc1')
let gioc2 = document.querySelector('#gioc2')
let contenitore2 = document.querySelector('#contenitore2')
let rigioca = document.querySelector('#rigioca')

var giocatore1:number = Math.floor(Math.random() * (100 - 1) + 1)
console.log(giocatore1)
var giocatore2:number = Math.floor(Math.random() * (100 - 1) + 1)
console.log(giocatore2)
var random:number = Math.floor(Math.random() * (100 - 1) + 1)
console.log(random)

gioc1.append(giocatore1)
gioc2.append(giocatore2)

risRandom.append(random)

if(giocatore1 == random){
    let risultato = 'il giocatore 1 ha vinto'
    contenitore2.append(risultato)
}else{
    var scarto1:number = Math.abs(random - giocatore1);
}
if(giocatore2 == random){
    let risultato = 'il giocatore 2 ha vinto'
    contenitore2.append(risultato)
}else{
    var scarto2:number = Math.abs(random - giocatore2);
}
if(scarto1 < scarto2){
    let risultato = 'il giocatore 1 ha vinto perchè si e avvicinato di piu al numero'
    contenitore2.append(risultato)
}else{
    let risultato = 'il giocatore 2 ha vinto perchè si e avvicinato di piu al numero'
    contenitore2.append(risultato)
}

rigioca?.addEventListener('click',function(){
    window.location.reload()
})











