import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users:User[] = [];
  isloading: boolean = false;



  newUser= new User('','')

  constructor(private userService: UserService){}

    fetchUser(){
      this.isloading = true;
    this.userService.getUsers().subscribe(res => {
      this.isloading = false
      this.users = res
    })
  }

  salvaUser(){
    this.userService.createUser(this.newUser).subscribe(res => {
      console.log(res)
      let utenteCreato = new User(res.first_name,res.last_name)
      utenteCreato.id = res.id
      this.users.push(utenteCreato)
    })
  }

  eliminaUser(id:number){
    this.userService.deleteUser(id)
    .subscribe(res =>{
      this.users = this.users.filter(u => u.id !=id)
    })
  }

  setUser(user:User){
    this.newUser = user 
  }
  
}
