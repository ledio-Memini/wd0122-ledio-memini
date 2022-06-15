import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Class } from '../class';
import { CrudService } from '../crud.service';
import { Ibooks } from '../ibooks';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  closeResult!: string;
  id: number | undefined;

  constructor(private httpClient: HttpClient, private modalService: NgbModal, private crudsrt:CrudService) { }

  

  ngOnInit(): void {

    
  }
  books = [{
    id:'',
    title: '',
    body:''
  }
  ]
  getposts(){
    this.crudsrt.aggiungipost({id:this.id, title:this.title, body:this.body}).subscribe()
  }




  delete(id:number):void{

    //let index:number = this.books.findIndex(book => book.id === id)
    //this.books.splice(index,1)
    this.crudsrt.removepost(id).subscribe(() =>{

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'il post e stato eliminato con successo',
        showConfirmButton: false,
        timer: 1500
      })
    } )

  }

  visible = false
  visible2 = false

  
  title:string = ''
  body:string = ''

  create(){

    this.crudsrt.aggiungipost({title:this.title, body:this.body}).subscribe( (res) => {
      console.log(res)
      res = this.books
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'nuovo post creato con successo',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  

}
