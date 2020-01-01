import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SharedModule } from './../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
// import { AuthRoutingModule } from './auth.routing.module';
import { AppMaterialModule } from './../app-material/app-material.module';
import { routes } from './auth.routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent],
  imports: [
    AngularFireAuthModule,
    SharedModule,
    // AuthRoutingModule.forChild(routes),
    RouterModule.forChild(routes),
    AppMaterialModule,
    CommonModule,
    FormsModule
  ],
  exports: []
})
export class AuthModule {

}
