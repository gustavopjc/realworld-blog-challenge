<template>
  <div>
    <article-preview-item :article="article" v-for="article in articles" :key="article.id">
    </article-preview-item>
  </div>
</template>

<script lang="ts">
import GlobalArticlesService from '@/services/GlobalArticlesService';
import { defineComponent } from '@vue/composition-api';
import store from '@/store';
import { Article } from '@/models';
import ArticlePreviewItem from '../components/ArticlePreviewItem.vue';

export default defineComponent({
  components: { ArticlePreviewItem },
  name: 'home-global',
  data() {
    return {
      globalArticlesService: new GlobalArticlesService(),
    };
  },
  computed: {
    articles() {
      return store.state.ArticleListModule.articleList;
    },
  },
  methods: {
    fetchGlobalArticles() {
      this.$store.dispatch('fetchArticleList', new GlobalArticlesService());
    },
  },
  mounted() {
    this.fetchGlobalArticles();
  },
});
</script>

<style scoped>

</style>
