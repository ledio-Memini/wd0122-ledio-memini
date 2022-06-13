import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  
  
  getAlbums():Observable <Object>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums')
  }
  ngOnInit(): void {
    this.getAlbums().subscribe(this.callback)
    console.log(this.books)
    
  }
  callback = (res:any) => {
    console.log(res)
  }


  books = [
    { 
      nome:'Lo straniero',
      trama:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur',
      id:1
    },
    { 
      nome:'Alla ricerca del tempo perduto',
      trama:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur',
      id:2
    },
    { 
      nome:'Il processo',
      trama:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur',
      id:3
    },
    { 
      nome:'Il piccolo principe',
      trama:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur',
      id:4
    },
    { 
      nome:'Il vecchio e il mare',
      trama:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur',
      id:5
    }
  ]
  apiUrl:string = ('https://jsonplaceholder.typicode.com/albums')

}
