<template>
  <div>
    <article-preview-item :article="article" v-for="article in articleList" :key="article.id">
    </article-preview-item>
  </div>
</template>

<script lang="ts">
import GlobalArticlesService from '@/services/GlobalArticlesService';
import { defineComponent } from '@vue/composition-api';
import ArticlePreviewItem from '../components/ArticlePreviewItem.vue';

export default defineComponent({
  components: { ArticlePreviewItem },
  name: 'home-global',
  props: {
    tag: {
      required: true,
      type: String,
    },
  },
  watch: {
    tag: {
      immediate: true,
      handler() {
        this.updateCurrentTag();
      },
    },
  },
  data() {
    return {
      globalArticlesService: new GlobalArticlesService(),
    };
  },
  computed: {
    articleList() {
      return this.$store.getters.getArticleList;
    },
  },
  methods: {
    setArticleCurrentTypeService() {
      this.$store.dispatch('setCurrentArticleService', new GlobalArticlesService());
    },
    updateCurrentTag() {
      this.$store.dispatch('updateCurrentTag', this.tag);
    },
  },
  mounted() {
    this.setArticleCurrentTypeService();
  },
});
</script>

<style scoped>

</style>
