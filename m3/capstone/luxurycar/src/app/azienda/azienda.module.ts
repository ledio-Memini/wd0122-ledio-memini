import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AziendaRoutingModule } from './azienda-routing.module';
import { AziendaComponent } from './azienda.component';


@NgModule({
  declarations: [
    AziendaComponent
  ],
  imports: [
    CommonModule,
    AziendaRoutingModule
  ]
})
export class AziendaModule { }
