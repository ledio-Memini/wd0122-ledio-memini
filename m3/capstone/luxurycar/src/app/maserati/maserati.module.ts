import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaseratiRoutingModule } from './maserati-routing.module';
import { MaseratiComponent } from './maserati.component';


@NgModule({
  declarations: [
    MaseratiComponent
  ],
  imports: [
    CommonModule,
    MaseratiRoutingModule
  ]
})
export class MaseratiModule { }
