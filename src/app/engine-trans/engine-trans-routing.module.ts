import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineTransComponent } from './engine-trans.component';

const routes: Routes = [{ path: '', component: EngineTransComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineTransRoutingModule { }
