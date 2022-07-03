import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaseratiComponent } from './maserati.component';

const routes: Routes = [{ path: '', component: MaseratiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaseratiRoutingModule { }
