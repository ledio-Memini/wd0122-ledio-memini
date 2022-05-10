export default class SuperForms{
    //questo metodo controlla se l utente ha impostato un attributo per il  campo, dopodiche aggiungi l attributo e setta il valore scelto
    static setIfAttributeExists(input,obj,attr){
        if(obj[attr] != undefined){
            input[attr] = obj[attr]
        }
    }
    
    static createHTMLInputElement(obj, required= false){
        console.log(obj)
        let input = document.createElement('input')
        input.type = obj.type
        
        this.setIfAttributeExists(input, obj, 'name')
        this.setIfAttributeExists(input, obj, 'placeholder')
        this.setIfAttributeExists(input, obj, 'id')


        input.placeholder = obj.placeholder
        if(obj.classes != undefined){
            input.classList.add(obj.classes)//add non accetta array

        }
        if(required){
            input.required = true
        }
        return input

    }
}