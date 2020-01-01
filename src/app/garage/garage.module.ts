import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarageRoutingModule } from './garage-routing.module';
import { GarageComponent } from './garage.component';


@NgModule({
  declarations: [GarageComponent],
  imports: [
    CommonModule,
    GarageRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class GarageModule { }
