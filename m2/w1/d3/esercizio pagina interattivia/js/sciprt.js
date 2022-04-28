//Menu dropdown

function menu() {
    document.getElementById('tenda').classList.toggle('mostra');

}

//lista

let lista = document.querySelectorAll('li');

for (var i = 0; i < lista.length; i++) {

    lista[i].addEventListener('mouseover', function() {
        this.classList.add('rosso');
    });

    lista[i].addEventListener('mouseout', function() {
        this.classList.remove('rosso');
    });

    lista[i].addEventListener('click', function() {
        this.classList.toggle('lineacancella');
    });
}
