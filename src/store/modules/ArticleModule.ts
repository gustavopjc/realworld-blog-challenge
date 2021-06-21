import {
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import { Article } from '@/models';
import ArticleService from '@/services/ArticleService';
import ProfileService from '@/services/ProfileService';

@Module
export default class ArticleModule extends VuexModule {
  articleSelected = {} as Article;

  @Mutation
  setCurrentArticleSelected(article: Article) {
    this.articleSelected = article;
  }

  @Mutation
  setFavoritedArticle(value: boolean) {
    this.articleSelected.favorited = value;
  }

  @Mutation
  setFavoritedCountedArticle(value: number) {
    this.articleSelected.favoritesCount = value;
  }

  @Mutation
  setFollowingAuthor(following: boolean) {
    this.articleSelected.author.following = following;
  }

  @Action
  updateCurrentArticleSelected(article: Article) {
    this.context.commit('setCurrentArticleSelected', article);
  }

  @Action
  clearCurrentArticleSelected() {
    this.context.commit('setCurrentArticleSelected', {});
  }

  @Action
  favoriteArticle() {
    new ArticleService().favoriteArticle(this.articleSelected.slug);
    this.context.commit('setFavoritedArticle', true);
    this.context.commit('setFavoritedCountedArticle', this.articleSelected.favoritesCount + 1);
  }

  @Action
  unfavoriteArticle() {
    new ArticleService().unfavoriteArticle(this.articleSelected.slug);
    this.context.commit('setFavoritedArticle', false);
    this.context.commit('setFavoritedCountedArticle', this.articleSelected.favoritesCount - 1);
  }

  @Action
  followAuthor() {
    new ProfileService().followAutor(this.articleSelected.author.username);
    this.context.commit('setFollowingAuthor', true);
  }

  @Action
  unfollowAuthor() {
    new ProfileService().unfollowAutor(this.articleSelected.author.username);
    this.context.commit('setFollowingAuthor', false);
  }

  get getCurrentArticleSelected() {
    return this.articleSelected;
  }

  get isArticleSelected() {
    return Object.keys(this.articleSelected).length !== 0;
  }
}
