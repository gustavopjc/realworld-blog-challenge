import {
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import { Article } from '@/models';
import BaseService from '@/services/BaseService';

@Module
export default class ArticleListModule extends VuexModule {
  articleList = [] as Article[];

  currentPage = 1;

  perPage = 20;

  totalPages = 0;

  totalArticles = 0;

  currentTag = '';

  @Mutation
  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  @Mutation
  setPerPage(perPage: number) {
    this.perPage = perPage;
  }

  @Mutation
  setArticleList(articleList: Article[]) {
    this.articleList = articleList;
  }

  @Mutation
  setTotalPages(totalPages: number) {
    this.totalPages = totalPages;
  }

  @Mutation
  setTotalArticles(totalArticles: number) {
    this.totalArticles = totalArticles;
  }

  @Action
  fetchArticleList(service: BaseService) {
    service.getAll(this.getArticleListFilters).then((response) => {
      this.context.commit('setArticleList', response.articles);
      this.context.commit('setTotalArticles', response.articlesCount);
      this.context.commit('setTotalPages', response.articlesCount / this.perPage);
    });
  }

  @Action
  updatePerPage(perPage: number) {
    this.perPage = perPage;
  }

  @Action
  updateCurrentPage(page: number) {
    this.currentPage = page;
  }

  @Action
  updateTotalPages(totalPages: number) {
    this.totalPages = totalPages;
  }

  @Action
  updateTotalArticles(totalArticles: number) {
    this.totalArticles = totalArticles;
  }

  get getCurrentTag() {
    return this.currentTag ? this.currentTag : null;
  }

  get getCurrentPage() {
    return this.currentPage ? this.currentPage : null;
  }

  get getCurrentPerPage() {
    return this.perPage;
  }

  get getArticleListFilters() {
    return {
      tag: this.getCurrentTag,
      limit: this.getCurrentPerPage,
      offset: this.currentPage ? this.getCurrentPerPage * this.currentPage : null,
    };
  }
}
