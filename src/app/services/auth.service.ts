import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isUserLoggedIn = this.loggedInSubject.asObservable();

  constructor() {
    const user = localStorage.getItem('user');
    this.loggedInSubject.next(!!user);
  }

  setUserLoggedIn(loggedIn: boolean) {
    this.loggedInSubject.next(loggedIn);
  }

  checkUserLoggedIn() {
    const user = localStorage.getItem('user');
    return !!user;
  }
}
