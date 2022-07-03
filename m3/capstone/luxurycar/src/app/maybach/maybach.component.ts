import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-maybach',
  templateUrl: './maybach.component.html',
  styleUrls: ['./maybach.component.scss']
})
export class MaybachComponent implements OnInit {

  constructor(private userService: UserService, private httpclient: HttpClient) { }
  
  marca:string = "Maybach"
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
