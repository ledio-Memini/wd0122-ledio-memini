import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LamborghiniRoutingModule } from './lamborghini-routing.module';
import { LamborghiniComponent } from './lamborghini.component';


@NgModule({
  declarations: [
    LamborghiniComponent
  ],
  imports: [
    CommonModule,
    LamborghiniRoutingModule
  ]
})
export class LamborghiniModule { }
