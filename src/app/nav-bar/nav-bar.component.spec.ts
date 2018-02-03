/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';


import { NavBarComponent } from './nav-bar.component';
import {LoginService} from '../authorization/login.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/observable/of';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let de: DebugElement;

  const LoginServiceStub = {
    isLoggedIn: () => Observable.of({
      authorized: true
    })
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports: [
          CollapseModule
      ],
      providers: [
        {provide: LoginService, useValue: LoginServiceStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show login/register links when and only when user is logged out', () => {
    // user starts logged out, so links should not be in DOM
    let loginLink = de.query(By.css('#login-link'));
    expect(loginLink).toBe(null);
    let registerLink = de.query(By.css('#register-link'));
    expect(registerLink).toBe(null);
    // user is logged in, so link should be in DOM
    component.isLoggedIn$ = Observable.of({authorized: false});
    fixture.detectChanges();
    loginLink = de.query(By.css('#login-link'));
    expect(loginLink.nativeElement.innerHTML).toBe('Login');
    registerLink = de.query(By.css('#register-link'));
    expect(registerLink.nativeElement.innerHTML).toBe('Register');
  });

  it('should collapse and uncollapse when toggled', () => {
    // it should start collapsed
    expect(component.isCollapsed).toBeTruthy();
    // toggle collapse
    component.toggle();
    expect(component.isCollapsed).toBeFalsy();
    // toggle again
    component.toggle();
    expect(component.isCollapsed).toBeTruthy();
  });

  it('should toggle when the hamburger is clicked', () => {
    const navHamburger = de.query(By.css('button'));
    // it should start collapsed
    expect(component.isCollapsed).toBeTruthy();
    // click hamburger
    navHamburger.triggerEventHandler('click', null);
    expect(component.isCollapsed).toBeFalsy();
    // click hamburger again
    navHamburger.triggerEventHandler('click', null);
    expect(component.isCollapsed).toBeTruthy();
  });

});
