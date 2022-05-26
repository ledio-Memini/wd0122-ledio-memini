type Combinable = number | string ;

type ConversionDescriptior = boolean | string;

function Combine(input1:Combinable, input2:Combinable){
    
    let result;

    if(typeof input1 === 'number' && typeof input2 === 'number' ){

        result = Number(input1) + Number(input2);

    }else{
        result = input1.toString() + String(input2);
    }
    return result;
}

let resNum = Combine(1,1)
console.log(resNum)

let resStr = Combine('1',+1)
console.log(resStr)

//tipi di intersezione

type Admin = {
    name: string,
    privileges : string[]
}

type Employee = {
    names:number;
    startDate: Date;
}
type ElevatedEmployee = Admin & Employee //in questa maniera li sto intersecando

const e1:ElevatedEmployee ={
    name: 'Max',
    names:12,
    privileges: ['create-server'],
    startDate: new Date()
}

console.log(e1)

/*
interface ITest{
    nome: string;
    cognome: string;
}

let persona:ITest = {
    nome:'Mario',
    cognome:'Rossi',
}*/