import SuperForms from "./Modules/SuperForms.js";

let nameOptions = {
    type: "text" , name: 'name' , classes: 'form-control'
}
let name = SuperForms.createHTMLInputElement(nameOptions)

let pswOptions = {
    type: "password" , classes: 'form-control', placeholder:'password'
}
let password = SuperForms.createHTMLInputElement(pswOptions)
document.querySelector('body').append(name,password);