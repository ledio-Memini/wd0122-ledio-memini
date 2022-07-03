import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FerrariRoutingModule } from './ferrari-routing.module';
import { FerrariComponent } from './ferrari.component';


@NgModule({
  declarations: [
    FerrariComponent
  ],
  imports: [
    CommonModule,
    FerrariRoutingModule
  ]
})
export class FerrariModule { }
