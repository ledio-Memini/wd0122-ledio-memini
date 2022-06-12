import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  datiutente = {
    nome : 'Mario',
    cognome : 'Rossi',
    eta: 32,
    sesso: 'maschio',
    dataRegistrazione: '16/10/2020',
    hobby: 'giocare a calcio'

  }


  /*datiUtente(){
    this.userservice.datiUtente(this.datiutente).subscribe((res:any) =>{
      console.log(res)
      let datiutente1 = res[6].nome 
      console.log(datiutente1)
    })
  }*/
}
