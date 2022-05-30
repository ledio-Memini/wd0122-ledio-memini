import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Progetto 1';
  nomi:any[] = [
    {nome:"Ledio", cognome:"Memini", id:0},
    {nome:"Ledio1", cognome:"Memini1", id:1}
  ];

  utenteSelezionato = {nome:"Ledio1", cognome:"Memini1", id:1}

  ngOnInit(){
    fetch("http://jsonplaceholder.typecode.com/users").then(res=>res.json()).then(res=>{


    })
  }
  elimina(id:number){

  }
  aggiungi(){

  }
  details(id:number){

  }
}
