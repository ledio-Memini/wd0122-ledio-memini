import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ferrari',
  templateUrl: './ferrari.component.html',
  styleUrls: ['./ferrari.component.scss']
})
export class FerrariComponent implements OnInit {

  constructor(private userService: UserService, private httpclient: HttpClient) { }
  
  marca:string = "Ferrari"
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

}
