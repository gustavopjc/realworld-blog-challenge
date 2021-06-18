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
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a class="nav-link disabled" href="">Your Feed</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="">Global Feed</a>
                </li>
              </ul>
            </div>

            <router-view></router-view>
            <pr-pagination-articles>
            </pr-pagination-articles>

          </div>

        </div>
      </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import PrPaginationArticles from './components/PrPaginationArticles.vue';

export default defineComponent({
  components: { PrPaginationArticles },
  name: 'home',
});
</script>

<style scoped>

</style>
