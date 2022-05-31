import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostComponent } from './active-post/active-post.component';
import { HomeComponent } from './home/home.component';
import { NonactivePostComponent } from './nonactive-post/nonactive-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active-post',
    component: ActivePostComponent
  },
  {
    path: 'nonactive-post',
    component: NonactivePostComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
