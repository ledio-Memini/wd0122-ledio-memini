import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LamborghiniRoutingModule } from './lamborghini-routing.module';
import { LamborghiniComponent } from './lamborghini.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LamborghiniComponent
  ],
  imports: [
    CommonModule,
    LamborghiniRoutingModule,
    NgbModule
  ]
})
export class LamborghiniModule { }
