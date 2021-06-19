import _Vue from 'vue';
/**
  * Plugin responsável por controlar a exibição do component PrLoaderOverlay
 */
export default {
  install: (Vue: typeof _Vue) => {
    Vue.prototype.$loadingOverlay = {
      isLoading: false,
      show: () => {
        console.log('teste');
      },
      hide: async () => {
        console.log('teste');
      },
    };
  },
};
