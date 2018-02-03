/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';


import { LoginComponent } from './login.component';
import { LoginService } from '../authorization/login.service';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/withLatestFrom';
import {Observable} from 'rxjs/Observable';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let val = false;

  const loginServiceStub = {
    login: () => {},
    getErrorMessage: () => Observable.of('incorrect password'),
    isLoggedIn: () => Observable.of(false),
    isInProgress: () => Observable.of(val)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
          FormsModule,
          AlertModule.forRoot(),
          RouterTestingModule,
          StoreModule.provideStore( () => {})
      ],
      providers: [
          {provide: LoginService, useValue: loginServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // It seems easiest to make the loginService mock calls programmatic
    // by just reconfiguring the mock each time (which we must do before
    // calling TestBed.createComponent), so no sync before each statements.
  });

  it('should create', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should get error messages', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loginErrorMessage$.subscribe( message => {
      expect(message).toBe('incorrect password');
    });
  });

  it('should display error messages', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loginErrorMessage$
      .withLatestFrom(component.stillShowError$)
      .subscribe( (messageAndBool) => {
      expect(messageAndBool[0]).toBe('incorrect password');
      const message = fixture.debugElement.query(By.css('.login-error-message'));
      expect(message.nativeElement.innerHTML).toBe('incorrect password');
    });
  });

  it('should show in progress message', () => {
    // isInProgress returns true
    val = true;
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loginInProgress$
      .subscribe( bool => {
        const inProgress = fixture.debugElement.query(By.css('.in-progress'));
        expect(inProgress.nativeElement.innerHTML).toBe('Login in Progress...');
      });
  });

  it('should save username and password into a model', async( () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const username = fixture.debugElement.query(By.css('#username'));
      const password = fixture.debugElement.query(By.css('#password'));
      const usernameElement = username.nativeElement;
      const passwordElement = password.nativeElement;
      usernameElement.value = 'someUsername';
      usernameElement.dispatchEvent(new Event('input'));
      passwordElement.value = 'somePassword';
      passwordElement.dispatchEvent(new Event('input'));
      expect(component.credentials.username).toBe('someUsername');
      expect(component.credentials.password).toBe('somePassword');
      const loginButton = fixture.debugElement.query(By.css('button'));
      loginButton.nativeElement.dispatchEvent(new Event('click'));
      console.log(loginButton.nativeElement);
    });
  }));
});
