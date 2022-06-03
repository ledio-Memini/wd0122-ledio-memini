import { Injectable } from '@angular/core';
import { Class } from '../class/class';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }
  
  todo:Class[]=[
    {
      id: 1,
      title: 'lavare i piatti',
      completed: false
    },
    {
      id: 2,
      title: 'fare la doccia',
      completed: false
    },
    {
      id: 3,
      title: 'fare la spesa',
      completed: true
    },
    {
      id: 4,
      title: 'stendere i panni',
      completed: true
    }
    ]

    recuperotodo(){
      return this.todo
    }
    addtodo(todo:Class):void{
      this.todo.push(todo)
    }
    /*remove(todo: Todo): Promise<number> {
      return new Promise((res, rej) => {
        setTimeout(() => {
          todos = todos.filter((todo) => todo.id !== todo.id);
          res(todo.id);
        }, 2000);
      });
    }*/
    modificatodo():void{


    }
}
