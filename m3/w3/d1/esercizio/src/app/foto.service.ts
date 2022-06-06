import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Foto } from './foto';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http:HttpClient) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/photos'
  getFoto(){
    return this.http.get<{foto:Foto[]}>(this.apiUrl )
    .pipe(
      map((res:any) => res.foto)
      )
    }
  deleteUser(id:number){
    return this.http.delete(this.apiUrl + '/' + id)
    
  }
  
}
