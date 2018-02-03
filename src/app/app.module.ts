import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RouterModule } from '@angular/router';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { VisitsComponent } from './visits/visits.component';

import { ArticleService } from './article/article.service';
import { LoginService } from './authorization/login.service';
import { AuthorizationDataService } from './authorization/authorization-data.service';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { authReducer as AuthReducer } from './authorization/authorization.reducer';
import { articlesReducer as ArticlesReducer } from './article/articles.reducer';

import { AppEffects } from './app-effects';
import { RegisterComponent } from './register/register.component';
import {ArticleDataService} from './article/article-data.service';
import { LinebreakPipe } from './linebreak.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableOfContentsComponent,
    LoginComponent,
    AboutComponent,
    ArticleComponent,
    VisitsComponent,
    RegisterComponent,
    LinebreakPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    StoreModule.provideStore({
      authorization: AuthReducer,
      articles: ArticlesReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(AppEffects),
    RouterModule.forRoot(([
    {
        path: '',
        component: TableOfContentsComponent
    },
      {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'article/:id',
        component: ArticleComponent
    },
    {
        path: 'visits',
        component: VisitsComponent
    }
    ]))
  ],
  providers: [ArticleService,
              LoginService,
              AuthorizationDataService,
              ArticleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
