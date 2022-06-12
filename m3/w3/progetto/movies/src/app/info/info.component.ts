import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }
  movies = [
    { 
      nome:'Captain America',
      trama:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur, in sequi, a placeat ipsum beatae tempore earum temporibus saepe amet corrupti facilis consequuntur?',
      durata:'1h 30m'
    },
    { 
      nome:'Hulk',
      trama:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur, in sequi, a placeat ipsum beatae tempore earum temporibus saepe amet corrupti facilis consequuntur?',
      durata:'1h 40m'
    },
    { 
      nome:'Iron Man',
      trama:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur, in sequi, a placeat ipsum beatae tempore earum temporibus saepe amet corrupti facilis consequuntur?',
      durata:'1h 45m'
    }
  ]

  ngOnInit(): void {
  }

  aggiungi(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'il film è stato aggiunto alla lista preferiti',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
