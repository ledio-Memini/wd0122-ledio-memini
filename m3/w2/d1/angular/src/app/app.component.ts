import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ciao';

  arr:number[] = [1,2,3,4,5,6]

  constructor(){
    console.log('ciao')
  }
  saluta(){
    alert('ciao')
  }
}
