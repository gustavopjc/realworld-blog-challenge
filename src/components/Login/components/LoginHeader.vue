<template>
  <div>
    <h1 class="text-xs-center">Login</h1>
    <p class="text-xs-center">
      <a @click="goToPage('register')">Não possui uma conta?</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'login-heder',
  methods: {
    goToPage(routerName: string) {
      this.$router.push({ name: routerName });
    },
  },
});
</script>

<style scoped>

</style>
