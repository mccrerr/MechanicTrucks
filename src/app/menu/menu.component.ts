import { AuthService } from './../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authServiceSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authServiceSubscription =
      this.authService.authChange.subscribe(auth => {
        this.isAuth = auth;
      });
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout({
      password: null,
      email: null
    });
  }
  ngOnDestroy() {
    if (this.authServiceSubscription) {
      this.authServiceSubscription.unsubscribe();
    }
  }
}
