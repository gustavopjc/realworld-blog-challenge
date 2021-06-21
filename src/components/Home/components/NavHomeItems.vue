<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item">
        <a class="nav-link" :class="{ 'disabled': !isAuth,
          'active': $route.name === 'my-feed-home' }" @click="goToPage('my-feed-home')">
          Meu Feed
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ 'active': $route.name === 'home-global' }"
          @click="goToPage('home-global')">
          Feed Global
        </a>
      </li>
      <li class="nav-item" v-if="$route.name === 'tag-home'">
        <a class="nav-link" :class="{ 'active': $route.name === 'tag-home'}" href="">
          #{{ currentTag }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'nav-home-items',
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
    currentTag() {
      return this.$store.getters.getCurrentTag;
    },
  },
  methods: {
    goToPage(name: string) {
      this.$router.push({ name });
    },
  },
});
</script>

<style scoped>

</style>
