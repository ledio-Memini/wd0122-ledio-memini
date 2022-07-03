import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BentleyComponent } from './bentley.component';

const routes: Routes = [{ path: '', component: BentleyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BentleyRoutingModule { }
