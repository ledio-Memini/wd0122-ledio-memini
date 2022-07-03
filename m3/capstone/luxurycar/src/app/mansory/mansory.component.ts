import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mansory',
  templateUrl: './mansory.component.html',
  styleUrls: ['./mansory.component.scss']
})
export class MansoryComponent implements OnInit {
  
  constructor(private userService: UserService, private httpclient: HttpClient) { }
  
  marca:string = "Mansory"
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
