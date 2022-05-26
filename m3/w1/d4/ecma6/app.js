"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let lista = [1, 2, 3, 4];
let [n1, , , n4] = lista;
console.log(n1, n4);
//destrutturazione oggetti 
let oggetto = {
    n: 'Marco',
    nazione: 'Italia'
};
let { n, nazione } = oggetto;
console.log(n, nazione);
let bottone = document.querySelector('#myform button');
bottone === null || bottone === void 0 ? void 0 : bottone.addEventListener('click', function (e) {
    e.preventDefault();
    let fields = Array.from(document.querySelectorAll('#myform input'));
    let values = fields.map((f) => f.value);
    console.log(fields);
    let [name, lastname, password] = values;
    let valid = true;
    if (password.length < 8) {
        valid = false;
    }
    for (let field of fields) {
        if (!field.value) {
            valid = false;
        }
    }
    if (valid) {
        //invia dati
    }
});
function call() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://628f5a21dc478523653ef20c.mockapi.io/api/v1/users';
        let response = yield fetch(url);
        /**
         *  let all = promise.All([
         *      fetch(urlutenti),
         *      fetch(urlIndirizzi),
         *      fetch(urlnumeritelefono),
         *
         * ])
         */
        let json = yield response.json();
        let { avatar, name } = json[0];
        console.log(avatar, name);
    });
}
call();
//concatenamento
let nome = 'Mario';
let saluta = 'ciao ' + nome + ', come stai?';
//template literal(interpolazione di stringhe)
let saluto2 = `ciao ${nome}, come stai?`;
let arr = [10, 20, 30];
let moltiplicazione = arr.map((n) => n * 2);
console.log(moltiplicazione);
let strArr = ['ciao', 'ciao2', 'ciao3',];
let strArrBold = strArr.map((s) => `<b>${s}</b>`);
console.log(strArrBold);
let numbers = [10, 20, 30, 40];
let foundNumbers = numbers.filter((n) => n > 10);
console.log(foundNumbers);
let foundNumber = numbers.find((n) => n == 10);
console.log(foundNumber);
let arrrrr = [1, 2, 3];
let arrrrr2 = [4, 5, 6];
let spread = [...arrrrr, ...arrrrr2]; //concatenamento con i tre puntini
console.log(spread);
function somma(...numeri) {
    let totale = 0;
    numeri.forEach((n) => totale += n);
    console.log(numeri);
    return totale;
}
somma(2, 3, 6, 10);
//# sourceMappingURL=app.js.map