import { Component, OnInit } from '@angular/core';
import { Class } from '../class/class';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  todo!:Class[]

  constructor(private todosService:TodosService) { }

  ngOnInit(): void {
    this.todo = this.todosService.todo
  }

}
