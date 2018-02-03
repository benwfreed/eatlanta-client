/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class ArticleServiceStub {
  getArticle(id) {
    const article = {
      meta: {
             title: 'fake title',
             description: 'fake description',
             location: 'fake location',
             author: 'fake author'
           },
           content: 'fake content'
    };
    return Observable.of(article);
  }
};

const routerStub = {
  url: '/article/2'
};

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      providers: [
        { provide: ArticleService, useClass: ArticleServiceStub },
        { provide: Router, useValue: routerStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get an article', () => {
    component.article$.subscribe(article => {
      expect(article).toEqual({
        meta: {
          title: 'fake title',
          description: 'fake description',
          location: 'fake location',
          author: 'fake author'
        },
        content: 'fake content'
      });
    });
  });

  it('should display an article', () => {
    let de = fixture.debugElement.query(By.css('h1'));
    const title = de.nativeElement;
    expect(title.innerHTML).toBe('fake title');
    de = fixture.debugElement.query(By.css('.description'));
    const description = de.nativeElement;
    expect(description.innerHTML).toBe('fake description');
    de = fixture.debugElement.query(By.css('.location'));
    const location = de.nativeElement;
    expect(location.innerHTML).toBe('fake location');
    de = fixture.debugElement.query(By.css('.author'));
    const author = de.nativeElement;
    expect(author.innerHTML).toBe('fake author');
    de = fixture.debugElement.query(By.css('.main-text'));
    const mainText = de.nativeElement;
    expect(mainText.innerHTML).toBe('fake content');
  });
});
