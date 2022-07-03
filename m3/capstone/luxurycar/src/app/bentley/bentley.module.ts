import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BentleyRoutingModule } from './bentley-routing.module';
import { BentleyComponent } from './bentley.component';


@NgModule({
  declarations: [
    BentleyComponent
  ],
  imports: [
    CommonModule,
    BentleyRoutingModule
  ]
})
export class BentleyModule { }
