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

  onsale = [
    {
      nome: 'Ferrari Portofino',
      prezzo: '200.000',
      prezzo1:'160.000',
      src : 'assets/onsale/ferrarionsale.jpg'
    },
    {
      nome: 'Porsche Taycan',
      prezzo: '130.000',
      prezzo1:'100.000',
      src : 'assets/onsale/porscheonsale.jpg'
    },
    {
      nome: 'Maserati Levante',
      prezzo: '120.000',
      prezzo1:'80.000',
      src : 'assets/onsale/maserationsale.jpg'
    }
  ]

  special = [
    {
      nome:'Lamborghini Urus Mansory',
      prezzo: '450.000', 
      src: 'assets/special/lamborghinispecial.jpg'
    },
    {
      nome:'Bugatti Divo',
      prezzo: '5.000.000', 
      src: 'assets/special/bugattispecial.jpg'
    },
    {
      nome:'Rolls-Royce Ghost',
      prezzo: '400.000', 
      src: 'assets/special/ghostspecial.jpg'
    },
  ]

  ngOnInit(): void {
  }
  

}
