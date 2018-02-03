import { TestBed, inject } from '@angular/core/testing';

import { ArticleService } from './article.service';

import { StoreModule } from '@ngrx/store';

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleService],
      imports: [
        // use empty reducer for now
        StoreModule.provideStore( () => {})
      ]
    });
  });

  it('should be created', inject([ArticleService], (service: ArticleService) => {
    expect(service).toBeTruthy();
  }));
});
