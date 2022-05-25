function add<G>(a:G):G{

    return a;
}

let res = add<string>('Ciao')
console.log(res)

let res2 = add<number>(654)
console.log(res2)

class CustomArray<T>{
    private arr:T[] = []

    getItems():T[]{
        return this.arr;
    }

    addItem(item:T):void{
        this.arr.push(item);
    }

    removeItem(item:T){
        let start = this.arr.indexOf(item)

        if(start != -1){
        this.arr.splice(start,1)//il primo parametro togli quell elemento indicato poi il secondo elemnto dice quante ne vuoi eliminare da li in poi
        }
    }
    removeItem2(item:T){
        this.arr = this.arr.filter((i:T) => i !== item);//altro metodo per eliminare
    }

}

let array = new CustomArray<string>();
console.log(array)

array.addItem('Ciao1');
array.addItem('Ciao2');
array.addItem('Ciao3');
console.log(array.getItems())
array.removeItem2('Ciao2')
console.log(array.getItems())

let arrayNum = new CustomArray<number>();
console.log(arrayNum)

arrayNum.addItem(1);
arrayNum.addItem(2);
arrayNum.addItem(3);
console.log(arrayNum.getItems())
arrayNum.removeItem(2)
console.log(arrayNum.getItems())

//generics multipli/////////////////////////

interface KeyValue<T,U>{
    key:T
    value:U
}

let k:KeyValue<string,number> = {
    key : 'id',
    value : 0
}

let d:KeyValue<number,number> = {
    key : 5,
    value : 0
}

//TUPLE/////////////////////

let user:[number, string, any?] = [1,'Giovanna'];//il punto di domanda rentde facoltatico il parametro senza e obbligatorio inserire un valore a tutti i parametri
console.log(user)

let [id,nome,obj] = user

console.log(id, nome ,obj)//obj e undefined perchè non e definito alla riga 75



//matrici TUPLE///////////////
let user1:[number, string] = [4,'Marco'];

let userArr:[number,string][] = [//array di array
    [1,'Mario'],
    [2,'Luisa'],
    [3,'Antonella'],
    user1
]

userArr.push([5,'Sara'])

console.log(userArr)




