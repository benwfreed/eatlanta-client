/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { StoreModule } from '@ngrx/store';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarComponent
      ],
      imports: [
          // The reducer in provide store won't be used. We're
          // just going to test that the correct actions were
          // dispatched, not how they are reduced to state.
          StoreModule.provideStore( state => ({newState: state})),
          RouterTestingModule,
          CollapseModule.forRoot()
      ]
    });
    TestBed.overrideComponent(AppComponent, {
      set: {
        template: '<div>We don\'t need the component template</div>'
      }
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
