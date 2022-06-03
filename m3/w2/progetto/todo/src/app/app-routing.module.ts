import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiComponent } from './completati/completati.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'app-todo',
    component: TodoComponent
  },
  {
    path: 'app-completati',
    component: CompletatiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
