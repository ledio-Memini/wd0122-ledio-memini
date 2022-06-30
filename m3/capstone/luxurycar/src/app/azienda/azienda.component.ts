import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azienda',
  templateUrl: './azienda.component.html',
  styleUrls: ['./azienda.component.scss']
})
export class AziendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  staffs = [
    {
      nome: 'Ledio Memini',
      src:'assets/staff/elon.jpg', 
      prof:'CEO', 
      num: 3458903435
  
    },
    {
      nome: 'Jordan Belfort',
      src:'assets/staff/jordan.jpg', 
      prof:'Direttore marketing', 
      num: 3458902323
  
    },
    {
      nome: 'Warren Buffet',
      src:'assets/staff/warren.jpg', 
      prof:'Direttore vendite', 
      num: 3458905666
  
    },
    {
      nome: 'Jeff Bezos',
      src:'assets/staff/Jeff.jpg', 
      prof:'Manager', 
      num: 3458907878
  
    },
  ]

}
