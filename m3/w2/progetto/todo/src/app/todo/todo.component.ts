import { Component, OnInit } from '@angular/core';
import { Class } from '../class/class';
import { TodosService } from '../service/todos.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo!:Class[]
  allTodos:[] = []

  constructor(private todosService:TodosService){

  }
  
  ngOnInit(): void {
    this.todo = this.todosService.todo
  }


  newId:number = 5
  newTodo:string = ''
  newcompleted:boolean = false

  save(){
    let newTodo = new Class(this.newId,this.newTodo,this.newcompleted)
    this.todosService.addtodo(newTodo)
    this.newId++
    this.newTodo = ''
  }
  modifica(){
    this.newcompleted = !this.newcompleted
    console.log(this.newcompleted)
  }

  

}
