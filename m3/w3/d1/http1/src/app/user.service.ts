import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  apiUrl = 'https://reqres.in/api/users'
  getUsers(){
    return this.http.get<{data:User[]}>(this.apiUrl + '?page=2',{
      headers: new HttpHeaders({'Custom-header': 'ciao mondo'})
    })
    .pipe(
      map(res => res.data)
    )

  }

  createUser(newUser: User){
    return this.http.post<User>(this.apiUrl,newUser)
  }
  updateUser(newUser:User){
    return this.http.patch<User>(this.apiUrl,newUser)
  }
  deleteUser(id:number){
    return this.http.delete(this.apiUrl + '/' + id)
  }

}
