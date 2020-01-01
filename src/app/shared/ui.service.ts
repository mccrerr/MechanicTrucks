import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UiService {

  loadingStateChanged = new Subject<boolean>();
  constructor(private snackbar: MatSnackBar) { }

  showSnackbar(message, action, Duration) {
    this.snackbar.open(message, action, {
      duration: Duration
    });
  }

}
