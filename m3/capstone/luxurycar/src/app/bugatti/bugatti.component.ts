import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bugatti',
  templateUrl: './bugatti.component.html',
  styleUrls: ['./bugatti.component.scss']
})
export class BugattiComponent implements OnInit {

  constructor(private userService: UserService, private httpclient: HttpClient) { }
  
  marca:string = "Bugatti"
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
