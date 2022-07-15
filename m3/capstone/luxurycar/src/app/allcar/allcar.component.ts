import { Component, OnInit } from '@angular/core';
import { Icar } from '../icar';
import { UserService } from '../user.service';

@Component({
  selector: 'app-allcar',
  templateUrl: './allcar.component.html',
  styleUrls: ['./allcar.component.scss']
})
export class AllcarComponent implements OnInit {

  constructor(private userService: UserService) { }
  marca:string = ''
  page:number = 1
  all:any = [] 
  ngOnInit(): void {
    this.getall()
  }

  getall(){
    this.userService.getall().subscribe(res =>{
      this.all = res
    })
  }

}
