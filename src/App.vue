<template>
  <v-app>
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
  components: {
    Header,
    FooterComponent,
  },
});
</script>

<style scoped>

</style>
