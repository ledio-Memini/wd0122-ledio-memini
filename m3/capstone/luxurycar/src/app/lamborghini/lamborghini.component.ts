import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icar } from '../icar';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lamborghini',
  templateUrl: './lamborghini.component.html',
  styleUrls: ['./lamborghini.component.scss']
})
export class LamborghiniComponent implements OnInit {

  constructor(private userService: UserService, private httpclient: HttpClient,private router: Router) { }
  modello:any = []
  marca:string = "Lamborghini"
  cars:any = []
  id!:number
  ngOnInit(): void {
    this.getmarca()
  }
  
  getmarca(){
    this.userService.getcar(this.marca)
    .subscribe(res => {
      this.cars = res
    })
  }


}
