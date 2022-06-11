import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {
/**
 * REACTIVE FORM
 */


form!:FormGroup


  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    //serve solo a omonitorare gli status change
    this.form = this.fb.group({
        email: this.fb.control(null,[Validators.required , Validators.email, this.emailProibite]),
        password: this.fb.control(null,Validators.required),
        city: this.fb.control(null),
        sports: this.fb.array([]) 
      }) 
      //ricevo lo stream dei capi di stato
      this.form.statusChanges.subscribe(value => console.log(value));
      //ricevo lo stream dei campi di valore
      this.form.valueChanges.subscribe(value => console.log(value));

  }

  addSport(){
    let control = this.fb.control(null);//creo un nuovo form control
    (this.form.get('sports') as FormArray).push(control)
  }
  getSportFields(){
    return (this.form.get('sports') as FormArray).controls
  }

  getFormC(name:string){
    return this.form.get(name)
  }

  listaEmailProibite:string[] = ['test@test.it','prova@prova.it']
  emailProibite = (formControl: FormControl) =>{

    if(this.listaEmailProibite.includes(formControl.value)){
      return { emailProibite : true
    }}
    return null

  }


  submit(){
    console.log(this.form)
    
  }

  emailProibiteAsync = (formControl:AbstractControl)=>{
    return new Promise<ValidationErrors | null>((resolve, reject))=>{
      setTimeout(()=>{
        if(this.listaEmailProibite.includes(formControl.value)){
          return { emailProibite : true
        }}
        return null
      }, 2000)
    }
  }

}

