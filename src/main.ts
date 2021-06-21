import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins';
import './filters';
import vuetify from './plugins/vuetify';

Vue.use(VueToast);
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
