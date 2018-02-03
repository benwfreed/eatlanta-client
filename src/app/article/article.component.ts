import { Component, OnInit } from '@angular/core';
import {ArticleService} from './article.service';
import {Router} from '@angular/router';
// import {LinebreakPipe} from '../linebreak.pipe';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})

export class ArticleComponent implements OnInit {

  article$;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    // first entry of split array is empty, second entry has article id
    const id = Number(this.router.url.split('/article/')[1]);
    this.article$ = this.articleService.getArticle(id);
  }

}
