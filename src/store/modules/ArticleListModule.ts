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

  serviceType = {} as BaseService;

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
  setCurrentTag(currentTag: string) {
    this.currentTag = currentTag;
  }

  @Mutation
  setTotalArticles(totalArticles: number) {
    this.totalArticles = totalArticles;
  }

  @Mutation
  setArticleService(service: BaseService) {
    this.serviceType = service;
  }

  @Action
  async fetchArticleList() {
    await this.serviceType.getAll(this.getArticleListFilters).then((response) => {
      this.context.commit('setArticleList', response.articles);
      this.context.commit('setTotalArticles', response.articlesCount);
      this.context.commit('setTotalPages', response.articlesCount / this.perPage);
      console.log('oi');
    });
  }

  @Action
  setCurrentArticleService(service: BaseService) {
    this.context.commit('setCurrentPage', 1);
    this.context.commit('setArticleService', service);
  }

  @Action
  updateCurrentTag(tag: string) {
    this.context.commit('setCurrentTag', tag);
    this.context.dispatch('fetchArticleList');
  }

  @Action
  clearCurrentTag(tag: string) {
    this.context.commit('setCurrentTag', tag);
  }

  @Action
  articleListSelectPage(page: number) {
    this.context.commit('setCurrentPage', page);
    this.context.dispatch('fetchArticleList');
  }

  @Action
  articleListNextPage() {
    this.context.commit('setCurrentPage', this.currentPage + 1);
    this.context.dispatch('fetchArticleList');
  }

  @Action
  articleListPreviousPage() {
    this.context.commit('setCurrentPage', this.currentPage + 1);
    this.context.dispatch('fetchArticleList');
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
