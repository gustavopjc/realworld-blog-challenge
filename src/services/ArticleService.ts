import BaseService from './BaseService';

export default class ArticleService extends BaseService {
  constructor(protected subpath:string) {
    super(`articles/${subpath}`);
  }
}
