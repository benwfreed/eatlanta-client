import { Action } from '@ngrx/store';
import { Article } from './article.class';

export const ArticleActionTypes = {
    GET_ARTICLES: 'GET_ARTICLES',
    GET_ARTICLES_SUCCESS: 'GET_ARTICLES_SUCCESS',
    GET_ARTICLES_FAILURE: 'GET_ARTICLES_FAILURE'
};

export function getArticles(): Action {
  return {
    type: ArticleActionTypes.GET_ARTICLES,
    payload: {}
  };
}

export function getArticlesSuccess(articles): Action {
  return {
    type: ArticleActionTypes.GET_ARTICLES_SUCCESS,
    payload: articles
  };
}

export function getArticlesFailure(): Action {
  return {
    type: ArticleActionTypes.GET_ARTICLES_FAILURE,
    payload: {}
  };
}
