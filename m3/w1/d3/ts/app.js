var Test = /** @class */ (function () {
    //public id:number; siccome ho usato readonly nel costruttore devo eliminare questa riga o me la segnerà come duplicato
    function Test(name, id) {
        this.id = id;
        this.email = 'text@example.com';
        this.name = name;
        this.id = id;
    }
    Test.prototype.checkEmail = function (email) {
        if (this.email == email) {
            throw new Error("Email già esistente");
        }
        this.email = email;
    };
    return Test;
}());
var x = new Test('Giovanna', 1);
//x.checkEmail('text@example.com') essendo uguale restituira l errore della riga 13
x.checkEmail('text2@example.com');
console.log(x.id, x.name, x.email);
//x.id = 5; non posso
function add(a) {
    return a;
}
var res = add('Ciao');
console.log(res);
var res2 = add(654);
console.log(res2);
var CustomArray = /** @class */ (function () {
    function CustomArray() {
        this.arr = [];
    }
    CustomArray.prototype.getItems = function () {
        return this.arr;
    };
    CustomArray.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    CustomArray.prototype.removeItem = function (item) {
        var start = this.arr.indexOf(item);
        if (start != -1) {
            this.arr.splice(start, 1); //il primo parametro togli quell elemento indicato poi il secondo elemnto dice quante ne vuoi eliminare da li in poi
        }
    };
    CustomArray.prototype.removeItem2 = function (item) {
        this.arr = this.arr.filter(function (i) { return i !== item; }); //altro metodo per eliminare
    };
    return CustomArray;
}());
var array = new CustomArray();
console.log(array);
array.addItem('Ciao1');
array.addItem('Ciao2');
array.addItem('Ciao3');
console.log(array.getItems());
array.removeItem2('Ciao2');
console.log(array.getItems());
var arrayNum = new CustomArray();
console.log(arrayNum);
arrayNum.addItem(1);
arrayNum.addItem(2);
arrayNum.addItem(3);
console.log(arrayNum.getItems());
arrayNum.removeItem(2);
console.log(arrayNum.getItems());
var k = {
    key: 'id',
    value: 0
};
var d = {
    key: 5,
    value: 0
};
//TUPLE/////////////////////
var user = [1, 'Giovanna']; //il punto di domanda rentde facoltatico il parametro senza e obbligatorio inserire un valore a tutti i parametri
console.log(user);
var id = user[0], nome = user[1], obj = user[2];
console.log(id, nome, obj); //obj e undefined perchè non e definito alla riga 75
//matrici TUPLE///////////////
var user1 = [4, 'Marco'];
var userArr = [
    [1, 'Mario'],
    [2, 'Luisa'],
    [3, 'Antonella'],
    user1
];
userArr.push([5, 'Sara']);
console.log(userArr);
//# sourceMappingURL=app.js.map