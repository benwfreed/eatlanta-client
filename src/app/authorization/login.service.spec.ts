/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login.service';

import { Http } from '@angular/http';
import {StoreModule} from '@ngrx/store';
import { AuthorizationDataService} from './authorization-data.service';

describe('LoginService', () => {

  const HttpStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          LoginService,
          {provide: Http, useValue: HttpStub},
        {provide: AuthorizationDataService, useValue: HttpStub}
      ],
      imports: [
        StoreModule.provideStore( () => {})
      ]
    });
  });

  it('should ...', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
