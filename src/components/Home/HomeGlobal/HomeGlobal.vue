<template>
  <div>
    <article-preview-item :article="article" v-for="article in articleList" :key="article.id">
    </article-preview-item>
  </div>
</template>

<script lang="ts">
import GlobalArticlesService from '@/services/GlobalArticlesService';
import { defineComponent } from '@vue/composition-api';
import store from '@/store';
import ArticlePreviewItem from '../components/ArticlePreviewItem.vue';

export default defineComponent({
  components: { ArticlePreviewItem },
  name: 'home-global',
  computed: {
    articleList() {
      return this.$store.getters.getArticleList;
    },
  },
  methods: {
    fetchGlobalArticles() {
      this.$store.dispatch('fetchArticleList');
    },
    setArticleCurrentTypeService() {
      this.$store.dispatch('setCurrentArticleService', new GlobalArticlesService());
      this.$store.dispatch('clearCurrentTag');
    },
  },
  mounted() {
    this.fetchGlobalArticles();
  },
  created() {
    this.setArticleCurrentTypeService();
  },
});
</script>

<style scoped>

</style>
