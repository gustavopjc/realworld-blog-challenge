import {
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import { User, Credentials } from '@/models';
import AuthService from '@/services/AuthService';
import router from '@/router';

@Module
export default class AuthModule extends VuexModule {
  currentUser = {};

  @Mutation
  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  @Action
  register(credentials: Credentials) {
    return new Promise(() => {
      new AuthService().post({ user: credentials }, '')
        .then((response) => {
          this.context.commit('setCurrentUser', response.user);
          router.push({ name: 'login' });
        });
    });
  }

  @Action
  login(credentials: Credentials) {
    return new Promise(() => {
      new AuthService().post({ user: credentials }, 'login')
        .then((response) => {
          this.context.commit('setCurrentUser', response.user);
          router.push({ name: 'home-global' });
        })
        .catch(() => Promise.resolve);
    });
  }

  @Action
  logout() {
    this.context.commit('setCurrentUser', {});
    router.push({ name: 'home-global' });
  }

  @Action
  updateCurrentUser(user: User) {
    this.context.commit('setCurrentUser', user);
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
