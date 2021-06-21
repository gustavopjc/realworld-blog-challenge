<template>
  <a @click="tagClickable ? updateCurrentArticleTag(tag) : '' "
    class="tag-pill tag-default">{{ tag }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'tag-item',
  props: {
    tag: {
      type: String,
      required: true,
    },
    tagClickable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    async updateCurrentArticleTag(tag: string) {
      this.$router.push({ name: 'tag-home', params: { tag } });
    },
  },
});
</script>

<style scoped>

</style>
