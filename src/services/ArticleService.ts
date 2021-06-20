/* eslint class-methods-use-this: [
  "error", { "exceptMethods": [
    "favoriteArticle",
    'unfavoriteArticle',
  ] }] */

import BaseService from './BaseService';

export default class ArticleService extends BaseService {
  constructor(protected subpath = '') {
    super(`articles/${subpath}`);
  }

  async favoriteArticle(slug: string) {
    const articleService = new ArticleService();
    await articleService.post('', `${slug}/favorite`);
  }

  async unfavoriteArticle(slug: string) {
    const articleService = new ArticleService();
    await articleService.delete('', `${slug}/favorite`);
  }
}
