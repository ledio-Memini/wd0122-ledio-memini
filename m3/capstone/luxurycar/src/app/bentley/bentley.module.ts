import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BentleyRoutingModule } from './bentley-routing.module';
import { BentleyComponent } from './bentley.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BentleyComponent
  ],
  imports: [
    CommonModule,
    BentleyRoutingModule,
    NgbModule
  ]
})
export class BentleyModule { }
