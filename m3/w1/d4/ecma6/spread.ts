let arrrrr:number[] =[1,2,3]
let arrrrr2:number[] =[4,5,6]

let spread:number[] = [...arrrrr,...arrrrr2]//concatenamento con i tre puntini


console.log(spread)

function somma(...numeri:number[]){

    let totale = 0

    numeri.forEach((n:number) => totale += n)
    console.log(numeri)
    return totale
    
}

somma(2,3,6,10)