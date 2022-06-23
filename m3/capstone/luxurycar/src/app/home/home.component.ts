import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    {
      nome: 'lamborghini Huracan',
      prezzo: '200.000',
      src :'assets/inevidenza/lamboevidenza.jpg'
    },
    {
      nome: 'Bugatti Chiron',
      prezzo: '2.500.000',
      src :'assets/immaginelogin/Bugattilogin.jpg'
    },
    {
      nome: 'Ferrari Roma',
      prezzo: '250.000',
      src :'assets/inevidenza/ferrarievidenza.jpg'
    }

    
  ]

  ngOnInit(): void {
  }
  

}
