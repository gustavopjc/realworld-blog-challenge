<template>
  <footer class="position-relative">
    <div class="container">
      <a class="logo-font">conduit</a>
      <span class="attribution">
        Projeto feito por <a href="https://github.com/gustavopjc" target="_blank">Gustavo</a>.
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'footer-component',
});
</script>

<style scoped>
.position-relative {
  position: relative !important;
}
</style>
