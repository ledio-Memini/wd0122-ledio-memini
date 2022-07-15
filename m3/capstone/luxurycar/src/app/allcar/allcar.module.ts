import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllcarRoutingModule } from './allcar-routing.module';
import { AllcarComponent } from './allcar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllcarComponent
  ],
  imports: [
    CommonModule,
    AllcarRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class AllcarModule { }
