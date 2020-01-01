import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChassisComponent } from './chassis.component';

const routes: Routes = [{ path: '', component: ChassisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChassisRoutingModule { }
