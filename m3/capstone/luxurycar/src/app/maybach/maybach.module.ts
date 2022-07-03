import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaybachRoutingModule } from './maybach-routing.module';
import { MaybachComponent } from './maybach.component';


@NgModule({
  declarations: [
    MaybachComponent
  ],
  imports: [
    CommonModule,
    MaybachRoutingModule
  ]
})
export class MaybachModule { }
