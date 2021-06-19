<template>
  <v-app>
    <!-- <v-overlay :value="$isLoading">
      <v-progress-circular
        indeterminate
        color="primary"
        size="64"
      ></v-progress-circular>
    </v-overlay> -->
    <v-main>
      <Header/>
      <v-content>
        <router-view/>
      </v-content>
      <FooterComponent style="fixed: bottom"/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Header from '@/components/Layout/Header.vue';
import FooterComponent from '@/components/Layout/Footer.vue';

export default defineComponent({
  name: 'app',
  components: {
    Header,
    FooterComponent,
  },
});
</script>

<style scoped>
  html, body {
    padding: 0px !important;
    margin: 0px !important;
    height: 100% !important;
  }
</style>
