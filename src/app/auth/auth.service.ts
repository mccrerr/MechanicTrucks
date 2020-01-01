
import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from './user.model';
import { UiService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fromApp from '../app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private afauth: AngularFireAuth,
    // tslint:disable-next-line:align
    private uiService: UiService,
    // tslint:disable-next-line:align
    private store: Store<{ ui: fromApp.State }>) { }

  initAuthListener() {
    this.afauth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        //   this.router.navigate(['/training']);
      } else {
        //   this.trainingService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.afauth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }
  login(authData: AuthData) {
    this.store.dispatch({ type: 'START_LOADING' });
    this.afauth.auth.signInWithEmailAndPassword(
      authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authSuccessfully();
        this.store.dispatch({ type: 'STOP_LOADING' });
      })
      .catch(error => {
        console.log(error);
        this.store.dispatch({ type: 'STOP_LOADING' });
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  logout(authData: AuthData) {
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    console.log('authSuccess');
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['garage']);
  }
}
