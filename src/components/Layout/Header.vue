<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" v-bind:to="{ path: '/' }">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <header-nav-items>
        </header-nav-items>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import HeaderNavItems from '@/components/Layout/components/HeaderNavItems.vue';

export default defineComponent({
  components: { HeaderNavItems },
  name: 'header-component',
});
</script>

<style scoped>

</style>
