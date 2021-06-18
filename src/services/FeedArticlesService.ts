import ArticleService from "./ArticleService";


export default class FeedArticlesService extends ArticleService{
  constructor() {
    super('feed');
  }
}
