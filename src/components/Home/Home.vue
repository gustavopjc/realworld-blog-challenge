<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <NavHomeItems/>

          <router-view @enable-loading-overlay="enableLoadingOverlay()"></router-view>

          <PrPaginationArticles/>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <TagList :tags="tags"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import PrPaginationArticles from '@/components/Home/components/PrPaginationArticles.vue';
import TagList from '@/components/Tag/TagList.vue';
import TagService from '@/services/TagService';
import NavHomeItems from './components/NavHomeItems.vue';

export default defineComponent({
  name: 'home',
  components: { PrPaginationArticles, TagList, NavHomeItems },
  data() {
    return {
      isLoading: true,
      tagService: new TagService(),
      tags: [],
    };
  },
  methods: {
    fetchPopularTags() {
      this.tagService.getAll().then((response) => {
        this.tags = response.tags;
      });
    },
  },
  mounted() {
    this.fetchPopularTags();
  },
});
</script>

<style scoped>

</style>
