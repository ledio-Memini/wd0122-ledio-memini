import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-porsche',
  templateUrl: './porsche.component.html',
  styleUrls: ['./porsche.component.scss']
})
export class PorscheComponent implements OnInit {

  constructor(private userService: UserService, private httpclient: HttpClient) { }
  
  marca:string = "Porsche"
  cars:any = []
  ngOnInit(): void {
    this.getmarca()
  }
  
  getmarca(){
    this.userService.getcar(this.marca)
    .subscribe(res => {
      this.cars = res
    })
  }
  contatto(){
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'la tua richiesta e stata inviata. un nostro agente la contatterà entro 10 minuti',
      showConfirmButton: false,
      timer: 4000
    })
  }

}
