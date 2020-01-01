import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineTransRoutingModule } from './engine-trans-routing.module';
import { EngineTransComponent } from './engine-trans.component';


@NgModule({
  declarations: [EngineTransComponent],
  imports: [
    CommonModule,
    EngineTransRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class EngineTransModule { }
