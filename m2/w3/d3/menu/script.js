fetch("menu.json")
.then(res => {
    if(res.ok)
    console.log('caricamento completato');
    return res.json()//trasforma la risposta restituendomi il contenuto della pagina in formato json
    // attenzione: json() si usa solo se il tipo di dato richiesto e json
    //per gli altri si usa text()
    //questo metodo restituisce una promise
    //return manda il json al then successivo
}).then(pizze => {
    console.log(pizze)//res e un array
    console.log(pizze[0])//res[0] e un oggetto

    pizze.forEach(pizza =>{
        document.write(pizza.gusto + '<br>')
        pizza.dimensioni.forEach(d =>{
            document.write(d +',')
        })
        document.write('<hr>')
    })
})


