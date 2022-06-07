import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form!:FormGroup


  constructor() { }


  ngOnInit(): void {
    //serve solo a omonitorare gli status change
    this.form = new FormGroup({
        email: new FormControl(null,[Validators.required ]),
        password: new FormControl(null,Validators.required),
        city: new FormControl(null),
        sports: new FormArray([]) 
      }) 

  }

  addSport(){
    let control = new FormControl(null);//creo un nuovo form control
    (this.form.get('sports') as FormArray).push(control)
  }
  getSportFields(){
    return (this.form.get('sports') as FormArray).controls
  }

  getFormC(name:string){
    return this.form.get(name)
  }


  submit(){
    console.log(this.form)
    
  }

}
