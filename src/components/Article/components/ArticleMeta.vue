<template>
  <div class="article-meta">
    <a><img :src="articleSelected.author.image" /></a>
    <div class="info-autor">
      <a class="author">{{ articleSelected.author.username }}</a>
      <span class="date">{{ articleSelected.createdAt }}</span>
    </div>
    <button v-if="articleSelected.author.following" class="btn btn-sm btn-outline-secondary"
      @click="unfollowAuthor()">
      <i class="ion-plus-round"></i>
      &nbsp;
      Deixar de seguir {{ articleSelected.author.username }}
      <span class="counter"></span>
    </button>
    <button v-else class="btn btn-sm btn-outline-secondary"
      @click="followAuthor()">
      <i class="ion-plus-round"></i>
      &nbsp;
      Seguir {{ articleSelected.author.username }}
      <span class="counter"></span>
    </button>

    &nbsp;&nbsp;
    <button  v-if="articleSelected.favorited"  class="btn btn-sm btn-outline-primary"
      @click="unfavoriteArticle()">
      <i class="ion-heart"></i>
      &nbsp;
      Unvorite Post <span class="counter">{{ articleSelected.favoritesCount }}</span>
    </button>
    <button v-else class="btn btn-sm btn-outline-primary"
      @click="favoriteArticle()">
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">{{ articleSelected.favoritesCount }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProfileService from '@/services/ProfileService';
import ArticleService from '@/services/ArticleService';

export default defineComponent({
  name: 'article-meta',
  data() {
    return {
      profileService: new ProfileService(),
      articleService: new ArticleService(),
    };
  },
  computed: {
    articleSelected() {
      return this.$store.getters.getCurrentArticleSelected;
    },
  },
  methods: {
    async followAuthor() {
      await this.$store.dispatch('followAuthor');
    },
    async unfollowAuthor() {
      await this.$store.dispatch('unfollowAuthor');
    },
    async favoriteArticle() {
      await this.$store.dispatch('favoriteArticle');
    },
    async unfavoriteArticle() {
      await this.$store.dispatch('unfavoriteArticle');
    },
  },
});
</script>

<style scoped>
.info-autor {
  margin: 0 1.5rem 0 .3rem;
  display: inline-block;
  vertical-align: middle;
  line-height: 1rem;
}
.info-autor .date {
  color: #bbb;
  font-size: .8rem;
  display: block;
}
</style>
