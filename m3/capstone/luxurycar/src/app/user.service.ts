import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icar } from './icar';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  apiUrlRegister:string = 'http://localhost:4201/register';
  apiUrl:string = 'http://localhost:4201/users';
  apicar = "http://localhost:4201/car"

  registerUser(user:any) {
    return this.http.post(this.apiUrlRegister, user)
  }

  getUser(id:number) {
    return this.http.get(this.apiUrl+'/'+id)//'http://localhost:4201/users/1'
  }
  datiUtente(datiutente:any){
    return this.http.get(this.apiUrl, datiutente)
  }

  getcar(marca:string){
    return this.http.get(this.apicar + '?marca=' + marca)
  }

  getmodello(id:number){
    return this.http.get<Icar>(this.apicar + '/' + id)
  }

  getall(){
    return this.http.get(this.apicar)
  }


}
