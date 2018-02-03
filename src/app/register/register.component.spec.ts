/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegisterComponent } from './register.component';
import {FormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap';
import {LoginService} from '../authorization/login.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const LoginServiceStub = {
    isUsernameAvailable: () => Observable.of(false)
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AlertModule.forRoot()
      ],
      declarations: [ RegisterComponent ],
      providers: [
        {provide: LoginService, useValue: LoginServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
