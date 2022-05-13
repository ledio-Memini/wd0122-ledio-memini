

let tabella = document.querySelector('#utenti')

fetch("/json/users.json")
.then(res => res.json())
.then(res => {

    console.log(res);



    for(let utente of res){
        
        let tr = document.createElement('tr')
        let tdNome = document.createElement('td')
        tdNome.innerHTML = utente.firstName

        let tdCognome = document.createElement('td')
        tdCognome.innerHTML = utente.lastName
        

        let tdGender = document.createElement('td')
        tdGender.innerHTML = utente.gender

        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = utente.email

        let tdImmagine = document.createElement('td')
        tdImmagine.innerHTML = '<img src="' + utente.profileURL + '">'
        
        


        tr.append(tdNome,tdCognome,tdGender,tdEmail,tdImmagine)

        tabella.append(tr)

        
    }

})