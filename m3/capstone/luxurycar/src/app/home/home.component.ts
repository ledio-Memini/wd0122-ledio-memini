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
      src :'assets/inevidenza/lamboevidenza.jpg',
      router: '/lamborghini'
    },
    {
      nome: 'Bugatti Chiron',
      prezzo: '2.500.000',
      src :'assets/immaginelogin/Bugattilogin.jpg',
      router: '/bugatti'
    },
    {
      nome: 'Ferrari Roma',
      prezzo: '250.000',
      src :'assets/inevidenza/ferrarievidenza.jpg',
      router: '/ferrari'
    }

    
  ]

  onsale = [
    {
      nome: 'Ferrari Portofino',
      prezzo: '200.000',
      prezzo1:'160.000',
      src : 'assets/onsale/ferrarionsale.jpg',
      router: '/ferrari'
    },
    {
      nome: 'Porsche Taycan',
      prezzo: '130.000',
      prezzo1:'100.000',
      src : 'assets/onsale/porscheonsale.jpg',
      router: '/porsche'
    },
    {
      nome: 'Maserati Levante',
      prezzo: '120.000',
      prezzo1:'80.000',
      src : 'assets/onsale/maserationsale.jpg',
      router: '/maserati'
    }
  ]

  special = [
    {
      nome:'Lamborghini Urus Mansory',
      prezzo: '450.000', 
      src: 'assets/special/lamborghinispecial.jpg',
      router: '/mansory'
    },
    {
      nome:'Bugatti Divo',
      prezzo: '8.000.000', 
      src: 'assets/special/bugattispecial.jpg',
      router: '/bugatti'
    },
    {
      nome:'Rolls-Royce Ghost',
      prezzo: '400.000', 
      src: 'assets/special/ghostspecial.jpg',
      router: '/rolls'
    },
  ]

  ngOnInit(): void {
  }
  

}
