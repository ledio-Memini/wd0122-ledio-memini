

let richiesta = new XMLHttpRequest();//inizializzo l'oggetto

richiesta.open('GET','https://sofin.wp-admin.it/public/api/v1/user')//GET e una chiamata in lettura
//POST e una creazione in scrittura
//PUT e PATCH aggiornano dato esistente del
//DELETE elimina dato

richiesta.onload = function(){
    //console.log(richiesta.response)
}

richiesta.send()


fetch('https://jsonplaceholder.typicode.com/users')//fa tutte le istruzioni sopra
.then(data => data.json())
.then(data => {

    console.log(data)

    for(let user of data){
        let div = document.createElement('div')
        div.innerHTML = user.name
        console.log(user)
        document.querySelector('#target').append(div)
    }
})


//JSON

let j = '{"name":"mario", "eta":30}' //jsonvalidator per vedere se la json che stai scrivendo sia valido

console.log(JSON.parse(j).name)//versione in oggetto

//per convertire un oggetto in stringa dovrei usare JSON.stringify(oggetto)

fetch('prova.json')
.then(data => data.json())
.then(data => console.log(data))
