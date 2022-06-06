import { Component } from '@angular/core';
import { Foto } from './foto';
import { FotoService } from './foto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  foto:Foto[] =[]

  constructor(private fotoService: FotoService){}

  fetchUser(){

  this.fotoService.getFoto().subscribe(res => {

    this.foto = res
  })
}
}
