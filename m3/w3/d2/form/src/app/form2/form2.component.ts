import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  @ViewChild('f',{static:true}) form!:NgForm
  //seleziono l'elemento identificato con #f all'interno del templetate
  //lo affido alla proprieta form
  //{static:true}serve a far si che la proprieta venga valorizzata prima, rendendola disponibile nel metodo ngOnInit(){}

  constructor() { }


  ngOnInit(): void {
    //serve solo a omonitorare gli status change
    this.form.statusChanges?.subscribe(status =>{console.log(status, this.form)})
  }
  setDati(){
    this.form.form.setValue({
      authData: {
        email: "info@test.it",
        password: "password"
      },
      city: "Roma"
    })
  }

  updateCity(){
    this.form.form.patchValue({
      city: 'Milano'
    })
  }

  submit(){
    console.log(this.form)
    
  }

}
