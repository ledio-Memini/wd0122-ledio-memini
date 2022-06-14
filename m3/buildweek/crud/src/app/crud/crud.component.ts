import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Class } from '../class';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  closeResult!: string;

  constructor(private httpClient: HttpClient, modalService: NgbModal) { }

  

  ngOnInit(): void {

    
  }



  books :Class[]= [
    { 
      id:1,
      title:'Lo straniero',
      body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur'
    },
    { 
      id:2,
      title:'Alla ricerca del tempo perduto',
      body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur'
    },
    { 
      id:3,
      title:'Alla ricerca del tempo perduto',
      body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur'
    },
    { 
      id:4,
      title:'Alla ricerca del tempo perduto',
      body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur'
    },
    { 
      id:5,
      title:'Alla ricerca del tempo perduto',
      body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque aliquid reprehenderit fuga nulla ipsam? Aspernatur'
    }
  ]
  apiUrl:string = ('https://jsonplaceholder.typicode.com/albums')

  delete(id:number):void{

    let index:number = this.books.findIndex(book => book.id === id)
    this.books.splice(index,1)

  }
  visible = false
  visible2 = false

  id:number = 5
  title:string = ''
  body:string = ''

  create(){
    let newbook = new Class (this.id,this.title,this.body)
    this.books.push(newbook)
    this.id++
    this.title = ''
    this.body = ''
  }



  

}
