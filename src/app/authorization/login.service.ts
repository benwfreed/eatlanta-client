import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, register, logout } from './auth.actions';
import {Credentials} from '../login/credentials';
import {Observable} from 'rxjs/Observable';
import {AuthorizationDataService} from './authorization-data.service';
import 'rxjs/add/operator/pluck';
import {Authorization} from './authorization.class';


@Injectable()
export class LoginService {

  constructor(public store: Store<{}>, private dataService: AuthorizationDataService) { }

  login(credentials: Credentials): void {
    console.log('dispatch login to store');
    this.store.dispatch(login(credentials));
  }

  register(credentials: Credentials): void {
    this.store.dispatch(register(credentials));
  }

  isUsernameAvailable(username: string): Observable<boolean> {
    return this.dataService.isUsernameAvailable(username);
  }

  isLoggedIn() {
    return this.store.select('authorization');
  }

  logout() {
    this.store.dispatch(logout());
  }

  getErrorMessage() {
    return this.store.select('authorization')
      .map( (auth: Authorization) => auth.message);
  }

  isInProgress() {
    return this.store.select('authorization')
      .map( (auth: Authorization) => auth.inProgress);
  }
}
