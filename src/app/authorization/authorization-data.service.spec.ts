/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthorizationDataService } from './authorization-data.service';
import { Http } from '@angular/http';

describe('AuthorizationDataService', () => {

  const HttpStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          AuthorizationDataService,
          { provide: Http, useValue: HttpStub},
      ]
    });
  });

  it('should ...', inject([AuthorizationDataService], (service: AuthorizationDataService) => {
    expect(service).toBeTruthy();
  }));
});
