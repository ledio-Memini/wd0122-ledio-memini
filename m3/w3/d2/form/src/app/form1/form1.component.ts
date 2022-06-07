import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  @ViewChild('f',{static:true}) form!:NgForm
  //seleziono l'elemento identificato con #f all'interno del templetate
  //lo affido alla proprieta form
  //{static:true}serve a far si che la proprieta venga valorizzata prima, rendendola disponibile nel metodo ngOnInit(){}

  constructor() { }


  ngOnInit(): void {
    //serve solo a omonitorare gli status change
    this.form.statusChanges?.subscribe(status =>{console.log(status, this.form)})
  }

  submit(){
    console.log(this.form)
    
  }

}
