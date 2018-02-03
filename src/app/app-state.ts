import { Authorization } from './Authorization/authorization.class';
import { Articles } from './article/articles.class';

export interface AppState {
  authorization: Authorization;
  articles: Articles;
}
