class Test{

    public readonly name:string;
    public email:string = 'text@example.com'
    //public id:number; siccome ho usato readonly nel costruttore devo eliminare questa riga o me la segnerà come duplicato

    constructor(name:string,readonly id:number){
        this.name = name;
        this.id = id;
    }
    public checkEmail(email:string):void{
        if(this.email == email){
            throw new Error("Email già esistente")
        }
        this.email = email
    }
}



let x = new Test('Giovanna',1)
//x.checkEmail('text@example.com') essendo uguale restituira l errore della riga 13
x.checkEmail('text2@example.com')
console.log(x.id,x.name, x.email)



//x.id = 5; non posso
