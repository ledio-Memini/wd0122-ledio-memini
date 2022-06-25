import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AziendaComponent } from './azienda.component';

const routes: Routes = [{ path: '', component: AziendaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AziendaRoutingModule { }
