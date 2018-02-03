import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {LoginService} from '../authorization/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isCollapsed = true;
  public isLoggedIn$: Observable<any>;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.loginService.isLoggedIn();
  }

  // Hooks into collapsed state, might need these later....
  public collapsed(event: any): void {}

  public expanded(event: any): void {}

  public toggle(): void {
      this.isCollapsed = !this.isCollapsed;
  }

  public logout(): void {
    this.loginService.logout();
  }
}
