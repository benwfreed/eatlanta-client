import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Http } from '@angular/http';
import { getOptions, extractData, handleError } from '../http-helper';

import { environment } from '../../environments/environment';

import { Credentials } from '../login/credentials';

@Injectable()
export class AuthorizationDataService {

  LOGIN_ENDPOINT: string = environment.API.LOGIN;
  REGISTER_ENDPOINT: string = environment.API.REGISTER;
  IS_USERNAME_AVAILABLE_ENDPOINT: string = environment.API.IS_USERNAME_AVAILABLE;
  LOGOUT_ENDPOINT: string = environment.API.LOGOUT;

  constructor(private http: Http) { }

  login(credentials: Credentials): Observable<Object> {
    const options = getOptions();
    return this.http.post(this.LOGIN_ENDPOINT, {username: credentials.username, password: credentials.password },
      options)
    .map(extractData)
    .catch(handleError);
  }

  register(credentials: Credentials): Observable<Object> {
    const options = getOptions();
    return this.http.post(this.REGISTER_ENDPOINT, {username: credentials.username, password: credentials.password },
      options)
      .map(extractData)
      .catch(handleError);
  }

  isUsernameAvailable(username: string): Observable<boolean> {
    const options = getOptions();
    return this.http.get(`${this.IS_USERNAME_AVAILABLE_ENDPOINT}?username=${username}`, options)
      .map(extractData)
      .catch(handleError);
  }

  logout(): Observable<any> {
    const options = getOptions();
    return this.http.get(this.LOGOUT_ENDPOINT, options)
      .map(extractData)
      .catch(handleError);
  }
}
