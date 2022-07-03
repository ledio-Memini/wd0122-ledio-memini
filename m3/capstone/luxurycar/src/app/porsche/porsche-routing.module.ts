import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorscheComponent } from './porsche.component';

const routes: Routes = [{ path: '', component: PorscheComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorscheRoutingModule { }
