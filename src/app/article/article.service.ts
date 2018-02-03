import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../app-state';
import {Articles} from './articles.class';
import {Article} from './article.class';

@Injectable()
export class ArticleService {

  constructor(private store: Store<AppState>) { }

  getArticles() {
    return this.store.select('articles');
  }

  getArticle(id) {
    return this.store.select('articles')
      .map( (articlesStoreObject: Articles) => articlesStoreObject.articles
        .find( (article: Article) => article.meta.id === id));
  }

}
