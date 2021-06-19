<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
      <div class="">
        <a href="" class="author">{{ article.author.username }}}</a>
        <span class="date"> {{ article.createdAt }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <a href="" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </a>
    <TagList :tags="article.tagList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TagList from '@/components/Tag/TagList.vue';
import { Article } from '@/models';

export default defineComponent({
  name: 'article-preview-item',
  components: {
    TagList,
  },
  props: {
    article: {
      type: Object as () => Article,
      required: true,
    },
  },
});
</script>

<style scoped>

</style>
