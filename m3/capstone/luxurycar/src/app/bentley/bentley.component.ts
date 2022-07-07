import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bentley',
  templateUrl: './bentley.component.html',
  styleUrls: ['./bentley.component.scss']
})
export class BentleyComponent implements OnInit {

  constructor(private userService: UserService, private httpclient: HttpClient) { }
  

  marca:string = "Bentley"
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
