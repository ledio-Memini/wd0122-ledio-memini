import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorscheRoutingModule } from './porsche-routing.module';
import { PorscheComponent } from './porsche.component';


@NgModule({
  declarations: [
    PorscheComponent
  ],
  imports: [
    CommonModule,
    PorscheRoutingModule
  ]
})
export class PorscheModule { }
