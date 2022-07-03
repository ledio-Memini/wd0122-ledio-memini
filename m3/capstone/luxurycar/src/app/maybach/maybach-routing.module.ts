import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaybachComponent } from './maybach.component';

const routes: Routes = [{ path: '', component: MaybachComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaybachRoutingModule { }
