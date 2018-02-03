import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Credentials} from '../login/credentials';
import {LoginService} from '../authorization/login.service';
import {Authorization} from '../authorization/authorization.class';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeLast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  credentials: Credentials;
  confirmPassword: string;
  submitted: boolean;
  username$ = new Subject<string>();
  usernameAvailable$: Observable<boolean>;
  usernameAvailable: boolean;

  constructor(private loginService: LoginService,
    private router: Router) {
  }

  ngOnInit() {
    this.credentials = new Credentials('', '');
    this.submitted = false;
    this.confirmPassword = '';

    this.usernameAvailable$ = this.username$
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap( (username) => {
        console.log(username);
        return username ? this.loginService.isUsernameAvailable(username)
          : Observable.of(null);
      });
    this.usernameAvailable$.subscribe((bool) => {
      this.usernameAvailable = bool;
    });

    this.loginService.isLoggedIn()
      .subscribe( (auth: Authorization) => {
        if (auth.authorized) {
          this.router.navigate(['']);
        }
      });
  }

  onSubmit() {
    console.log('onSubmit');
    // this.loginService.register(this.credentials);
    this.submitted = true;
    const validated = this.validate();
    if (validated) {
      this.loginService.register(this.credentials);
    }
  }

  checkIfUsernameIsAvailable(username) {
    this.username$.next(username);
  }

  validate(): boolean {
    console.log('validate');
    if (this.usernameAvailable
      && this.credentials.password
      && this.confirmPassword
      && this.credentials.password === this.confirmPassword) {
        console.log('passed check');
        return true;
    } else {
      console.log('failed check');
      return false;
    }
  }

}
