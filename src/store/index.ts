import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from '@/store/modules/AuthModule';
import ArticleListModule from '@/store/modules/ArticleListModule';
import ArticleModule from '@/store/modules/ArticleModule';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AuthModule,
    ArticleListModule,
    ArticleModule,
  },
  plugins: [
    // Plugin utilizado para persistir o state da store no localstorage
    createPersistedState(),
  ],
});
