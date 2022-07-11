import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugattiRoutingModule } from './bugatti-routing.module';
import { BugattiComponent } from './bugatti.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BugattiComponent
  ],
  imports: [
    CommonModule,
    BugattiRoutingModule,
    NgbModule
  ]
})
export class BugattiModule { }
