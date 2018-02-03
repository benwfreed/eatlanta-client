import { Action } from '@ngrx/store';
import { Articles } from './articles.class';
import { ArticleActionTypes } from './article.actions';

export function articlesReducer(articles: Articles = new Articles(), action: Action) {
  switch (action.type) {
    case ArticleActionTypes.GET_ARTICLES:
      return Object.assign({}, articles, {inProgress: true});

    case ArticleActionTypes.GET_ARTICLES_SUCCESS:
      return Object.assign({}, articles, {articles: action.payload}, {inProgress: false});

    case ArticleActionTypes.GET_ARTICLES_FAILURE:
      return Object.assign({}, articles, {inProgress: false});

    default: return articles;
  }
}
