import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MansoryRoutingModule } from './mansory-routing.module';
import { MansoryComponent } from './mansory.component';


@NgModule({
  declarations: [
    MansoryComponent
  ],
  imports: [
    CommonModule,
    MansoryRoutingModule
  ]
})
export class MansoryModule { }
