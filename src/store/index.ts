import Vue from 'vue';
import Vuex from 'vuex';
import Auth from '@/store/modules/AuthModule';
import ArticleListModule from '@/store/modules/ArticleListModule';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    ArticleListModule,
  },
  plugins: [
    // Plugin utilizado para persistir o state da store no localstorage
    createPersistedState(),
  ],
});
