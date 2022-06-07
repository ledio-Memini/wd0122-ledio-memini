import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';

const routes: Routes = [
  {
    path: "app-form1", 
    component: Form1Component
  },
  {
    path: "app-form2", 
    component: Form2Component
  },
  {
    path: "app-form3", 
    component: Form3Component
  },
  {
    path: "app-form4", 
    component: Form4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
