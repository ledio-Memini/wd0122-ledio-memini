import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AziendaRoutingModule } from './azienda-routing.module';
import { AziendaComponent } from './azienda.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AziendaComponent
  ],
  imports: [
    CommonModule,
    AziendaRoutingModule,
    NgbModule
  ]
})
export class AziendaModule { }
