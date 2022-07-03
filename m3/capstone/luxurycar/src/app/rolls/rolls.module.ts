import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RollsRoutingModule } from './rolls-routing.module';
import { RollsComponent } from './rolls.component';


@NgModule({
  declarations: [
    RollsComponent
  ],
  imports: [
    CommonModule,
    RollsRoutingModule
  ]
})
export class RollsModule { }
