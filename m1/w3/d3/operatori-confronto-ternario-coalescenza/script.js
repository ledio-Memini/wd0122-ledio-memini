let num = 5;
let str = 'test';
let bool = true;
let arr = [];
let obj = {};

console.log(
    typeof num,
    typeof str,
    typeof bool,
    typeof arr,
    typeof obj
);
if(typeof num == 'number'){
    console.log('è un numero')
}

let num1 = 1; 
let num2 = '1';

console.log(num1 == num2);//vero anche se i tipi di dato sono diversi ma i valori sono uguali
console.log(num1 === num2);// con 3 uguali controllo anche   l uguaglianza tra i tipi di dato
console.log(num1 != num2); //falso perche il valore è diverso (non uguale)
console.log(num1 !== num2); // non identico

let eta = prompt('scrivi la tua età') || 0; //se l utente annulla l operazione il risultato sarà 0 e non NULL

let conferma = eta >= 18 ? 'sei maggiorenne' : 'sei minorenne'
document.write(conferma);