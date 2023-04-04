import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  errorMessage: string = '';
  setErrorMessage(error: string) {
    this.errorMessage = error;
    console.log('setting error message');
  }
}
