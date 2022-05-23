var risRandom = document.querySelector('#random');
var gioc1 = document.querySelector('#gioc1');
var gioc2 = document.querySelector('#gioc2');
var contenitore2 = document.querySelector('#contenitore2');
var rigioca = document.querySelector('#rigioca');
var giocatore1 = Math.floor(Math.random() * (100 - 1) + 1);
console.log(giocatore1);
var giocatore2 = Math.floor(Math.random() * (100 - 1) + 1);
console.log(giocatore2);
var random = Math.floor(Math.random() * (100 - 1) + 1);
console.log(random);
gioc1.append(giocatore1);
gioc2.append(giocatore2);
risRandom.append(random);
if (giocatore1 == random) {
    var risultato = 'il giocatore 1 ha vinto ';
    contenitore2.append(risultato);
}
else {
    var scarto1 = Math.abs(random - giocatore1);
}
if (giocatore2 == random) {
    var risultato = 'il giocatore 2 ha vinto ';
    contenitore2.append(risultato);
}
else {
    var scarto2 = Math.abs(random - giocatore2);
}
if (scarto1 < scarto2) {
    var risultato = 'il giocatore 1 ha vinto perchè si e avvicinato di piu al numero';
    contenitore2.append(risultato);
}
else {
    var risultato = 'il giocatore 2 ha vinto perchè si e avvicinato di piu al numero';
    contenitore2.append(risultato);
}
rigioca === null || rigioca === void 0 ? void 0 : rigioca.addEventListener('click', function () {
    window.location.reload();
});
