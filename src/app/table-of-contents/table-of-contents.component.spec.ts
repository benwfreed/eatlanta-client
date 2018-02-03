/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableOfContentsComponent } from './table-of-contents.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ArticleService} from '../article/article.service';

describe('TableOfContentsComponent', () => {
  let component: TableOfContentsComponent;
  let fixture: ComponentFixture<TableOfContentsComponent>;

  const ArticleServiceStub = {
    getArticles: () => Observable.of({many: 'articles'})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfContentsComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        {provide: ArticleService, useValue: ArticleServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
