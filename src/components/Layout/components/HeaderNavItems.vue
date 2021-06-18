<template>
  <div>
    <li class="nav-item" v-for="item in navBarItems" :key="item.routerName">
      <a class="nav-link" @click="goToPage(item.routerName)"
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
        { name: 'Home', showIn: 'all', routerName: 'home' },
        { name: 'Registrar', showIn: 'onlyUnauthenticated', routerName: 'register' },
        { name: 'Login', showIn: 'onlyUnauthenticated', routerName: 'login' },
        { name: 'Configurações', showIn: 'onlyAuthenticated', routerName: 'setting' },
        { name: '{{}}', showIn: 'onlyAuthenticated', routerName: 'setting' },
      ] as NavbarItem[],
    };
  },
  methods: {
    goToPage(routerName: string) {
      this.$router.push({ name: routerName });
    },
    isCurrentPageActive(routerName: string) {
      return this.$route.name === routerName;
    },
    currentUserUser() {
      return store.state.Auth.currentUser.username;
    },
  },
});
</script>

<style scoped>

</style>
