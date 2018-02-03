import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AuthActionTypes, loginFailure, loginSuccess, registerSuccess,
  registerFailure, logoutSuccess, logoutFailure } from './authorization/auth.actions';
import { ArticleActionTypes, getArticles, getArticlesSuccess, getArticlesFailure } from './article/article.actions';
import { AuthorizationDataService } from './authorization/authorization-data.service';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import { ArticleDataService } from './article/article-data.service';

interface HttpResponse {
  error?;
}

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions,
              private authDataService: AuthorizationDataService,
              private articleDataService: ArticleDataService) {
  }

  @Effect() login$ = this.actions$
    .ofType(AuthActionTypes.LOGIN)
    .mergeMap(action => this.authDataService.login({
      username: action.payload.username,
      password: action.payload.password
    }))
    .map((response: HttpResponse) => {
      return response.error ? loginFailure(response) : loginSuccess(response);
    });

  @Effect() register$ = this.actions$
    .ofType(AuthActionTypes.REGISTER)
    .mergeMap(action => this.authDataService.register(action.payload))
    .map(response => registerSuccess(response));

  @Effect() logout$ = this.actions$
    .ofType(AuthActionTypes.LOGOUT)
    .mergeMap(() => this.authDataService.logout())
    .map(response => response.error ? logoutFailure(response.error) : logoutSuccess(response));

  @Effect() getArticles$ = this.actions$
    .ofType(ArticleActionTypes.GET_ARTICLES)
    .mergeMap(() => this.articleDataService.getArticles())
    .map( (response: HttpResponse) => {
      return response.error ? getArticlesFailure() : getArticlesSuccess(response);
    });
}
