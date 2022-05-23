var boolean = true;
if (boolean) {
    console.log('ok');
}
var eta = 18;
if (eta < 18) {
    console.log('sei minorenne');
}
else if (eta >= 18 && eta <= 120) {
    console.log('sei maggiorenne');
}
else {
    console.log('Sei antico');
}
var b = true;
console.log(!b); //l operatore ! serve ad invertire il risultato
console.log(!(eta >= 18 || eta <= 20)); //il risultato dentro le parentesi e vero il ! lo rende negativo
