import {
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import { User, Credentials } from '@/models';
import BaseService from '@/services/BaseService';
import router from '@/router';
import { AuthState } from '@/models/types/AuthStateTypes';

@Module
export default class AuthModule extends VuexModule {
  currentUser = {};

  @Mutation
  updateCurrentUser(user: User) {
    this.currentUser = user;
  }

  @Action
  register(credentials: Credentials) {
    return new Promise(() => {
      new BaseService('users').post('', { user: credentials })
        .then((response) => {
          this.context.commit('updateCurrentUser', response.user);
          router.push({ name: 'login' });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    });
  }

  @Action
  login(credentials: Credentials) {
    return new Promise(() => {
      new BaseService('users').post('login', { user: credentials })
        .then((response) => {
          this.context.commit('updateCurrentUser', response.user);
          router.push({ name: 'home-global' });
        })
        .catch(() => Promise.resolve);
    });
  }

  get isAuth() {
    return Object.keys(this.currentUser).length !== 0;
  }

  get getCurrentUser() {
    return this.currentUser as User;
  }

  get getCurrentaAuthState() {
    return this.isAuth ? 'authenticated' : 'unauthenticated';
  }
}
