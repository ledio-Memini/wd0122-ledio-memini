function iniziaShopping() {

    let budget = 1000;
   

    while (budget > 0) {

        let prezzi = Math.floor(Math.random() * 100);

        if (prezzi <= budget) {
            
            budget -= prezzi;

            document.getElementById('mio_budget').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '<p>';
        }

        if (budget < 200) {
            document.getElementById('messaggio').innerHTML = 'hai meno di 200€. se continui cosi finisci sotto un ponte ';
            break;
        }

    }

    

}