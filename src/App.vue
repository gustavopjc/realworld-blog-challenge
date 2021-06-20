<template>
  <v-app>
    <!-- <v-overlay :value="$isLoading">
      <v-progress-circular
        indeterminate
        color="primary"
        size="64"
      ></v-progress-circular>
    </v-overlay> -->
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Header from '@/components/Layout/Header.vue';
import Footer from '@/components/Layout/Footer.vue';
import UserService from '@/services/UserService';

export default defineComponent({
  name: 'app',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      userService: new UserService(),
    };
  },
  methods: {
    async fetchCurrentUser() {
      await this.userService.get().then((response) => {
        this.$store.dispatch('updateCurrentUser', response.user);
      });
    },
  },
  async created() {
    this.fetchCurrentUser();
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
