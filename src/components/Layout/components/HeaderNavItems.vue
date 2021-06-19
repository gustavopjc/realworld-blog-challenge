<template>
  <div>
    <li class="nav-item" v-for="item in navBarItems" :key="item.routerName">
      <a class="nav-link" @click="goToPage(item.routerName)" v-if="showItemCheck(item)"
        :class="{ 'active': isCurrentPageActive(item.routerName) }">
        {{ item.name }}
      </a>
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { NavbarItem } from '@/models';
import store from '@/store';

export default defineComponent({
  name: 'header-nav-itens',
  data() {
    return {
      navBarItems: [
        { name: 'Home', showIn: ['authenticated', 'unauthenticated'], routerName: 'home-global' },
        { name: 'Registrar', showIn: ['unauthenticated'], routerName: 'register' },
        { name: 'Login', showIn: ['unauthenticated'], routerName: 'login' },
        { name: 'Novo artigo', showIn: ['authenticated'], routerName: 'new-article' },
        { name: 'Configurações', showIn: ['authenticated'], routerName: 'settings' },
        { name: this.getCurrentUserUsername(), showIn: ['authenticated'], routerName: 'profile' },
      ] as NavbarItem[],
    };
  },
  computed: {
    currentAuthState() {
      return store.getters.getCurrentaAuthState;
    },
  },
  methods: {
    goToPage(routerName: string) {
      this.$router.push({ name: routerName });
    },
    isCurrentPageActive(routerName: string) {
      return this.$route.name === routerName;
    },
    getCurrentUserUsername() {
      return store.getters.getCurrentUser.username;
    },
    showItemCheck(item: NavbarItem) {
      return item.showIn.includes(this.currentAuthState);
    },
  },
});
</script>

<style scoped>

</style>
