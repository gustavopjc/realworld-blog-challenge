<template>
  <div class="article-page">

    <ArticleHeader v-if="isArticleSelected"/>

    <div class="container page">

      <ArticleContent  v-if="isArticleSelected"/>

      <hr />
      <div class="article-actions">
        <ArticleMeta  v-if="isArticleSelected"/>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <CommentSection  v-if="isArticleSelected"/>
        </div>
      </div>
    </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ArticleHeader from '@/components/Article/components/ArticleHeader.vue';
import ArticleContent from '@/components/Article/components/ArticleContent.vue';
import CommentSection from '@/components/Article/components/CommentSection.vue';
import ArticleMeta from '@/components/Article/components/ArticleMeta.vue';
import ArticleService from '@/services/ArticleService';
import { Article } from '@/models';

export default defineComponent({
  name: 'article',
  components: {
    ArticleHeader,
    ArticleContent,
    ArticleMeta,
    CommentSection,
  },
  props: {
    articleSlug: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      articleService: new ArticleService(),
      article: {} as Article,
    };
  },
  methods: {
    async fetchArticle() {
      await this.articleService.getOne(this.articleSlug).then((response) => {
        this.$store.dispatch('updateCurrentArticleSelected', response.article);
      });
    },
  },
  computed: {
    isArticleSelected() {
      return this.$store.getters.isArticleSelected;
    },
  },
  beforeDestroy() {
    this.$store.dispatch('clearCurrentArticleSelected');
  },
  async beforeMount() {
    await this.fetchArticle();
  },
});
</script>

<style scoped>

</style>
