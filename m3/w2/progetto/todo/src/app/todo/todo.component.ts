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


  id:number = 5
  todos:string = ''
  completed:boolean = false

  save(){
    let newTodo = new Class(this.id,this.todos,this.completed)
    this.todosService.addtodo(newTodo)
    this.id++
    this.todos = ''
  }
  rimuovi(){

    this.todosService.remove(this.id)
    console.log(this.id)
  }

  

}
