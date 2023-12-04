import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CronogramaRoutingModule } from './cronograma-routing.module';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { GenericModule } from '../shared/generic/generic.module';



@NgModule({
  declarations: [
    CronogramaComponent
  ],
  imports: [
    CommonModule,
    CronogramaRoutingModule,
    GenericModule
  ]
})
export class CronogramaModule { }
