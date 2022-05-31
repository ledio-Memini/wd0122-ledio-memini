import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numbers = [1, 2, 3, 4, 5]


  users:{name:string;lastName:string}[] = [
    { 
      name: 'john',
      lastName:'Doe'
    },
    { 
      name: 'Marta',
      lastName:'Bianchi'
    }
  ]
}
