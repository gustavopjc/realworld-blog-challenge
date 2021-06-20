<template>
  <p v-html="parseMarkdown(articleSelected.body)"></p>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import marked from 'marked';

export default defineComponent({
  name: 'article-content',
  computed: {
    articleSelected() {
      return this.$store.getters.getCurrentArticleSelected;
    },
  },
  methods: {
    parseMarkdown(body: string) {
      return marked(body);
    },
  },
});
</script>

<style scoped>

</style>
