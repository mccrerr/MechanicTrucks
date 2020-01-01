import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChassisRoutingModule } from './chassis-routing.module';
import { ChassisComponent } from './chassis.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChassisComponent],
  imports: [
    CommonModule,
    ChassisRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class ChassisModule { }
