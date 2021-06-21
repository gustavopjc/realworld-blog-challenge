<template>
  <button class="btn btn-outline-danger" @click="logout()">
    Logout
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'logout-button',
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
});
</script>

<style scoped>

</style>
