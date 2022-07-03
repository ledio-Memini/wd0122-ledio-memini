import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugattiRoutingModule } from './bugatti-routing.module';
import { BugattiComponent } from './bugatti.component';


@NgModule({
  declarations: [
    BugattiComponent
  ],
  imports: [
    CommonModule,
    BugattiRoutingModule
  ]
})
export class BugattiModule { }
