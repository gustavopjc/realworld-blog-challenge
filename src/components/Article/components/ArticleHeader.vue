<template>
  <div class="banner">
      <div class="container">
        <h1>{{ articleSelected.title }}</h1>
        <ArticleMeta/>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ArticleMeta from '@/components/Article/components/ArticleMeta.vue';

export default defineComponent({
  name: 'article-header',
  components: {
    ArticleMeta,
  },
  computed: {
    articleSelected() {
      return this.$store.getters.getCurrentArticleSelected;
    },
  },
});
</script>
