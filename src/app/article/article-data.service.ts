import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Http } from '@angular/http';
import { getOptions, extractData, handleError } from '../http-helper';

import { environment } from '../../environments/environment';


@Injectable()
export class ArticleDataService {

  REVIEWS_ENDPOINT = environment.API.ARTICLES;
  REVIEW_ENDPOINT = environment.API.ARTICLE;

  constructor(private http: Http) {}

  getArticles(): Observable<any> {
    const options = getOptions();
    return this.http.get(this.REVIEWS_ENDPOINT, options)
      .map(extractData)
      .map(this.insertHtmlLineBreaks)
      .catch(handleError);
  }

  getArticle(id: string): Observable<any> {
    const options = getOptions;
    const queryParam = `?id=${id}`;
    const url = this.REVIEW_ENDPOINT + queryParam;
    return this.http.get(url, options)
      .map(extractData)
      .catch(handleError);
  }

  insertHtmlLineBreaks(articles) {
    // If there is article content, replace each \r\n with 2 html break
    // (We will display this text as innerHtml rather than the usual {{}}
    // interpolation.)
    return articles.map(article => article.content
      ? Object.assign({}, article, {content: article.content.replace(/\n\n/g, '<br><br>')} )
      : article);
  }

}
