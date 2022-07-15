import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcarComponent } from './allcar.component';

const routes: Routes = [{ path: '', component: AllcarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllcarRoutingModule { }
