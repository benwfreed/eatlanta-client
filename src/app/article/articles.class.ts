import { Article } from './article.class';

export class Articles {
  inProgress: boolean;
  articles: Article[];

  constructor() {
    const emptyArticles = {
      inProgress: false,
      articles: []
    };
    return emptyArticles;
  }
}

