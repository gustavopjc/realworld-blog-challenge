<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
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
  name: 'header',
});
</script>

<style scoped>

</style>
