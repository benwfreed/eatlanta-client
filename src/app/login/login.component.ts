import {Component, OnInit, ViewChild} from '@angular/core';
import { LoginService } from '../authorization/login.service';
import { Credentials } from './credentials';
import { Router } from '@angular/router';
import {Authorization} from '../authorization/authorization.class';
import 'rxjs/add/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/merge';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credentials: Credentials;
  loginErrorMessage$;
  @ViewChild('loginForm') loginForm;
  inFormField$ = new Subject<boolean>();
  password$ = new Subject<boolean>();
  stillShowError$;
  loginInProgress$;

  constructor(private loginService: LoginService,
              private router: Router) {}

  ngOnInit() {
    this.credentials = new Credentials('', '');
    this.loginErrorMessage$ = this.loginService.getErrorMessage();
    this.loginService.isLoggedIn().subscribe( (auth: Authorization) => {
      if (auth.authorized) {
        this.router.navigate(['']);
      }
    });
    this.stillShowError$ = this.password$
      .merge(this.inFormField$,
        this.loginErrorMessage$
          .map( () => true));
    this.loginInProgress$ = this.loginService.isInProgress();
  }

  onSubmit() {
      this.loginService.login(this.credentials);
  }

  onUsernameFocus(event): void {
    this.inFormField$.next(false);
  }

  onPasswordFocus(event): void {
    this.password$.next(false);
  }

}
