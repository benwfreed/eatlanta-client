import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from '../article/article.service';
import {Article} from '../article/article.class';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss']
})

export class TableOfContentsComponent implements OnInit {

  @ViewChild('isLoggedInButton') isLoggedInButton;
  articles$: Observable<Article>;
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
  }

  trackByArticle(index: number, article: Article): Number {
    return article.meta.id;
  }

  navigate(id) {
    this.router.navigateByUrl(`/article/${id}`);
  }

}
