import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'chassis',
  loadChildren: () => import('./chassis/chassis.module')
    .then(m => m.ChassisModule)
},
{
  path: 'engineTrans',
  loadChildren: () => import('./engine-trans/engine-trans.module')
    .then(m => m.EngineTransModule)
},
{ path: 'garage', loadChildren: () => import('./garage/garage.module').then(m => m.GarageModule) },
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
