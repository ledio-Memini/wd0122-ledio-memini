import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MansoryComponent } from './mansory.component';

const routes: Routes = [{ path: '', component: MansoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MansoryRoutingModule { }
